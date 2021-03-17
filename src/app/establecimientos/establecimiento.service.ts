import { Injectable } from '@angular/core';
import { Establecimiento } from './establecimiento';
import { LISTAESTABLECIMENTOS } from './establecimientos.json';
@Injectable({
  providedIn: 'root'
})
export class EstablecimientoService {

  constructor() { }

  getListaEstablecimientos(): Establecimiento[]{
    return LISTAESTABLECIMENTOS;
  }
}
