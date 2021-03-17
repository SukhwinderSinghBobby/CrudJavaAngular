import { Component, OnInit } from '@angular/core';
import { Establecimiento } from './establecimiento';
import { EstablecimientoService } from './establecimiento.service';

@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.component.html',
  styleUrls: ['./establecimientos.component.css']
})
export class EstablecimientosComponent implements OnInit {
  listaEstablecimientos:Establecimiento[];

  constructor(private establecimientoService:EstablecimientoService) { }

  ngOnInit(): void {
    this.listaEstablecimientos = this.establecimientoService.getListaEstablecimientos();

}
}
