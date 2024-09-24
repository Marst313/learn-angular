import { Routes } from '@angular/router';
import { MusicpagesComponent } from './pages/musicpages/musicpages.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'music/:name',
    component: MusicpagesComponent,
  },
];
