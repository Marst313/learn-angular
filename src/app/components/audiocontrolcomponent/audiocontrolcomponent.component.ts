import { Component } from '@angular/core';

@Component({
  selector: 'app-audiocontrolcomponent',
  standalone: true,
  imports: [],
  templateUrl: './audiocontrolcomponent.component.html',
  styleUrl: './audiocontrolcomponent.component.css',
})
export class AudiocontrolcomponentComponent {
  isPlaying: boolean = true;
}
