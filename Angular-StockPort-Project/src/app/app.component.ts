import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StockPort-Project';

  public showHome: boolean = true;
  

  constructor() {}
  
  async hiddenSwitch () {
    this.showHome = false;
  }
  
}
