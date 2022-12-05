import { Component } from '@angular/core';

@Component({
  //selector is the name of the custom HTML element that will be used in the HTML files to render this component. This is the same value that is added in index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'modules_semantic_ui';
}
