import { expandableMenu } from './services/alert-animation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[expandableMenu]
})
export class AppComponent {
  toggledSideBar: boolean=false;

  expandableMenuVolunters = false;
  expandableMenuMissionaries = false;
  expandableMenuPartners = false;
  expandableMenuAdminUsers =false
 

   public toggleVolunters(){
    this.expandableMenuVolunters = !this.expandableMenuVolunters;
  }
  public toggleMissionaries() {
    this.expandableMenuMissionaries = !this.expandableMenuMissionaries;
    
  }
  public togglePartners() {
    this.expandableMenuPartners = !this.expandableMenuPartners;
   
  }
  public toggleAdminUsers() {
    this.expandableMenuAdminUsers = !this.expandableMenuAdminUsers;
   
  }


  

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
