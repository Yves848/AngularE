import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  constructor() { }

  ngOnInit(): void {

  }

}
