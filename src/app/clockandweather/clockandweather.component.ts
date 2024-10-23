import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clockandweather',
  templateUrl: './clockandweather.component.html',
  styleUrls: ['./clockandweather.component.css']
})
export class ClockandweatherComponent implements OnInit {
  activeContent: string = 'home';  // Default view is 'Home'
  currentDate: string = '';
  currentTime: string = '';
  currentDay: string = '';
  crntTime: Date | undefined;
  weatherReport: string = 'Sunny, 25°C';  
  
  constructor() {}

  ngOnInit(): void {
    this.updateDateTime();

    setInterval(() =>{
      this.updateDateTime();
    }, 1000);

    this.updateTime();
    setInterval(() => this.updateDateTime(), 60000);
  }

  // Method to switch content based on the button clicked
  showContent(content: string): void {
    this.activeContent = content;
  }

  // Method to update the current time every second (for clock view)
  updateDateTime(): void {
    const now = new Date();
    this.currentDate = now.toLocaleString();
    this.currentTime = now.toLocaleTimeString();
    this.currentDay = now.toLocaleString('en-US', { weekday: 'long'});
    
  }

  private updateTime(): void {
    this.crntTime = new Date();
  }
 
  weatherData = {
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
  
}
