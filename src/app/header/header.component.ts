import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  isBottom: boolean;  
  isLogged = false;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut(): void  {
    this.tokenService.logOut();
    window.location.reload();
  }
  
  @HostListener('window:scroll', [])
  onScroll(): void {
    if ( window.scrollY > 0) {
      this.isBottom = true;
    } else {
      this.isBottom = false;
    }
  }

}
