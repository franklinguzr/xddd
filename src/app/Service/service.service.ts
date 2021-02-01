import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoIndexComponent } from '../components/productos/producto-index/producto-index.component';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/xxxx/productos';

  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }
}
