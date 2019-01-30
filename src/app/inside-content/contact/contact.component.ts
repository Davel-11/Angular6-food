import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { MessageComponent } from '../message/message/message.component';
import { Router, NavigationEnd } from '@angular/router';

export interface EmailData {
  name: string,
  phone: string,
  program: string,
  message_html: string,
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form : FormGroup;
  completed : boolean = false;

  constructor(
    public snackBar: MatSnackBar,
    private router: Router
    ) { }

  openSnackBar() {

    this.snackBar.openFromComponent(MessageComponent, {
      duration: 4500,
    });
  }

  ngOnInit() {


    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });

    this.form = new FormGroup({
      name : new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email :  new FormControl(''),
      program: new FormControl('', [Validators.required]),
      comments: new FormControl(''),
    });
    
  }

  SubmitForm(){
    console.log("form values: ", this.form.value);

    this.sendEmail();
    this.form.reset();
    this.completed  = false;
  }

  sendEmail(){

    
    let emailData : EmailData;

    let service_id = 'gmail';
    let template_id = 'template_UxgLCJax';
    let user_id = 'user_JpluymIGgjAfLOY3NfAdd';
  
    var template_params = {
      "reply_to": "reply_to_value",
      "name": this.form.get('name').value,
      "phone": this.form.get('phone').value,
      "email": this.form.get('email').value,
      "program": this.form.get('program').value,
      "message_html": this.form.get('comments').value
   }

   this.completed = true;
     emailjs.send(service_id, template_id, template_params, user_id)
      .then(function(response) {        
         console.log('SUCCESS!', response.status, response.text);
       }, function(error) {
         console.log('FAILED...', error);
       });;

  }

}
