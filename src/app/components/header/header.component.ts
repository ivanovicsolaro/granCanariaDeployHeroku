import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sectionName: string;

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {
    this.headerService.currentSectionName.subscribe(currentSectionName => {
      this.sectionName = currentSectionName;
    });
  }

}
