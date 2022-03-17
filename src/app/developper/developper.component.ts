import { Component, OnInit } from '@angular/core';
import { Developper } from '../developper';
// import { DEVELOPPEURS } from "../developpeurs-sqliens";
import { DevelopperService } from "../developper.service";
import { MessageService } from '../message.service';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent implements OnInit {
  devs: Developper[] = [];
  developper: Developper = { id: 0, nomComplet: "", isHappy: false };
  selectedDev?: Developper;

  constructor(
    private developperService: DevelopperService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.getDevs();
    this.developper = this.devs[0];
  }

  onSelect(dev: Developper) {
    this.selectedDev = dev;
    this.messageService.add(`DevelopperComponent : Le développeur selectionné id=${dev.id}`);
  }

  getDevs(): void {
    this.developperService.getDevs().subscribe(devs => this.devs = devs);
  }

}