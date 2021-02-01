import {Injectable} from '@angular/core';
import {observable, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {global} from './global';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url;
  public user;
  public token;
  public identity;

  constructor(
    // tslint:disable-next-line:variable-name
    private http: HttpClient,
  ) {
    this.url = global.url;
    this.user = new User('', '', '', '', '', '');
  }

  login(user, getToken = null): Observable<any> {
    const json = user;
    if (getToken != null) {
      user.getToken = true;
    }

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'login', json, {headers});

  }

  getToken() {
    return this.token;
  }

  getIdentity() {
    return this.identity;
  }


}
