import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voluntary';


  toggledSideBar: boolean=false

  constructor(

  ) {}

  ngOnInit(): void {


  }



  // side bar

  public openSideBar(event?:Event) {
      event.preventDefault();
       this.toggledSideBar = !this.toggledSideBar
    };

}
