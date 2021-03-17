import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { of,Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ClienteService {
private urlEndPointClientes:string ='http://localhost:8080//api/clientes';
  constructor(private http: HttpClient){ }
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndPointClientes);
  }
}
