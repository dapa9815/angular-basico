import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    //Aqui se ponen todos los componentes relacionados con el modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    /*Aqui van las cosas que quiero que sean visibles fuera del modulo,
    lo que resta ya sigue dentro del modulo*/
    exports: [
        ListadoComponent
    ],
    /*Los imports van los modulos o los objetos */
    imports: [
        CommonModule
    ]
})
export class HeroesModule {}
