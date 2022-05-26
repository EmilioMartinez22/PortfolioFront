import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  isMenor:boolean;

  constructor() { }

  ngOnInit(): void {
  }


  @HostListener('window:resize', [])
  onResize(): void {
    if ( window.innerWidth < 860) {
      this.isMenor = true;
    } else {
      this.isMenor = false;
    }
  }

}
