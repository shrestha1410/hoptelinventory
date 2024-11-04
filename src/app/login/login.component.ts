import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email:string ="";
  password: string="";
  constructor(private route:Router){}
login(){
  if(this.email ==="admin@gmail.com" && this.password==="admin"){
    alert("Login SuccessFull");
    this.route.navigate(['/rooms','add']);
    // this.route.navigateByUrl("/rooms/add");
  }
}

}
