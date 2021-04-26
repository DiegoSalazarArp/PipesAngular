import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {
  ventasNetas = 23546372.9288;
  porcentaje = 0.48;
  constructor() { }

  ngOnInit(): void {
  }

}
