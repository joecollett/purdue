import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { fadeInAnimation } from '../../../animations/fade-in.animation';

@Component({
  selector: 'app-highlighted-alumni',
  templateUrl: './highlighted-alumni.component.html',
  styleUrls: ['./highlighted-alumni.component.scss'],
  animations: [fadeInAnimation]
})
export class HighlightedAlumniComponent implements OnInit {
  featured: string;
  state: string;
  count: number;
  timer: any;

  @Input('stories') stories;

  constructor() {
  }

  ngOnInit() {
    this.count = 0;
    this.featured = this.stories[this.count];
    this.state = 'inactive'
    setTimeout(() => {
      this.state = 'active'
    }, 700)
    this.timer = setInterval(() => {
      this.autoCount(this.count)
    }, 8000)
  }

  updateCount(index) {
    this.state = 'inactive';
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.autoCount(this.count)
    }, 8000);
    setTimeout(() => {
      this.state = 'active';
      this.count = index;
      this.featured = this.stories[index];
    }, 600)
  }

  autoCount(index) {
    this.count = this.count + 1;
    if (this.count == this.stories.length) {
      this.count = 0;
    }
    this.state = 'inactive'
    setTimeout(() => {
      this.state = 'active'
      this.featured = this.stories[this.count];
    }, 600)
  }

}       