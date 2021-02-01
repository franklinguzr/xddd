import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Proveedor} from '../models/proveedor';
import {Producto} from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlProveedor = '/api/proveedor/';
  public proveedor: Proveedor;
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {

  }
  getProveedor(){
    return this._http.get<Proveedor[]>(this.urlProveedor + 'List');
  }

  createProveedor(proveedor: Proveedor){
    return this._http.post<Proveedor>(this.urlProveedor + 'Insert/' , proveedor);
  }

  editProveedor(proveedor: Proveedor){
    return this._http.put<Proveedor>(this.urlProveedor + 'update', proveedor);
  }

  getProveedorId(id: number){
    return this._http.get<Proveedor>(this.urlProveedor + 'findById/' + id);
  }
  delete(proveedor: Proveedor){
    // @ts-ignore
    return this._http.delete<Producto>(this.urlProveedor + 'delete/' + '?idproveedor=' + proveedor.idProveedor);
  }
}
