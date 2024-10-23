import { Component } from '@angular/core';
import { WeatherReportService } from '../weather-report.service';

@Component({
  selector: 'app-dynamic-weather',
  templateUrl: './dynamic-weather.component.html',
  styleUrls: ['./dynamic-weather.component.css']
})
export class DynamicWeatherComponent {

  weatherData: any;
  city: string = 'Hyderabad';

  constructor(private weatherService: WeatherReportService){}

  ngOnInit(): void {
    this.getWeatherReport();
  }

  getWeatherReport(): void {
    this.weatherService.getWeather(this.city).subscribe(
      data => this.weatherData = data,
      err => console.error(err)
    );
  }
}
