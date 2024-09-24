import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeCategoryAlbum } from '../utils/type';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private albumTypeSubject = new BehaviorSubject<TypeCategoryAlbum>('all');

  albumType = this.albumTypeSubject.asObservable();

  setAlbumType(type: TypeCategoryAlbum) {
    this.albumTypeSubject.next(type);
  }
}
