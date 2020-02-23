import { Injectable, EventEmitter } from '@angular/core';
import { Redakte } from '../model/redakte';

@Injectable({
  providedIn: 'root'
})
export class RedakteService {
  redakteler:Redakte[]=[];
  hadisemiz:EventEmitter<Redakte>=new EventEmitter();
  constructor() {

  }}