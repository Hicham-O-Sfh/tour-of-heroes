import { Component } from '@angular/core';

@Component({
  selector: 'my-app-component',
  template: `
  <h1>{{title + ' !'}}</h1>
  <h3>
    <u>
      Modification direct du template
    </u>
  </h3>
  <p>
    Ceci est du HTML intégré au sein du 'Template' attribute, cela est une assez mauvaise pratique, il est préférable de mettre la structuration HTML au sein
    d'un fichier dédié mon-component.component.html, et de l'interpelé au sein de 'TemplateURL' du décorateur @Component !
  </p>
  <button  (click)="thanks()" #click_me_button>
    WHO AM I !!
  </button>
  <br>
  <small [ngStyle]="{'margin-left': 20 + '%'}" (mouseenter)="mouseOverMe($event)">
    Merci à SQLI, et à mon formateur -Mr. Hicham Maaqoul-
  </small>
  <section id="the_section" #the_section>
    nom complet : {{ nomComplet }}
    <br>
    Age : {{ age }} ans
    <br>
    Satifaction : {{ isHappy ? "✅" : "❌" }}
  </section>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Text from the {{ interpollation }}';
  nomComplet: string = "Hicham Oussama Saffih";
  age: number = 24;
  isHappy: Boolean = true;

  thanks() {
    alert("I'm -Hicham O'Sfh- an e-challenger !!");
  }

  mouseOverMe(event: any) {
    alert('👋You Hovered the <small> tag !\nThe text of the <small> tag is : ' + event.target.innerHTML);
  }
}
