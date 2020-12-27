import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from './../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Account>;
  public currentUser: Observable<Account>;

  readonly urlApi = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Account>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): Account {
    return this.currentUserSubject.value;
  }

  login(username:string, password: any){
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    return this.http.post<any>(`${this.urlApi}/login`, {username,  password})
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }


  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
