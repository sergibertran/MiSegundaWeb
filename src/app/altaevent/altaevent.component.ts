import { Component, OnInit, Input } from '@angular/core';
import { evento } from '../models/evento.model';

@Component({
  selector: 'app-altaevent',
  templateUrl:'./altaevent.component.html',
  styleUrls: ['./altaevent.component.css']
})
export class AltaeventComponent implements OnInit {

  constructor() { }
  @Input() nEvent;

  ngOnInit(): void {
  }



  Enviarnombres( nEvent, Correo,Lloc,Desc) {

    }
}





