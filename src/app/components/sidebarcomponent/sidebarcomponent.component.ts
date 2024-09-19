import { IMusicPlaylist } from '../../utils/type';
import { PlaylistMusic } from './../../utils/constant';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../services/audio.service';
import { formatDuration, timeToSeconds } from '../../utils/function';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebarcomponent',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebarcomponent.component.html',
  styleUrl: './sidebarcomponent.component.css',
})
export class SidebarcomponentComponent implements OnInit {
  PlaylistMusic: IMusicPlaylist[] = PlaylistMusic;
  isLoading: boolean = false;
  isPlaying: boolean = false;
  isShowed: boolean = false;
  maxDuration: string = '00:00';
  currentDuration: number = 0;
  currentVolume: number = 5;

  timeToSeconds = timeToSeconds;
  formatDuration = formatDuration;

  constructor(private audioService: AudioService) {}

  ngOnInit() {
    // Subscribe to the loading state
    this.audioService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
    // Subscribe to the playing state
    this.audioService.isPlaying$.subscribe((isPlaying) => {
      this.isPlaying = isPlaying;
    });
    // Subscribe to the maxDuration
    this.audioService.maxDuration$.subscribe((duration) => {
      this.maxDuration = duration;
    });
    // Subscribe to the currentDuration
    this.audioService.currentDuration$.subscribe((duration) => {
      this.currentDuration = Math.ceil(Number(duration));
    });
  }

  playSelectedMusic(music: IMusicPlaylist, index: number) {
    // Delegate the playback logic to the AudioService
    this.audioService.playMusic(music, index);
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.audioService.pauseMusic();
    } else {
      this.audioService.playMusicBack(this.currentDuration);
    }
  }

  saveRange(e: Event, type: 'duration' | 'volume') {
    const inputElement = e.target as HTMLInputElement;
    const newDuration = Number(inputElement?.value);

    if (type === 'duration') {
      this.currentDuration = newDuration;
      this.audioService.seekTo(newDuration);
      return;
    }

    if (type === 'volume') {
      this.currentVolume = newDuration;
      this.audioService.changeVolume(newDuration);
    }
  }

  // UPDATE BACKGROUND DYNAMICALLY
  getSliderBackground(type: 'volume' | 'duration'): string {
    let percentage;

    if (type === 'duration') {
      const max = this.timeToSeconds(this.maxDuration);
      percentage = (this.currentDuration / max) * 100;
      return `linear-gradient(to right, #37b7c3 ${percentage}%, #d1d5db ${percentage}%)`;
    }

    percentage = (this.currentVolume / 10) * 100;

    // Create a linear gradient based on the current duration percentage
    return `linear-gradient(to right, #37b7c3 ${percentage}%, #d1d5db ${percentage}%)`;
  }

  setVolume(volume: number) {
    this.currentVolume = volume;
    this.audioService.changeVolume(volume);
  }
}
