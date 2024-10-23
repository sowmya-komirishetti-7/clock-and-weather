import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements OnInit, OnDestroy {

  hourHandStyle!: string;
  minuteHandStyle!: string;
  secondHandStyle!: string;
  intervalId!: any; 

  constructor(private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
    
    this.setInitialCustomTime(11, 35);

    setTimeout(() =>{
      this.updateClock();
      this.intervalId = setInterval(() => this.updateClock(), 1000); 
    }, 1000);
   
  }

  ngOnDestroy(): void {
    
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setInitialCustomTime(hours: number, minutes: number): void {

    const seconds = 0;

    this.hourHandStyle = `rotate(${this.getHourHandAngle(hours, minutes)}deg)`;
    this.minuteHandStyle = `rotate(${this.getMinuteHandAngle(minutes)}deg)`;
    this.secondHandStyle = `rotate(${this.getSecondHandAngle(seconds)}deg)`;

    this.cdr.detectChanges();
  }
  updateClock(): void {
    const now = new Date();  

    console.log("Current Time: ", now);

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    
    this.hourHandStyle = `rotate(${this.getHourHandAngle(hours, minutes)}deg)`;
    this.minuteHandStyle = `rotate(${this.getMinuteHandAngle(minutes)}deg)`;
    this.secondHandStyle = `rotate(${this.getSecondHandAngle(seconds)}deg)`;

    this.cdr.detectChanges();
  }

  
  getHourHandAngle(hours: number, minutes: number): number {
    return (hours % 12) * 30 + (minutes / 60) * 30; 
  }

 
  getMinuteHandAngle(minutes: number): number {
    return (minutes / 60) * 360; 
  }

 
  getSecondHandAngle(seconds: number): number {
    return (seconds / 60) * 360; 
  }
}
