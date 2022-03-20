import { Component, Input, OnInit } from '@angular/core';
import { Developper } from '../developper';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  @Input() developper?: Developper;
  constructor() { }

  ngOnInit(): void {
  }

}
