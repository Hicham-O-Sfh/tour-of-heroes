import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Developper } from '../developper';
import { DevelopperService } from '../developper.service';

@Component({
  selector: 'app-developper-recherche',
  templateUrl: './developper-recherche.component.html',
})
export class DevelopperRechercheComponent implements OnInit {
  devs$!: Observable<Developper[]>;
  private searchTerms = new Subject<string>();

  constructor(private developperService: DevelopperService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.devs$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((terme: string) => this.developperService.searchDevs(terme)),
    );
  }
}