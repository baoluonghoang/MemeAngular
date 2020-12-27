import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, User } from 'src/app/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly urlApi = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  registerAccount(account: Account) : Observable<Account> {
    return this.http.post<Account>(`${this.urlApi}/accounts`, account);
  }

  getAll() : Observable<User> {
    return this.http.get<User>(`${this.urlApi}/users`);
  }
}
