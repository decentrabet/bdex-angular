import { Component } from '@angular/core';
import * as utils from '@betdex/utils';
import * as anchor from '@betdex/anchor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public showSideNav: boolean = true;

  sideNavAction(show: string){
      if(show === "TRUE") {
        this.showSideNav = true;
      }
      else {
        this.showSideNav = false;
      }
  }

  ngOnInit() {
    
  }
}
