import { Component, OnInit } from '@angular/core';
import { Developper } from '../developper';
import { DevelopperService } from "../developper.service";

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent implements OnInit {
  devs: Developper[] = [];
  developper?: Developper;

  constructor(
    private developperService: DevelopperService
  ) {
  }

  ngOnInit(): void {
    this.getDevs();
    this.developper = this.devs[0];
  }

  getDevs(): void {
    this
      .developperService
      .getDevs()
      .subscribe(devs => {
        this.devs = devs;
        console.log(devs);
        this.developper = this.devs[0]
      });
  }

  add(nomComplet: string): void {
    nomComplet = nomComplet.trim();
    if (!nomComplet) return;
    this.developperService.addDev({ nomComplet } as Developper)
      .subscribe(dev => {
        this.devs.push(dev);
      });
  }

  delete(dev: Developper): void {
    this.devs = this.devs.filter(d => d !== dev);
    this.developperService.deleteDev(dev.id).subscribe();
  }
}