import { Component, OnInit, Input, Output  } from '@angular/core';
import { evento } from '../models/evento.model';
import { stringify } from 'querystring';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  constructor() { }

  arrayEvents: evento[] = [];
  mEvent: evento;


  addEvento(test){
    this.arrayEvents.push(test)
  }

  eliminar(i){

    this.arrayEvents.splice(i,1);

  }

  modificar(i){
    this.mEvent = this.arrayEvents[i];
  }



}


