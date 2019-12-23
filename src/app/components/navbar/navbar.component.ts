import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  darkLogo: boolean;
  whiteLogo: boolean;

  constructor() {
    if (window.innerWidth < 992) {
      this.darkLogo = true;
      this.whiteLogo = false;
    } else {
      this.darkLogo = false;
      this.whiteLogo = true;
    }
  }

  ngOnInit() {

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.innerWidth < 992) {
      if (window.pageYOffset > 10) {
        this.darkLogo = true;
        this.whiteLogo = false;
        const element = document.getElementById('navbar');
        element.classList.add('');
        element.classList.add('animated');
        element.classList.add('fadeInDown');
      } else {
        this.darkLogo = true;
        this.whiteLogo = false;
        const element = document.getElementById('navbar');
        element.classList.remove('');
        element.classList.remove('animated');
        element.classList.remove('fadeInDown');
      }
    } else {
      if (window.pageYOffset > 10) {
        this.darkLogo = false;
        this.whiteLogo = true;
        const element = document.getElementById('navbar');
        element.classList.add('');
        element.classList.add('animated');
        element.classList.add('fadeInDown');
      } else {
        this.darkLogo = false;
        this.whiteLogo = true;
        const element = document.getElementById('navbar');
        element.classList.remove('');
        element.classList.remove('animated');
        element.classList.remove('fadeInDown');
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 992) {
      this.darkLogo = true;
      this.whiteLogo = false;
    } else {
      this.darkLogo = false;
      this.whiteLogo = true;
    }
  }

}
