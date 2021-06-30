import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';



@Injectable()
/*
el orden de los servicios o como se definen las cosas dentro de estos archivos 
es el siguiente:
1.- variables
2.- getters y setters functions
3.- constructor
4.- functiones

*/
export class DbzService {
    /* de manera estandar cuando se quiere que una variable no sea
    manipulada desde otro archivo se le pone un guion bajo al principio
    del nombre (_nombreVariable) */


    private _personajes: Personaje[] =[
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ]

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    agrgearPersonaje( personaje: Personaje) {
        this._personajes.push( personaje );
    }
}