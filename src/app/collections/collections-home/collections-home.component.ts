import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'John', age: 30, job: 'Designer' },
    { name: 'Jane', age: 25, job: 'Engineer' },
    { name: 'Jack', age: 27, job: 'Manager' },
    { name: 'Jill', age: 32, job: 'Assistant' },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
