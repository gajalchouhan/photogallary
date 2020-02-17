import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
declare var require: any
import {data} from './data';

@Injectable({
  providedIn: 'root'
})
export class BbService {

  constructor(private http : HttpClient) { }

  public getData(){
    return new Observable((observer) => {
         observer.next(data);
     });
   }
}
