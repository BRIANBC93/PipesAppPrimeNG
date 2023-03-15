import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'brian';
  nombreUpper: string = 'BRIAN';
  nombreCompleto: string ='BriAn bErNAl';

  fecha: Date = new Date(); // el día de hoy

}
