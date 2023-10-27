import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-history',
  templateUrl: './popup-history.component.html',
  styleUrls: ['./popup-history.component.css']
})
export class PopupHistoryComponent {

  Datos = [
    {aprobador1: 'Aprobado', aprobador2: '---', estado: 'En proceso'}
  ];

  columnasAMostrar = ['aprobador1', 'aprobador2', 'estado'];

  constructor(public dialogRef: MatDialogRef<PopupHistoryComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

}
