import { Component } from '@angular/core';

@Component({
  selector: 'my-app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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
