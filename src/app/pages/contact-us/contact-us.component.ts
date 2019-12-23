import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HeaderService} from '../../services/header.service';
import { FormData } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    window.scrollTo(0, window.innerHeight - 110);
    this.headerService.updateSectionName('contáctanos');
    this.cargarDatosEmail(
      'Consulta general - Gran Canaria Propiedades',
      'contacto@grancanariapropiedades.cl');
  }

  cargarDatosEmail(asunto: string, emailTo: string, mensaje?: string) {
    const data: FormData = {asunto, emailTo, mensaje};
    localStorage.setItem('datosFormulario', JSON.stringify(data));
  }
}
