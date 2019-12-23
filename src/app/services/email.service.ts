import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { RespuestaEmail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  URL = environment.URL;
  apiKey = environment.apiKey;
  URLWeb = environment.URLWebMail;

  constructor( private http: HttpClient) { }

  sendEmailAgents(nombre, email, asunto, telefono, mensaje, destinatario) {
    return this.http.get<RespuestaEmail>(`${this.URLWeb}name=
    ${nombre}&email=${email}&phone=${telefono}&message=${mensaje}&email_agent=${destinatario}&subject=${asunto}`);
  }
}
