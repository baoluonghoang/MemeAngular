import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  // urlApi = 'https://5f44ad2b3fb92f0016753a8b.mockapi.io/api';
  constructor(private http: HttpClient) { }

  // getAll(): Observable<Post>{
  //   return this.http.get<Post>(`${this.urlApi}/post`);
  // }

  // getCategory() : Observable<Category>{
  //   return this.http.get<Category>(`${this.urlApi}/products`); //chưa sửa API
  // }
}
