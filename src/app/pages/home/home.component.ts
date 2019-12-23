import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../services/header.service';
import {NavigationExtras, Router} from '@angular/router';
import {PropertyService} from '../../services/property.service';
import {Propiedad, RespPropiedades} from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = true;
  properties: Propiedad[];

  constructor(private headerService: HeaderService,
              private propertyService: PropertyService,
              private router: Router) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.headerService.updateSectionName('');
    this.propertyService.getLastProperties(6)
      .subscribe(
        (response: RespPropiedades) => {
          this.properties = response.propiedades;
          this.loading = false;
        },
        error => {
          //
        },
        () => {
          //
        }
      );
  }

  navigateToProperties(propertyType) {
    // this.propertyService.updateCurrentTipo(propertyType);
    const navigationExtras: NavigationExtras = {
      state: {
        textSearch: {
          comuna: null,
          tipo: propertyType,
          estado: null
        }
      }
    };
    this.router.navigate(['propiedades'], navigationExtras);
  }
}
