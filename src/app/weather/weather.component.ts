import { Component, OnInit } from '@angular/core';
import { WeatherReportService } from '../weather-report.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{

  weatherData: any;
  city: string = 'Hyderabad';

  constructor(private weatherService: WeatherReportService){}


  getWeatherReport(): void {
    this.weatherService.getWeather(this.city).subscribe(
      data => this.weatherData = data,
      err => console.error(err)
    );
  }
  ngOnInit(): void {
    this.getWeatherReport();
    this.updateTime();
     setInterval(() => this.updateTime(), 60000);
  }

  crntTime: Date | undefined;
  weatherReport: string = 'Sunny, 25°C';  
  
  weatherData1 = {
    today: {
      description: 'Partly sunny and humid',
      high: 32,
      low: 23,
    },
    current: {
      time: '12:00 PM',
      temperature: 30,
      realFeel: 32,
      realFeelShade: 28,
      wind: '10 km/h',
      windGusts: '15 km/h',
      description: 'Sunny',
      airQuality: 'Good',
    }
  };
  
  private updateTime(): void {
    this.crntTime = new Date();
  }


}
