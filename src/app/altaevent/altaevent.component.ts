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

  mForm = new evento('', '', '', '');

  constructor() { }


  ngOnChanges(changes):void{
    if(this.mEvent !== undefined){
      this.mForm = this.mEvent;
    }
  }

  Enviarnombres() {
    if(!this.mEvent){
      this.altaEvento.emit(this.mForm);
    }
    this.mEvent = undefined;
    this.mForm = new evento('', '', '', '');
  }

}






