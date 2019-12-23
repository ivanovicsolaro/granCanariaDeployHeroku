import {Component, Input, OnInit} from '@angular/core';
import {Propiedad} from '../../interfaces/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input() property: Propiedad;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPropertyDetail(property) {
    this.router.navigateByUrl(`propiedades/${property.id}`);
  }

}
