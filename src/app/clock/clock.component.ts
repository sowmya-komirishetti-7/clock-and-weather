import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
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

    // this.updateTime();
    // setInterval(() => this.updateDateTime(), 60000);
  }

  // Method to switch content based on the button clicked
  showContent(content: string): void {
    this.activeContent = content;
  }


  updateDateTime(): void {
    const now = new Date();
    this.currentDate = now.toLocaleString();
    this.currentTime = now.toLocaleTimeString();
    this.currentDay = now.toLocaleString('en-US', { weekday: 'long'});
    
  }

}


