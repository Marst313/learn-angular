import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { IMusicPlaylist } from '../../utils/type';
import { PlaylistMusic } from '../../utils/constant';

@Component({
  selector: 'app-musicpages',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './musicpages.component.html',
  styleUrl: './musicpages.component.css',
})
export class MusicpagesComponent implements OnInit {
  music: IMusicPlaylist | undefined; // store single music

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const name = paramMap.get('name');
      this.music = PlaylistMusic.find((m) => m.name === name);
    });
  }
}
