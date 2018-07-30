import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  navOpen = false;
  mainWidth: any;
  @ViewChild('sidenav') sidenav: any;
  @ViewChild('mainContent') mainContent: any;
  openNav(event){
    this.navOpen = !this.navOpen;
    this.mainWidth = this.mainContent.nativeElement.offsetWidth ;
    this.sidenav.toggle();
  }
  toggleNav(){
    this.sidenav.toggle();
    this.navOpen = !this.navOpen;
  }
  onResize(event) {
    this.mainWidth = event.target.innerWidth;
  }  
}
