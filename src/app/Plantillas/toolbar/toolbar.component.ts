import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private router:Router)
  {

  }
  Redireccion(){
    console.log("entro");
    this.router.navigate(['user'])
  }
  Redireccion1(){
    console.log("entro");
    this.router.navigate(['resgitertime'])
  }
  Redireccion2(){
    console.log("entro");
    this.router.navigate(['history'])
  }
  Redireccion3(){
    console.log("entro");
    this.router.navigate(['aproveetime'])
  }
  Redireccion4(){
    console.log("entro");
    this.router.navigate(['parameters'])
  }
  Redireccion5(){
    console.log("entro");
    this.router.navigate(['profiles'])
  }
  Redireccion6(){
    console.log("entro");
    this.router.navigate(['registers'])
  }

}

