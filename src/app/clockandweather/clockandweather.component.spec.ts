import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockandweatherComponent } from './clockandweather.component';

describe('ClockandweatherComponent', () => {
  let component: ClockandweatherComponent;
  let fixture: ComponentFixture<ClockandweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockandweatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockandweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
