import { Component, OnInit, Input } from '@angular/core';
import { fadeInAnimation } from '../../../../animations/fade-in.animation'

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }  
})
export class FeaturedComponent implements OnInit {

  @Input() featured:any;

  constructor() { }

  ngOnInit() {
  }


}
