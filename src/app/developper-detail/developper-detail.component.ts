import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Developper } from '../developper';
import { DevelopperService } from '../developper.service';

@Component({
  selector: 'app-developper-detail',
  templateUrl: './developper-detail.component.html',
  styleUrls: ['./developper-detail.component.css']
})
export class DevelopperDetailComponent implements OnInit {
  dev: Developper | undefined;

  constructor(
    private route: ActivatedRoute,
    private developperService: DevelopperService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDev();
  }

  getDev(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.developperService.getDev(id)
      .subscribe(dev => this.dev = dev);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.dev) {
      this.developperService.updateDev(this.dev)
        .subscribe(() => this.goBack());
    }
  }
}
