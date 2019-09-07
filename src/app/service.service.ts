import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions}  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  let:string = "localhost:3306/telescola";

  constructor(public http: Http) {
  
  }
}
