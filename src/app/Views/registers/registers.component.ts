import { Component } from '@angular/core';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent {
  Datos = [
    {nombre: 'Juan Acosta', idUsuario: 'C545645', cliente: 'Tvall', reporte: '00001', correo: 'juan@correo.com', cargo: 'Empleado' ,editar:'ver detalles'},
    {nombre: 'Mario Duarte', idUsuario: 'C369847', cliente: 'AllSa', reporte: '00020', correo: 'mario@correo.com', cargo: 'Aprobador' ,editar:'ver detalles'},
    
  ];

  columnasAMostrar = ['nombre', 'idUsuario', 'cliente', 'reporte', 'correo', 'cargo', 'editar'];
}
