import { Component, OnInit        } from '@angular/core';
import {ActivatedRoute, Router    } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  constructor(private _route: ActivatedRoute ) { }

  ngOnInit() {
    console.log(this._route.snapshot.params.name);
    this.name = this._route.snapshot.params.name;
  }

}
