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
    this.trabajador[0].nombre = 'Sergi';
    this.trabajador[0].apellidos = 'Bertran';
    this.trabajador[0].imagen = 'https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg';
    this.trabajador[0].descripcion = 'alumno daw2';

    this.trabajador[1].nombre = 'Nelson';
    this.trabajador[1].apellidos = 'Perez';
    this.trabajador[1].imagen = 'https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg';
    this.trabajador[1].descripcion = 'profesor lenguaje marcas';

    this.trabajador[2].nombre = 'Alex';
    this.trabajador[2].apellidos = 'Rodriguez';
    this.trabajador[2].imagen = 'https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg';
    this.trabajador[2].descripcion = 'es weno';
  }
  informarTrabajador(event) {
    this.informarEvent.emit(event);
  }
}
