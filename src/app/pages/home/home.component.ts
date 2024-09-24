import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  IAllAlbum,
  IListTypeCategory,
  TypeCategoryAlbum,
} from '../../utils/type';
import { allMusic, ListTypeCategory } from '../../utils/constant';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  categories: IListTypeCategory[] = ListTypeCategory;
  albums: IAllAlbum[] = allMusic;
  albumType: TypeCategoryAlbum = 'all';
  homeSearch: string | number = '';

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    // Subscribe album type
    this.homeService.albumType.subscribe((type) => {
      this.albumType = type;
    });

    // Subscribe home search
    this.homeService.homeSearch.subscribe((search) => {
      this.homeSearch = search;
    });

    // Subscribe allmusic
    this.homeService.allMusic.subscribe((music) => {
      this.albums = music;
    });
  }

  changeType(type: TypeCategoryAlbum) {
    this.homeService.setAlbumType(type);

    this.albums = allMusic.filter((music) => {
      if (type === 'all') {
        return music;
      }
      return music.type === type;
    });
  }
}
