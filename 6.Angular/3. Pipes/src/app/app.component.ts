import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Edwar";

  nombre2 = "edwar augusto jaRamillo soTo"

  arreglo=[1,2,3,4,5,6,7,8,9];
  PI = Math.PI;
  a:number = 0.234;
  salario = 1234.5;

  heroe= {
    nombre:"Logan",
    clave:"Wolverine",
    edad:500,
    direccion:{
      calle:"El poblado Medellín",
      casa:5
    }
  };

  valorDePromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Llegó la data!"),3500);
  });

  fecha = new Date();

  video = "zCTS9VIgc_I?rel=0";

  activar_cifrado:boolean = true;
}
