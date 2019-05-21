import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  users: Object;

/*constructor(private data: DataService) { }

  ngOnInit() {
  }*/

  /*firstClick() {
    this.data.firstClick();
    this.h1Style = true;
  }*/
  constructor(private data: DataService) {   }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {  
      this.users = data
      console.log(this.users);
      }
    );
  }

}
