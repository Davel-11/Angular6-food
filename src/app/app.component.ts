import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  @ViewChild('hideMoreOptions') hideMoreOptions : HeaderComponent;

  constructor() { }
  

  closeMoreMenu(){
    this.hideMoreOptions.hideMoreOptionsEvent();
    this.hideMoreOptions.hideshowMenuPhone();   
  }

}