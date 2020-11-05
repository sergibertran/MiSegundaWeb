import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { trabajador } from 'src/app/models/trabajador';

@Component({
  selector: 'app-lista-trabajador',
  templateUrl: './lista-trabajador.component.html',
  styleUrls: ['./lista-trabajador.component.css']
})
export class ListaTrabajadorComponent implements OnInit {

  trabajador = [new trabajador(), new trabajador(), new trabajador()];
  @Output() informarEvent = new EventEmitter<trabajador>();

  constructor() { }

  ngOnInit(): void {
    this.trabajador[0].nombre = 'Perico';
    this.trabajador[0].apellidos = 'Kiko';
    this.trabajador[0].imagen = 'Kiko';
    this.trabajador[0].descripcion = 'Kiko';

    this.trabajador[1].nombre = 'Mariano';
    this.trabajador[1].apellidos = 'Kiko';
    this.trabajador[1].imagen = 'Kiko';
    this.trabajador[1].descripcion = 'Kiko';

    this.trabajador[2].nombre = 'Kiko';
    this.trabajador[2].apellidos = 'Kiko';
    this.trabajador[2].imagen = 'Kiko';
    this.trabajador[2].descripcion = 'Kiko';
  }
  informarTrabajador(event) {
    this.informarEvent.emit(event);
  }
}
