import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

import { MatDialog} from "@angular/material";
import { ContactComponent } from '../inside-content/contact/contact.component';


export interface IsActive {
  contact: boolean,
  info: boolean,
  location: boolean,
  material: boolean,
}



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
  //encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  more1 = 'Niños';
  more2 = 'Jovenes/Adultos';
  more3 = 'Call-Center';
  more4 = 'Material de apoyo';
  
  isActive = {
    contact : false,
    info : false,
    location : false,
    material : false
  }

  menuPhone = false;
  menuMore = false;

  //@Output() hideMoreOptions = new EventEmitter<any>();

  constructor(
    public matDialog : MatDialog
  ) { }

  ngOnInit() {
    this.menuPhone = false;
    this.menuMore = false;

    this.isActive.contact = false;
    this.isActive.info = false;
    this.isActive.location = false;
    this.isActive.material = false;
  }

  isActiveEvent(isActive: number){
    this.resetValues();
      if(isActive === 1){
        
        this.isActive.contact =  true;
        
      }
      if(isActive === 2){
        
        this.isActive.info =  true;
      }
      if(isActive === 3){
        
        this.isActive.location =  true;
      }
      if(isActive === 4){
        
        this.isActive.material =  true;
      }  if(isActive === 0){
         this.resetValues();
      }  

  }

  resetValues() {

    this.isActive = {
      contact : false,
      info : false,
      location : false,
      material : false
    }
  }

  showMenuPhone(){

    if (this.menuPhone){
      this.menuPhone = false;
    } else {
      this.menuPhone = true;
    }

  }

  
  hideshowMenuPhone(){
    this.menuPhone = false;
  }

  showMoreOptions(){
    if(this.menuMore){
      this.menuMore = false;
    } else {
      this.menuMore = true;
    }
    this.resetValues();
  }

  hideMoreOptionsEvent(){    
    this.menuMore = false;

  }

  openDialogForm(){
    this.matDialog.open( ContactComponent, {
      disableClose: false,
    })
  }

}
