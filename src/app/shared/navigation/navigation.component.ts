import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  @Output() openNav = new EventEmitter<boolean>();

  ngOnInit() {
  }

  toggle(){
    this.openNav.emit(true);
  }

}
