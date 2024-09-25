import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SidebarcomponentComponent } from './components/sidebarcomponent/sidebarcomponent.component';
import { HomeService } from './services/home.service';
import { IAllAlbum } from './utils/type';
import { allMusic } from './utils/constant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Music Player';

  albums: IAllAlbum[] = allMusic;
  homeSearch: string | number = '';

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    initFlowbite();

    // Subscribe search
    this.homeService.homeSearch.subscribe(
      (search) => (this.homeSearch = search),
    );
    this.homeService.allMusic.subscribe((music) => {
      this.albums = music;
    });
  }

  handleSearch(e: Event) {
    const searchElement = e.target as HTMLInputElement;

    const searchMusic = this.albums.filter((music) => {
      return music.title
        .toLowerCase()
        .includes(searchElement.value.trim().toLowerCase());
    });

    // SET ALL MUSIC SEARCH
    this.homeService.setAllMusicSearch(searchMusic);
    // SET GLOBAL SEARCH
    this.homeService.setSearch(searchElement.value);

    if (searchElement.value.trim() === '') {
      this.homeService.setAllMusicSearch(allMusic);
    }
  }
}
