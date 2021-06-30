import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {
  
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  /* para que se puedan obtener todas las funciones del servicio se inyecta al archivo */
  constructor( private dbzService: DbzService ){}

  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ) { return;}
    console.log(this.nuevo);
    // this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agrgearPersonaje( this.nuevo );
    
    this.nuevo = {nombre: '', poder: 0}
  }
}
