import { Component } from '@angular/core';



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  Datos = [
    {fechaEnvio: '2023-10-26', cliente: '123', reporte: '456', aprobador: 'Juan', horas: '8', estado: 'Aprobado'},
    {fechaEnvio: '2023-10-27', cliente: '789', reporte: '012', aprobador: 'Ana', horas: '7', estado: 'Pendiente'},
    
  ];

  columnasAMostrar = ['fechaEnvio', 'cliente', 'reporte', 'aprobador', 'horas', 'estado'];
}
