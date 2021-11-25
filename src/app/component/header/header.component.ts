import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() showSideNav: boolean = true;

  @Output() toggleSideNavEvent = new EventEmitter<string>();

  constructor(private router: Router,private _snackBar: MatSnackBar) { }

  sidenavAction(){
    let data = "";
    if(this.showSideNav){
      data = "FALSE";
    }
    else {
      data = "TRUE";
    }
    this.toggleSideNavEvent.emit(data);
  }

  ngOnInit(): void {
   
  }

}