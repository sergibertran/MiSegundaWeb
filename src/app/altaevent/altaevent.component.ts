import { Component, OnChanges, Output, EventEmitter, Input} from '@angular/core';
import { evento } from '../models/evento.model';

@Component({
  selector: 'app-altaevent',
  templateUrl:'./altaevent.component.html',
  styleUrls: ['./altaevent.component.css']
})
export class AltaeventComponent implements OnChanges {

  @Output() altaEvento = new EventEmitter<evento>();
  @Input() mEvent: evento;
  erCorreo = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  conterrores=0;
  mForm = new evento('', '', '', '');
  mostrarInfo = '';
  mostrarInfo2 = '';
  constructor() { }


  ngOnChanges(changes):void{
    if(this.mEvent !== undefined){
      this.mForm = this.mEvent;
    }
  }

  Enviarnombres() {
    console.log (this.conterrores);
if (this.conterrores==0){



    if(!this.mEvent){
      this.altaEvento.emit(this.mForm);
    }
    this.conterrores==0;
    this.mEvent = undefined;
    this.mForm = new evento('', '', '', '');
  }
}

Corregir(nEvent,Lloc,Correo,Desc) {
if (nEvent.value == '') {
  this.conterrores++;
  alert('El nombre esta vacio');
}
if (Lloc.value == '') {
  this.conterrores++;
  alert('El nombre esta vacio');
}
if (Correo.value == '') {
  this.conterrores++;
  alert('El nombre esta vacio');
}
if (Desc.value == '') {
  this.conterrores++;
  alert('El nombre esta vacio');
}

if (Correo.match(this.erCorreo)) {

  this.mostrarInfo = 'Correcto';
} else {
  this.conterrores++;
  this.mostrarInfo ='Incorrecto';
}

}
}


