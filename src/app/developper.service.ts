import { Injectable } from '@angular/core';
import { Developper } from './developper';
import { DEVELOPPEURS } from './developpeurs-sqliens';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class DevelopperService {
  developper: Developper = {
    id: 1,
    nomComplet: "Dev. Hicham Oussama Saffih",
    isHappy: true
  };

  constructor(private messageService: MessageService) {
    DEVELOPPEURS.unshift(this.developper);
  }

  getDevs(): Observable<Developper[]> {
    const devs = of(DEVELOPPEURS);
    this.messageService.add(`DevelopperService : Données des ${DEVELOPPEURS.length} développeurs importés : ✅ !`);
    return devs;
  }

  getDev(id: number): Observable<Developper> {
    const developper = DEVELOPPEURS.find(d => d.id === id)!;
    this.messageService.add(`DevelopperService : Données du développeurs ##${id} importés : ✅ !`);
    return of(developper);
  }
}
