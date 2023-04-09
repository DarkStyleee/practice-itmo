import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Article {
  createdAt: string;
  title: string;
  articleImage: string;
  text: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://63cbf40c5c6f2e1d84bec802.mockapi.io/articles';

  constructor(private http: HttpClient) {}

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  public getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(this.apiUrl + '/' + id);
  }
}
