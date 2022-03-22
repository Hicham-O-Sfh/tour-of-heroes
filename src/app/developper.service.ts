import { Injectable } from '@angular/core';
import { Developper } from './developper';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

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
        tap(_ => this.log(`✅ Données des ${_.length} développeurs importés !`)),
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
      tap(_ => this.log(`✅ Développeur mis à jour avec succès id=${developper.id}`)),
      catchError(this.handleError<any>('updateDev'))
    );
  }

  addDev(dev: Developper): Observable<Developper> {
    return this.http.post<Developper>(this.devsUrl, dev, this.httpOptions).pipe(
      tap((newDev: Developper) => this.log(`✅ Développeur ajouté avec succès id=${newDev.id}`)),
      catchError(this.handleError<Developper>('addDev'))
    );
  }

  deleteDev(id: number): Observable<Developper> {
    const url = `${this.devsUrl}/${id}`;
    return this.http.delete<Developper>(url, this.httpOptions).pipe(
      tap(_ => this.log(`✅ Développeur supprimé avec succès id=${id}`)),
      catchError(this.handleError<Developper>('deleteDev'))
    );
  }

  searchDevs(terme: string): Observable<Developper[]> {
    if (!terme.trim()) {
      return of([]);
    }
    return this.http.get<Developper[]>(`${this.devsUrl}/?nomComplet=${terme}`).pipe(
      tap(result => result.length ?
        this.log(`✅ Développeur(s) tel que "${terme}" trouvé`) :
        this.log(`👌 Aucun Développeurs tel que "${terme}" n'a été trouvé`)
      ),
      catchError(this.handleError<Developper[]>('searchDevs', []))
    );
  }
}
