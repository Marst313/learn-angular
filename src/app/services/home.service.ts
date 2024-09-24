import { allMusic } from './../utils/constant';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAllAlbum, TypeCategoryAlbum } from '../utils/type';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private albumTypeSubject = new BehaviorSubject<TypeCategoryAlbum>('all');
  private homeSearchSubject = new BehaviorSubject<string | number>('');
  private allMusicSubject = new BehaviorSubject<IAllAlbum[]>(allMusic);

  // Export the observables
  albumType = this.albumTypeSubject.asObservable();
  homeSearch = this.homeSearchSubject.asObservable();
  allMusic = this.allMusicSubject.asObservable();

  setAlbumType(type: TypeCategoryAlbum) {
    this.albumTypeSubject.next(type);
  }
  setSearch(search: string | number) {
    this.homeSearchSubject.next(search);
  }
  setAllMusicSearch(music: IAllAlbum[]) {
    this.allMusicSubject.next(music);
  }
}
