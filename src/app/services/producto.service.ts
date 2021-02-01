import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Producto} from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlProductos = '/api/producto/';
  public productoProv: Producto;

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
  }

  getProducto() {
    return this._http.get<Producto[]>(this.urlProductos + `list`);
  }

  createProducto(producto: Producto) {
    return this._http.post<Producto>(this.urlProductos + 'Insert', producto);
  }

  editProducto(producto: Producto) {
    return this._http.put<Producto>(this.urlProductos + 'update', producto);
  }

  getProductoId(id: number) {
    return this._http.get<Producto>(this.urlProductos + 'findById/' + id);
  }

  delete(producto: Producto) {
    return this._http.delete<Producto>(this.urlProductos + 'delete/?' + 'idProducto=' + producto.idProducto);
  }

}
