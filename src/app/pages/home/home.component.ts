import { Component, OnInit } from '@angular/core';
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

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    // Subscribe to the loading state
    this.homeService.albumType.subscribe((type) => {
      this.albumType = type;
    });
  }

  changeType(type: TypeCategoryAlbum) {
    this.homeService.setAlbumType(type);
  }
}
