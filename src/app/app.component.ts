import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SidebarcomponentComponent } from './components/sidebarcomponent/sidebarcomponent.component';
import { AudiocontrolcomponentComponent } from './components/audiocontrolcomponent/audiocontrolcomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarcomponentComponent,
    AudiocontrolcomponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Music Player';

  ngOnInit(): void {
    initFlowbite();
  }
}
