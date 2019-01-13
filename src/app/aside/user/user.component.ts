import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  list: User[];

  constructor(

  ) { }

  ngOnInit() {
    this.list = [
      { name: 'christian', email: 'davelaltan@gmail.com' },
      { name: 'davel', email: 'davelaltan@gmail.com' },
    ]
  }

}
