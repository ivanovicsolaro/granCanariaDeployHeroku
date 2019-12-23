import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HeaderService} from '../../services/header.service';
import {PropertyService} from '../../services/property.service';
import {Pagination, Propiedad, RespPropiedades} from '../../interfaces/interfaces';
import {Router, NavigationStart, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties: Propiedad[] = [];
  currentPage = 1;
  lastPage = 1;
  loading = true;
  pages: number[] = [];
  @ViewChild('propertyList', {static: true}) propertyList: ElementRef;

  tipo: string;
  estado: string;
  comuna: string;

  constructor(private headerService: HeaderService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private propertyService: PropertyService) {
    this.activatedRoute.params.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        if (this.router.getCurrentNavigation().extras.state.textSearch) {
          const searchText = this.router.getCurrentNavigation().extras.state.textSearch;
          this.comuna = searchText.comuna;
          this.tipo = searchText.tipo;
          this.estado = searchText.estado;
        }
      } else {
        this.comuna = null;
        this.tipo = null;
        this.estado = null;
      }

      this.getProperties();
    });
  }

  ngOnInit() {
    this.headerService.updateSectionName('propiedades');
  }

  setPage(page) {
    this.currentPage = page;
    this.getProperties();
  }

  nextPage() {
    this.currentPage++;
    this.getProperties();
  }

  getProperties() {
    this.loading = true;
    this.propertyService.getPropiedadesByFilter(this.comuna, this.tipo, this.estado, null, null, null, null, this.currentPage)
      .subscribe((response: RespPropiedades) => {
        this.properties = response.propiedades;
        if (this.properties.length > 0) {
          let pagination: Pagination;
          pagination = response.pagination;
          this.currentPage = pagination ? pagination.currentpage : 1;
          this.lastPage = pagination ? pagination.lastpage : 1;
          this.pages = [];
          for (let i = 1; i <= this.lastPage; i++) {
            this.pages.push(i);
          }
        }
        setTimeout(() => {
          window.scrollTo(0, window.innerHeight - 110);
        }, 250);
        this.loading = false;
      });
  }
}
