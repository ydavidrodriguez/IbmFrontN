import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };

  botonPresionado: string ="festividades";

  Datos = [
    {dias: 'Lunes', inicio: '8:00', a: 'a', fin: '5:00'},
    {dias: 'Martes', inicio: '8:00', a: 'a', fin: '5:00'},
    {dias: 'Miercoles', inicio: '8:00', a: 'a', fin: '5:00'},
    {dias: 'Jueves', inicio: '8:00', a: 'a', fin: '5:00'},
    {dias: 'Viernes', inicio: '8:00', a: 'a', fin: '5:00'},
    {dias: 'Sabado', inicio: '8:00', a: 'a', fin: '5:00'},
    {dias: 'Domingo', inicio: '8:00', a: 'a', fin: '5:00'}
  ];

  columnasAMostrar = ['dias', 'inicio', 'a', 'fin'];
}
