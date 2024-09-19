import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicpagesComponent } from './musicpages.component';

describe('MusicpagesComponent', () => {
  let component: MusicpagesComponent;
  let fixture: ComponentFixture<MusicpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicpagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
