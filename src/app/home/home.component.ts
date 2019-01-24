import { Component, OnInit } from '@angular/core';
import { HomeModel } from './home.model';
import { isNullOrUndefined } from 'util';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showPic = []
  home1 : boolean = false;
  home2 : boolean = false;
  home3 : boolean = false;
  home4 : boolean = false;
  home5 : boolean = false;

  constructor() { }

  ngOnInit() {

  this.home1 = true;
  this.home2 = false;
  this.home3 = false;
  this.home4 = false;
  this.home5 = false;

   
  this.changePic();

  }

  changePic(){

    setTimeout(()=>{        

      console.log("1"+this.home1);
      console.log("2"+this.home2);
      console.log("3"+this.home2);

      if(this.home1) {
        this.resetValues()
        this.home2 = true;    
        this.changePic(); 
      } 
  
      else if(this.home2) {      
        this.resetValues()
        this.home3 = true;    
        this.changePic(); 
      } 
  
      else if(this.home3) {
        this.resetValues()
        this.home4 = true;    
        this.changePic(); 
      } 

      else if(this.home4) {
        this.resetValues()
        this.home5 = true;    
        this.changePic(); 
      } 

      else if(this.home5) {
        this.resetValues()
        this.home1 = true;    
        this.changePic(); 
      } 

    }, 5000 )

    

  }

  resetValues(){
    this.home1 = false;
    this.home2 = false;
    this.home3 = false;
    this.home4 = false;
    this.home5 = false;
  }

}
