import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {

    this.form = new FormGroup({
      name : new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email :  new FormControl(''),
      program: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required]),
      
    });
    

  }

 

  SubmitForm(){
    console.log("form values: ", this.form.value);

    this.sendEmail();

    this.form.reset();
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

    console.log("sending email ");
    emailjs.send(service_id, template_id, template_params, user_id)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });;

  }

}
