import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  urlApi = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

    /*-----------LOGIN-----------*/
    login(username:string, password: any) : Observable<Account> {
      return this.http.post<Account>(`${this.urlApi}/login`, {username,  password});
    }
}
