import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:1337/api/projets'; // API de Strapi

  constructor(private http: HttpClient) { }

  getProjets(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
}
