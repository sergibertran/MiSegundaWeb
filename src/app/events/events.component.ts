import { Component, OnInit, Input, Output  } from '@angular/core';
import { evento } from '../models/evento.model';
import { stringify } from 'querystring';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }
  arrayEvents: evento[] = [];


  ngOnInit(): void {

  }

  EnviarDatos(nEvent, Correo,Lloc,Desc) {
    this.arrayEvents.push(new evento(nEvent.value, Correo.value,Lloc.value,Desc.value));
  }




}

