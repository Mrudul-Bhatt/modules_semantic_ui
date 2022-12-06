import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  //here type any[] is used because otherwise it will become of type never[] and we will get an error
  @Input() data: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
