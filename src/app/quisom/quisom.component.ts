import { Component, OnInit } from '@angular/core';
import { trabajador } from '../../app/models/trabajador';

@Component({
  selector: 'app-quisom',
  templateUrl: './quisom.component.html',
  styleUrls: ['./quisom.component.css']
})
export class QuisomComponent implements OnInit {


  trabajador = '';
  mostrar = true;
  constructor() { }

ngOnInit(): void{
}

trabajadorSeleccionado: trabajador;
cambiarTrabajador(trabajador){
this.trabajadorSeleccionado = trabajador;

  }

}
