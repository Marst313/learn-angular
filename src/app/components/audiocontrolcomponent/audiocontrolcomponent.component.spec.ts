import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiocontrolcomponentComponent } from './audiocontrolcomponent.component';

describe('AudiocontrolcomponentComponent', () => {
  let component: AudiocontrolcomponentComponent;
  let fixture: ComponentFixture<AudiocontrolcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudiocontrolcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiocontrolcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
