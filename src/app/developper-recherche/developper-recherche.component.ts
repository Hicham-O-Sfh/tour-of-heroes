import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Developper } from '../developper';
import { DevelopperService } from '../developper.service';
declare var $: any;
@Component({
  selector: 'app-developper-recherche',
  templateUrl: './developper-recherche.component.html',
})
export class DevelopperRechercheComponent implements OnInit {
  devs$!: Observable<Developper[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private developperService: DevelopperService,
    private router: Router
  ) { }

  search(event: Event): void {
    this.searchTerms.next((event.target as HTMLInputElement).value);
  }

  ngOnInit(): void {
    this.devs$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((terme: string) => this.developperService.searchDevs(terme)),
    );
  }
}