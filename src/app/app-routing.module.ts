import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockandweatherComponent } from './clockandweather/clockandweather.component';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { DynamicWeatherComponent } from './dynamic-weather/dynamic-weather.component';

const routes: Routes = [
  {path:"",component: ClockandweatherComponent},
  {path:"clock",component: ClockComponent},
  {path:"weather",component: WeatherComponent},
  {path:"analogclock", component: AnalogClockComponent},
  {path:"dw",component: DynamicWeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
