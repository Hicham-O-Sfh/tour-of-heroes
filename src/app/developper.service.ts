import { Injectable } from '@angular/core';
import { Developper } from './developper';
import { DEVELOPPEURS } from './developpeurs-sqliens';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DevelopperService {
  private devsUrl = 'api/developpers';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add(`DevelopperService : ${message}`);
  }

  getDevs(): Observable<Developper[]> {
    return this
      .http.get<Developper[]>(this.devsUrl)
      .pipe(
        tap(_ => this.log(`✅ Données des ${DEVELOPPEURS.length} développeurs importés !`)),
        catchError(this.handleError<Developper[]>('getDevs', []))
      );
  }

  getDev(id: number): Observable<Developper> {
    this.messageService.add(`DevelopperService : ✅ Données du développeurs ##${id} importés !`);
    const url = `${this.devsUrl}/${id}`;
    return this.http.get<Developper>(url).pipe(
      tap(_ => this.log(`fetched developper id=${id}`)),
      catchError(this.handleError<Developper>(`developper id=${id}`))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(` ❌ ${operation} Erreur : ${error.message}`);
      return of(result as T);
    };
  }

  updateDev(developper: Developper): Observable<any> {
    return this.http.put(this.devsUrl, developper, this.httpOptions).pipe(
      tap(_ => this.log(`updated dev id=${developper.id}`)),
      catchError(this.handleError<any>('updateDev'))
    );
  }
}
