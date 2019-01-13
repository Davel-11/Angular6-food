import { Component, OnInit } from '@angular/core';
import { mixinColor } from '@angular/material/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  serverElements = [
    { id: 1, name: 'davel' },
    { id: 2, name: 'manfus' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
