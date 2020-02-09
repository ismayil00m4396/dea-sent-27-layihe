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
  if(this.username=='tofiq' && this.password=='12'){
    this.loginService.username=this.username;
  }else{
alert('invalid credentials');
  }
}
}