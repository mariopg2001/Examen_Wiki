import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributors } from './contributors';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  getbuscar(url: string): Observable<[]> {
    
    return this.http.get<[]>(url)
  }
  verContribuidores(url: string): Observable<any> {
    
    return this.http.get<any>(url)
  }
  constructor(private http: HttpClient) { }
}
