import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

  @Input('test-child')  element : { id: number, name: string }

  constructor() { }

  ngOnInit() {
  }

  sendData(name: HTMLInputElement){
    console.log(name.value);
  }

  sendData2(event){
    console.log(event);
  }

}
