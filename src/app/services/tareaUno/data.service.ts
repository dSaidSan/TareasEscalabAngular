import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [
    {
      nombre: 'cliente1',
      apellido: 'apellido1'   
    },
    {
      nombre: 'cliente2',
      apellido: 'apellido2'   
    },
    {
      nombre: 'cliente3',
      apellido: 'apellido3'   
    }
  ]

  constructor() { }
}
