import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMusicPlaylist } from '../utils/type';
import { formatDuration } from '../utils/function';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private isPlayingSubject = new BehaviorSubject<boolean>(false);
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  private maxDurationSubject = new BehaviorSubject<string>('00:00');
  private currentValueDurationSubject = new BehaviorSubject<number>(0);
  private currentAudioElementSubject =
    new BehaviorSubject<HTMLAudioElement | null>(null);
  private currentPlayingIndex: number | null = null;

  // Export the observables
  isPlaying$ = this.isPlayingSubject.asObservable();
  isLoading$ = this.isLoadingSubject.asObservable();
  maxDuration$ = this.maxDurationSubject.asObservable();
  currentDuration$ = this.currentValueDurationSubject.asObservable();
  currentAudio$ = this.currentAudioElementSubject.asObservable();

  setIsPlaying(isPlaying: boolean) {
    this.isPlayingSubject.next(isPlaying);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }

  setMaxDuration(duration: string) {
    this.maxDurationSubject.next(duration);
  }

  setCurrentValueDuration(duration: number) {
    this.currentValueDurationSubject.next(duration);
  }

  setCurrentAudioElement(audio: HTMLAudioElement | null) {
    this.currentAudioElementSubject.next(audio);
  }

  playMusic(music: IMusicPlaylist, index: number) {
    // Pause and reset the current audio if it's already playing
    const currentAudio = this.currentAudioElementSubject.value;
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      this.setIsPlaying(false);
    }

    // Create a new Audio object for the selected song
    const newAudio = new Audio(`/assets/audio/${music.fileName}`);
    this.setCurrentAudioElement(newAudio);
    this.setIsLoading(true);
    this.currentPlayingIndex = index;

    newAudio.load();
    newAudio
      .play()
      .then(() => {
        const maxDuration = formatDuration(newAudio.duration);

        this.setMaxDuration(maxDuration);
        this.setIsPlaying(true);
        this.setIsLoading(false);

        // Update currentValueDuration every second
        setInterval(() => {
          if (this.currentAudioElementSubject.value) {
            this.setCurrentValueDuration(
              this.currentAudioElementSubject.value.currentTime,
            );
          }
        }, 1000);
      })
      .catch((error) => {
        console.error('Audio playback error:', error);
        this.setIsPlaying(false);
        this.setIsLoading(false);
      });

    newAudio.onchange = () => {
      console.log(newAudio.currentTime);
      this.setCurrentValueDuration(newAudio.currentTime);
    };
    // Add an event listener to reset the state when the audio ends
    newAudio.onended = () => {
      this.currentPlayingIndex = null;
      this.setCurrentAudioElement(null);
      this.setIsPlaying(false);
      this.setIsLoading(false);
    };
  }

  pauseMusic() {
    const currentAudio = this.currentAudioElementSubject.value;
    if (currentAudio) {
      currentAudio.pause();
      this.setIsPlaying(false);
    }
  }
}
