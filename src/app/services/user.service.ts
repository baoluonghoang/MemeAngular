import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlApi = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getAll() :Observable<Account> {
    return this.http.get<Account>(`${this.urlApi}/users`);
  }
}
