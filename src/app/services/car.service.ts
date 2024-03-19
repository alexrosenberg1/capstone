import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icar } from '../interfaces/icar';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  getCars() {
    return this.http.get<Icar[]>('http://localhost:4000/car/cars');
  }
}
