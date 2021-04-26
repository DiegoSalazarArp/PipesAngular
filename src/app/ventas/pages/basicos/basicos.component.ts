import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower = 'diego';
  nombreUpper = 'DIEGO';
  nombreCompleto = 'dIegO saLAzaR';

  fecha: Date = new Date(); // dia de hoy
  constructor() { }

  ngOnInit(): void {
  }

}
