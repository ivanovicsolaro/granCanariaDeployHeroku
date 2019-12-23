import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../services/header.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {PropertyService} from '../../services/property.service';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {Propiedad, FormData} from '../../interfaces/interfaces';
import { Meta } from '@angular/platform-browser';
import { FacebookService, InitParams, UIResponse, UIParams } from 'ngx-facebook';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];
  property: Propiedad;
  contactForm: FormGroup;
  loading = true;
  currentUrl: string;

  constructor(private headerService: HeaderService,
              private activatedRoute: ActivatedRoute,
              private propertyService: PropertyService,
              private formBuilder: FormBuilder,
              private _mt: Meta,
              private fb: FacebookService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });

    const initParams: InitParams = {
      appId: '418053252185343',
      version: 'v3.0'
    };

    fb.init(initParams);
  }

  ngOnInit() {
    this.headerService.updateSectionName('detalle propiedad');
    const propertyId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getProperty(propertyId);
    this.currentUrl = window.location.href;
  }

  getProperty(propertyId) {
    this.propertyService.getPropiedadesDetail(propertyId)
      .subscribe(
        (response: any) => {
          if (response.error && response.status === 404) {
            this.property = null;
            this.loading = false;
          } else {
            this.property = response.propiedad;
            this.addMetaTags(this.property.titulo, this.property.descripcion, this.property.img_destacada);
            this.setPropertyGallery(this.property);
            this.cargarDatosEmail(
              'Consulta por la propiedad ' + this.property.codigo,
              this.property.captador_email,
              'Consulta por la propiedad ' + this.property.codigo);
          }
        },
        error => {
          this.loading = false;
        },
        () => {

        }
      );
  }

  setPropertyGallery(property: Propiedad) {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    for (let index = 0; index < property.imagenes.length; index++) {
      const img = this.property.imagenes[index];
      const imgThumb = this.property.thumbs[index];

      const item = {
        small: imgThumb,
        medium: img,
        big: img
      };

      this.galleryImages.push(item);
    }

    this.loading = false;
  }

  cargarDatosEmail(asunto: string, emailTo: string, mensaje?: string) {
    const data: FormData = {asunto, emailTo, mensaje};
    localStorage.setItem('datosFormulario', JSON.stringify(data));
  }

  addMetaTags( title, description, image ){
    this._mt.addTag({name: 'og:title', content: title });
    this._mt.addTag({name: 'og:description', content: 'Las mejores propiedades en grancanariapropiedades.cl'});
    this._mt.addTag({name: 'og:image', content: image});
    this._mt.addTag({name: 'og:url', content: this.currentUrl});
    this._mt.addTag({name: 'og:type', content: 'website'});
  }

  share() {

    let params: UIParams = {
      href: this.currentUrl,
      method: 'share'
    };

    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));

  }


}
