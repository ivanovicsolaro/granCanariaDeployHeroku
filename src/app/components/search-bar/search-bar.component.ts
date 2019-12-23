import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PropertyService} from '../../services/property.service';
import {Comuna, Propiedad, RespPropiedades} from '../../interfaces/interfaces';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;
  comunas: Comuna[] = [];

  constructor(private formBuilder: FormBuilder,
              public router: Router,
              private propertyService: PropertyService) {
    this.searchForm = this.formBuilder.group({
      estado: ['', Validators.required],
      tipo: ['', Validators.required],
      comuna: ['todas', Validators.required],
    });
  }

  ngOnInit() {
    this.getComunas();
  }

  getComunas() {
    this.propertyService.getComunasByJson()
      .subscribe(
        (response: any) => {
          this.comunas = response;
          this.comunas.sort((a, b) => a.nombre.localeCompare(b.nombre));
        },
        error => {
          //
        },
        () => {
          //
        }
      );
  }

  searchProperties() {
    const navigationExtras: NavigationExtras = {
      state: {
        textSearch: {
          comuna: this.searchForm.value.comuna,
          tipo: this.searchForm.value.tipo,
          estado: this.searchForm.value.estado
        }
      }
    };
    this.router.navigate(['propiedades'], navigationExtras);
  }

}
