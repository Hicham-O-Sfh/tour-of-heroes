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
    this.developperService.getDevs().subscribe(devs => this.devs = devs);
  }

}