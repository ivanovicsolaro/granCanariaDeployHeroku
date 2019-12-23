export interface Propiedad {
  id: number;
  tipo: string;
  operacion: string;
  titulo: string;
  ubicacion: string;
  codigo: string;
  sup_const: any;
  sup_total: any;
  banios: any;
  habitaciones: any;
  privados: any;
  captador: string;
  img_destacada: string;
  thumb: string;
  latitud: string;
  longitud: string;
  captador_email: string;
  captador_celu: string;
  garages: any;
  gasto_comun: string;
  publicado: string;
  pesos: string;
  uf: string;
  imagenes?: string[];
  thumbs?: string[];
  descripcion?: string;
  caracterisiticas?: string[];
  comuna: string;
}

export interface RespPropiedades {
  propiedades: Propiedad[];
  pagination: Pagination;
}

export interface Comuna {
  id: string;
  nombre: string;
  region: string;
}

export interface Pagination {
  currentpage: number;
  lastpage: number;
}

export interface RespPropiedadDetalle {
  propiedad: Propiedad;
}

export interface LatLng {
  lat: string;
  lng: string;
}

export interface Agente {
  id: number;
  nombre: string;
  tel: string;
  cel: string;
  email: string;
  avatar: string;
}

export interface RespuestaAgentes {
  agentes: Agente[];
}

export interface RespuestaEmail {
  msj: string;
  status: number;
}

export interface ValorSbif {
  Valor: string;
  Fecha: string;
}

export interface RespuestaSbifUF {
  UFs: ValorSbif[];
}

export interface RespuestaSbifUTMs {
  UTMs: ValorSbif[];
}

export interface RespuestaSbifDolar {
  Dolares: ValorSbif[];
}

export interface FormData {
  asunto: string;
  mensaje?: string;
  emailTo: string;
}
