import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sqli-presentation',
  templateUrl: './sqli-presentation.component.html',
  styleUrls: ['./sqli-presentation.component.css']
})
export class SqliPresentationComponent implements OnInit {
  title: string = "Présentation de SQLI";
  reference: string = 'SQLI';
  sloggan: string = "Digital Experience";
  anneeBourse: number = 2000;
  isCool: Boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  thanks() {
    alert("I'm -Hicham O'Sfh- an e-challenger !!\nthanks to SQLI I can become be a confirmed FullStack .Net Developper.");
  }

  mouseOverMe(event: any) {
    alert('👋 Merci à SQLI, et à mon formateur -Mr. Hicham Maaqoul-');
  }
}
