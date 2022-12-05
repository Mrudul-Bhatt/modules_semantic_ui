import { Component, OnInit } from '@angular/core';

@Component({
  //selector is the name of the custom HTML element that will be used in the HTML files to render this component
  selector: 'app-elements-home',
  templateUrl: './elements-home.component.html',
  styleUrls: ['./elements-home.component.css'],
})
export class ElementsHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
