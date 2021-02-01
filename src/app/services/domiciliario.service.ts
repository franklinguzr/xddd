import { Injectable } from '@angular/core';
import {Domiciliario} from '../models/Domiciliario';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DomiciliarioService {

  public domiciliarioProv: Domiciliario;
  private urlDomiciliario = '/api/domiciliario/';
  constructor(private http: HttpClient) { }

  getDomiciliario(){
    return this.http.get<Domiciliario[]>(this.urlDomiciliario + `list`);
  }

  createDomiciliario(domiciliario: Domiciliario){
    return this.http.post<Domiciliario>(this.urlDomiciliario + 'Insert', domiciliario);
  }

  editDomiciliario(domiciliario: Domiciliario){
    return this.http.put<Domiciliario>(this.urlDomiciliario + 'update' , domiciliario);
  }

  getDomiciliarioId(id: number){
    return this.http.get<Domiciliario>(this.urlDomiciliario + 'findById/' + id);
  }

  delete( domiciliario: Domiciliario){
    return this.http.delete<Domiciliario>(this.urlDomiciliario + 'delete/?' + 'idDomiciliario=' + domiciliario.idDomiciliario);
  }
}
