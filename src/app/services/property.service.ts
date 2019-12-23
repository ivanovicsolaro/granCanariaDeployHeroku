import {Injectable} from '@angular/core';
import {Comuna, RespPropiedadDetalle, RespPropiedades, RespuestaAgentes} from '../interfaces/interfaces';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  cUltimasPropiedades = 0;

  URL = environment.URL;
  apiKey = environment.apiKey;

  properties: RespPropiedades;

  // private estadoSource = new BehaviorSubject(null);
  // currentEstado = this.estadoSource.asObservable();
  //
  // private tipoSource = new BehaviorSubject(null);
  // currentTipo = this.tipoSource.asObservable();
  //
  // private comunaSource = new BehaviorSubject(null);
  // currentComuna = this.comunaSource.asObservable();
  //
  // private propertiesSource = new BehaviorSubject(this.properties);
  // currentProperties = this.propertiesSource.asObservable();

  constructor(private http: HttpClient) {
    // this.getPropiedadesByFilter()
    //   .subscribe((properties: RespPropiedades) => {
    //     this.updateCurrentProperties(properties);
    //   });
  }

  getLastProperties(cantidad?: number) {

    this.cUltimasPropiedades = 6;

    // tslint:disable-next-line:max-line-length
    return this.http.get<RespPropiedades>(`${this.URL}/propiedades/ultimas-propiedades/${this.apiKey}&cantidad=${this.cUltimasPropiedades}`);
  }

  getComunasByJson() {
    return this.http.get<Comuna>('./assets/data/comunas.json');
  }

  getPropiedadesByFilter(idcomuna?, type?, estado?, preMin?, preMax?, supMin?, supMax?, pagina?) {
    if (pagina === undefined) {
      pagina = 1;
    }

    idcomuna = this.validateTodas(idcomuna);
    type = this.validateTodas(type);
    estado = this.validateTodas(estado);
    preMin = this.validateValueNumberMin(preMin);
    preMax = this.validateValueNumberMax(preMax);
    supMin = this.validateValueNumberMin(supMin);
    supMax = this.validateValueNumberMax(supMax);

    // tslint:disable-next-line: max-line-length
    return this.http.get<RespPropiedades>(`${this.URL}/propiedades/busquedaAvanzada/${this.apiKey}&comuna=${idcomuna}&tipo=${type}&operacion=${estado}&valor_desde=${preMin}&valor_hasta=${preMax}&moneda=$&superficie_desde=${supMin}&superficie_hasta=${supMax}&page=${pagina}&perpage=15`);
  }

  getPropiedadesDetail(id: number) {
    return this.http.get<RespPropiedadDetalle>(`${this.URL}/propiedad/${this.apiKey}&id=${id}`);
  }

  getProyectos() {
  }

  getFeatured(cantidad?: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<RespPropiedades>(`${this.URL}/propiedades/destacadas/${this.apiKey}&perpage=${this.cUltimasPropiedades}`);
  }

  validateTodas(value) {
    if (!value) {
      return 'todas';
    } else {
      return value;
    }
  }

  validateValueNumberMin(value) {
    if (!value) {
      return 1;
    } else {
      return value;
    }
  }

  validateValueNumberMax(value) {
    if (!value) {
      return 999999999999;
    } else {
      return value;
    }
  }

  getAgentes() {
    return this.http.get<RespuestaAgentes>(`${this.URL}/agentes/${this.apiKey}`);
  }

  // updateCurrentEstado(estado: string) {
  //   this.estadoSource.next(estado);
  // }
  //
  // updateCurrentTipo(tipo: string) {
  //   this.tipoSource.next(tipo);
  // }
  //
  // updateCurrentComuna(comuna: string) {
  //   this.comunaSource.next(comuna);
  // }
  //
  // updateCurrentProperties(properties: RespPropiedades) {
  //   this.propertiesSource.next(properties);
  // }
}
