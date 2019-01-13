import { Component, OnInit } from '@angular/core';

export interface Branch {
  id: number,
  name: string,
  address: string,
  phone: string,
  manager: string
}

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  list: Branch[];

  constructor() { }

  ngOnInit() {

    this.list = [
      { id: 1, name: 'zona 18', address: 'Maya zona  18', phone: '2020', manager: 'Melisa Arana' },
      { id: 2, name: 'Cristo Rey', address: 'locales', phone: '2020', manager: 'Adriano ronaldo' }
    ]

  }

}
