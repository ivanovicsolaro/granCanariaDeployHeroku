import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { FormData } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-form-email',
  templateUrl: './form-email.component.html',
  styleUrls: ['./form-email.component.css']
})
export class FormEmailComponent implements OnInit {
  @Input() type = false;
  dataForm: FormData;
  submited = false;
  status = 2;
  msj = '';
  cargandoEmail: boolean;
  formData: FormData;

  validation_messages = {
    nombre: [
      { type: 'required', message: 'El nombre es requerido' }
    ],
    email: [
      { type: 'required', message: 'El email es requerido' },
      { type: 'pattern', message: 'Ingrese un email válido' }
    ],
    telefono: [
      { type: 'required', message: 'El teléfono es requerido' }
    ],
    mensaje: [
      { type: 'required', message: 'El mensaje es requerido' },
      { type: 'minlength', message: 'El mínimo de caractéres es de 20' }
    ]
  };

  formEmailAgent = new FormGroup({
    nombre: new FormControl('', Validators.required),
    asunto: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    mensaje: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(20)
    ])),
    captador: new FormControl('')
  });

  constructor( private emailService: EmailService ) { }

  ngOnInit() {
    this.formData =  JSON.parse(localStorage.getItem('datosFormulario'));
    this.formEmailAgent.controls.asunto.setValue(this.formData.asunto);
    this.formEmailAgent.controls.captador.setValue(this.formData.emailTo);
    this.formEmailAgent.controls.mensaje.setValue(this.formData.mensaje);
  }

  cerrarMsj() {
    this.submited = false;
  }

  async sendEmail() {
    this.status = 2;
    this.submited = true;
    this.cargandoEmail = true;
    if (this.formEmailAgent.invalid) {
      this.cargandoEmail = false;
      return;
    }

    await this.emailService.sendEmailAgents(
      this.formEmailAgent.value.nombre,
      this.formEmailAgent.value.email,
      this.formEmailAgent.value.asunto,
      this.formEmailAgent.value.telefono,
      this.formEmailAgent.value.mensaje,
      this.formEmailAgent.value.captador,
    ).subscribe( resp => {
      this.status = resp.status;
      this.msj = resp.msj;
      this.submited = true;
      if (this.status === 1) {
        this.formEmailAgent.reset();
        this.formEmailAgent.controls.asunto.setValue(this.formData.asunto);
        this.formEmailAgent.controls.captador.setValue(this.formData.emailTo);
      }
      this.cargandoEmail = false;
    });


  }

}
