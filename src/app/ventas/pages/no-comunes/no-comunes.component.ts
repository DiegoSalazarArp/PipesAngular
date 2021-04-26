import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent implements OnInit {
  constructor() {}

  // i18nSelect
  nombre = 'Diego';
  genero = 'masculino';
  invitadoMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Diego', 'Maria', 'Matias', 'Pedro', 'Juan'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  persona = {
    nombre: 'Diego',
    edad: 27,
    dirección: 'Independencia',
  };

  jsonPipe = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
  ];

  // Async pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos ya la promesa');
    }, 3500);
  });

  cambiarNombre(): void {
    if (this.nombre === 'Diego') {
      this.nombre = 'Melisa';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Diego';
      this.genero = 'masculino';
    }
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

  ngOnInit(): void {}
}
