import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string='';
password:string='';

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
login(){
  if(this.username==this.username && this.password==this.password){
    this.loginService.username=this.username;
  }else{
alert('invalid credentials');
  }
}
}
