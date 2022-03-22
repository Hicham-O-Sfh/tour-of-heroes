import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Developper } from './developper';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const developpers = [
      { id: 1, isHappy: true, nomComplet: "Dev. Hicham Oussama Saffih" },
      { id: 2, isHappy: true, nomComplet: 'Dev. Nada BARBOUR' },
      { id: 3, isHappy: true, nomComplet: 'Dev. Kawtar Smougueni' },
      { id: 4, isHappy: true, nomComplet: 'Dev. Mouâad HAFID' },
      { id: 5, isHappy: true, nomComplet: 'Dev. Yassine Chihab' },
      { id: 6, isHappy: true, nomComplet: 'Dev. HAMZA ELAISSAOUI' },
      { id: 7, isHappy: true, nomComplet: 'Dev. Ilyass Khadem' },
      { id: 8, isHappy: true, nomComplet: 'Dev. Ayoub Hanani' },
      { id: 9, isHappy: true, nomComplet: 'Dev. Othmane Essoufi' },
    ];
    return { developpers };
  }

  genId(devs: Developper[]): number {
    return devs.length > 0 ? Math.max(...devs.map(dev => dev.id)) + 1 : 11;
  }
}