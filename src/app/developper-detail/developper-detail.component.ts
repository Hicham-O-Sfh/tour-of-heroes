import { Component, OnInit, Input } from '@angular/core';
import { Developper } from '../developper';

@Component({
  selector: 'app-developper-detail',
  templateUrl: './developper-detail.component.html',
  styleUrls: ['./developper-detail.component.css']
})
export class DevelopperDetailComponent implements OnInit {
  @Input() dev?: Developper;

  constructor() { }

  ngOnInit(): void {
  }

}
