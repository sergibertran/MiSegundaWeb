import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { evento } from '../models/evento.model';

@Component({
  selector: 'app-altaevent',
  templateUrl:'./altaevent.component.html',
  styleUrls: ['./altaevent.component.css']
})
export class AltaeventComponent implements OnInit {

  @Output() altaEvento = new EventEmitter<evento>();

  constructor() { }


  ngOnInit(): void {
  }

  Enviarnombres(nEvent,Lloc,Correo,Desc) {


  this.altaEvento.emit(new evento(nEvent,Lloc,Correo,Desc));

}


    }






