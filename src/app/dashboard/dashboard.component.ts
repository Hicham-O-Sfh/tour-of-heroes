import { Component, OnInit } from '@angular/core';
import { Developper } from '../developper';
import { DevelopperService } from '../developper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  devs: Developper[] = [];

  constructor(private developperService: DevelopperService) { }

  ngOnInit(): void {
    this.getDevs();
  }

  getDevs(): void {
    this.developperService.getDevs()
      .subscribe(devs => this.devs = devs.slice(1, 5));
  }
}