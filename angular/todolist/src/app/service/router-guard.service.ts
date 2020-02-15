import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate{
  canActivate(){
  
  };
  constructor() {}
}
