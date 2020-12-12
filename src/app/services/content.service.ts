import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account, Category, Post, User} from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  urlApi = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  /*-----------POST-----------*/
  getAllPost(): Observable<Post>{
    return this.http.get<Post>(`${this.urlApi}/posts`)
  }

  getPost(id: number) : Observable<Post>{
    return this.http.get<Post>(`${this.urlApi}/posts/${id}`);
  }

  createPost(postname: string) : Observable<Post>{
    return this.http.post<Post>(`${this.urlApi}/posts`, postname);
  }

  editPost(id: number) : Observable<Post>{
    return this.http.get<Post>(`${this.urlApi}/posts/${id}`);
  }

  deletePost(id: number) : Observable<Post>{
    return this.http.delete<Post>(`${this.urlApi}/posts/${id}`);
  }

  /*-----------CATEGORIES-----------*/

  getAllCategory(): Observable<Category> {
    return this.http.get<Category>(`${this.urlApi}/categories`)
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.urlApi}/categories${id}`);
  }

  /*-----------USERS-----------*/

  getAllUser(): Observable<User> {
    return this.http.get<User>(`${this.urlApi}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.urlApi}/users/${id}`);
  }

  editUser(id: number) : Observable<User> {
    return this.http.patch<User>(`${this.urlApi}/users/${id}`, id);
  }

  deleteUser(id: number) :Observable<User> {
    return this.http.delete<User>(`${this.urlApi}/users/${id}`);
  }

}
