import { IMusicPlaylist } from '../../utils/type';
import { PlaylistMusic } from './../../utils/constant';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../services/audio.service';
import { timeToSeconds } from '../../utils/function';

@Component({
  selector: 'app-sidebarcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebarcomponent.component.html',
  styleUrl: './sidebarcomponent.component.css',
})
export class SidebarcomponentComponent implements OnInit {
  PlaylistMusic: IMusicPlaylist[] = PlaylistMusic;
  isLoading: boolean = false;
  isPlaying: boolean = false;
  isShowed: boolean = false;
  maxDuration: string = '';
  currentDuration: number = 0;
  timeToSeconds = timeToSeconds;

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

  saveRange(e: any) {
    console.log(e);
  }

  playSelectedMusic(music: IMusicPlaylist, index: number) {
    // Delegate the playback logic to the AudioService
    this.audioService.playMusic(music, index);
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.audioService.pauseMusic();
    } else {
    }
  }

  setIsPlaying(isPlaying: boolean) {
    this.audioService.setIsPlaying(isPlaying);
  }

  updateDuration(duration: string) {
    this.audioService.setMaxDuration(duration);
  }
}
