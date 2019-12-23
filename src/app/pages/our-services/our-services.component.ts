import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {
    window.scrollTo(0, window.innerHeight - 110);
    this.headerService.updateSectionName('servicios');
  }

}
