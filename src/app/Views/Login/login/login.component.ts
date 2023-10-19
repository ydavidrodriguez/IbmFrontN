import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  hide = true;
  constructor(private router:Router)
  {

  }


username : string ="";
password : string ="";
show: boolean= false;
submit(){
console.log("user name is " + this.username)
this.clear();
}
clear(){
  this.username ="";
  this.password = "";
  this.show = true;
  }
Login(){

  this.router.navigate(['dashboard'])
}





}
