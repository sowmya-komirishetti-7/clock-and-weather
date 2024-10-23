import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherReportService {

  private apiKey = '18fa2442d832439fa3e63750242310';
  private apiUrl = 'http://api.weatherapi.com/v1/current.json?key=18fa2442d832439fa3e63750242310&q=Hyderabad&aqi=yes';
  // http://api.weatherapi.com/v1/current.json

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url =  `${this.apiUrl}?key=${this.apiKey}&q=${city}&aqi=yes`;
    return this.http.get(url);
  }
}
