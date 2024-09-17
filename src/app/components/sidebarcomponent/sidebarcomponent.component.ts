import { IMusicPlaylist } from '../../utils/type';
import { PlaylistMusic } from './../../utils/constant';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebarcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebarcomponent.component.html',
  styleUrl: './sidebarcomponent.component.css',
})
export class SidebarcomponentComponent {
  PlaylistMusic: IMusicPlaylist[] = PlaylistMusic;

  constructor() {
    console.log(PlaylistMusic);
  }
}
