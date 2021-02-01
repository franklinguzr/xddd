import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DomiciliarioService} from '../../../services/domiciliario.service';
import {Domiciliario} from '../../../models/Domiciliario';

@Component({
  selector: 'app-domiciliarios-listar',
  templateUrl: './domiciliarios-listar.component.html',
  styleUrls: ['./domiciliarios-listar.component.css']
})
export class DomiciliariosListarComponent implements OnInit {

  domiciliarios: Domiciliario[];
  domiciliario: Domiciliario;
  constructor(private service: DomiciliarioService, private router: Router) { }

  ngOnInit(): void {
    this.service.getDomiciliario().subscribe(data => {
      this.domiciliarios = data;
    });
  }
  editar(domiciliario: Domiciliario){
    this.service.domiciliarioProv = domiciliario;
    // localStorage.setItem('id', proveedor.idProveedor.toString());
    this.router.navigate(['editarDomiciliario']);

  }
  eliminar(proveedor: Domiciliario){
    this.service.delete(proveedor).subscribe(data => {
      this.domiciliarios = this.domiciliarios.filter(p => p !== proveedor);
    });
  }
  regresar(): void{
    this.router.navigate(['domiciliario']);
  }
  estado(estado: boolean): string{
    if (estado){
      return 'Activo';
    } else{
      return 'Inactivo';
    }
  }
}
