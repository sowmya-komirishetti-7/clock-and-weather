import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicWeatherComponent } from './dynamic-weather.component';

describe('DynamicWeatherComponent', () => {
  let component: DynamicWeatherComponent;
  let fixture: ComponentFixture<DynamicWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
