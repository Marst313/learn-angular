import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MusicpagesComponent } from './pages/musicpages/musicpages.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'music/:name',
    component: MusicpagesComponent,
  },
];
