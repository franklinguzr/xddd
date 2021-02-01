import {Injectable} from '@angular/core';
import {Domiciliario} from '../models/Domiciliario';
import {HttpClient} from '@angular/common/http';
import {Zona} from '../models/Zona';

@Injectable({
  providedIn: 'root'
})
export class ZonaService {

  public zonaProv: Zona;
  private urlZona = 'http://carlossan-001-site1.btempurl.com/api/zona/';

  constructor(private http: HttpClient) {
  }

  getZona() {
    return this.http.get<Zona[]>(this.urlZona + `list`);
  }

  createZona(zona: Zona) {
    return this.http.post<Zona>(this.urlZona + 'Insert', zona);
  }

  editZona(zona: Zona) {
    return this.http.put<Zona>(this.urlZona + 'update', zona);
  }

  getZonaId(id: number) {
    return this.http.get<Zona>(this.urlZona + 'findById/' + id);
  }

  delete(zona: Zona) {
    return this.http.delete<Zona>(this.urlZona + 'delete/?' + 'idZona=' + zona.idZona);
  }
}
