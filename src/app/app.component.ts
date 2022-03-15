import { Component } from '@angular/core';

@Component({
  selector: 'my-app-component',
  template: `
  <h1>Ceci est un test</h1>
  <h3>
    <u>
      Modification direct du template
    </u>
  </h3>
  <p>
    Ceci est du HTML intégré au sein du 'Template' attribute, cela est une assez mauvaise pratique, il est préférable de mettre la structuration HTML au sein
    d'un fichier dédié mon-component.component.html, et de l'interpelé au sein de 'TemplateURL' du décorateur @Component !
  </p>
  <small style="margin-left: 20%;">
    Merci à SQLI, et à mon formateur -Mr. Hicham Maaqoul-
  </small>
  `,
  styles: ['h1,small {background: blue; color: white; text-align:center;}']
})
export class AppComponent {
  // title = 'tour-of-heroes';
}
