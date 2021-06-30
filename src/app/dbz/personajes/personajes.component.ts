import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  // @Input() personajes: Personaje[] = [];

  get personajes(): Personaje[] {
    /* esye "personajes" hace referencia al get del sevicio de personajes
     */
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService ) {}
}
