import { Component } from '@angular/core';

@Component({
  selector: 'app-aprovve-time',
  templateUrl: './aprovve-time.component.html',
  styleUrls: ['./aprovve-time.component.css']
})
export class AprovveTimeComponent {
  Datos = [
  {fechaEnvio: '2023-10-26', empleado: 'Juan Romero', identificacion: '45545646', cliente: 'Chanchitos', horas: '8', detalles: 'Revisar'},
  {fechaEnvio: '2023-10-27', empleado: 'Carmen Ramirez', identificacion: '01545642', cliente: 'Tvall', horas: '7', detalles: 'Revisar'},
  {fechaEnvio: '2023-10-25', empleado: 'Mario Ruiz', identificacion: '0544542', cliente: 'Muchmarcs', horas: '5', detalles: 'Revisar'},
  {fechaEnvio: '2023-10-26', empleado: 'Daniela Bustamante', identificacion: '54988642', cliente: 'Sa', horas: '3', detalles: 'Revisar'}
];

columnasAMostrar = ['fechaEnvio', 'empleado', 'identificacion', 'cliente', 'horas', 'detalles'];

}
