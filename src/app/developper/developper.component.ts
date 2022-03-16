import { Component, OnInit } from '@angular/core';
import { Developper } from '../developper';
import { DEVELOPPEURS } from "../developpeurs-sqliens";

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent implements OnInit {
  developper: Developper = {
    id: 1,
    nomComplet: "Dev. Hicham Oussama Saffih",
    isHappy: true
  }
  devs: Developper[] = DEVELOPPEURS;
  selectedDev?: Developper;

  constructor() {
  }

  ngOnInit(): void {
    this.devs.unshift(this.developper);
  }

  onSelect(dev: Developper) {
    this.selectedDev = dev;
  }

}