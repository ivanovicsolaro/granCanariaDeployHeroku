import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent implements OnInit {

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {
    window.scrollTo(0, window.innerHeight - 110);
    this.headerService.updateSectionName('quiénes somos');
  }

}
