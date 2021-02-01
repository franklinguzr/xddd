import { Component, OnInit } from '@angular/core';
import {Proveedor} from '../../../models/proveedor';
import {ProveedorService} from '../../../services/proveedor.service';
import {Router} from '@angular/router';
import {Zona} from '../../../models/Zona';
import {ZonaService} from '../../../services/zona.service';

@Component({
  selector: 'app-zonas-listar',
  templateUrl: './zonas-listar.component.html',
  styleUrls: ['./zonas-listar.component.css']
})
export class ZonasListarComponent implements OnInit {
  zonas: Zona[];
  zona: Zona;
  constructor(private service: ZonaService, private router: Router) { }

  ngOnInit(): void {
    this.service.getZona().subscribe(data => {
      this.zonas = data;
    });
  }
  editar(zona: Zona){
    this.service.zonaProv = zona;
    // localStorage.setItem('id', proveedor.idProveedor.toString());
    this.router.navigate(['editarzona']);

  }
  eliminar(zona: Zona){
    this.service.delete(zona).subscribe(data => {
      this.zonas = this.zonas.filter(p => p !== zona);
    });
  }
  regresar(): void{
    this.router.navigate(['listarZona']);
  }
  estado(estado: boolean): string{
    if (estado){
      return 'Activo';
    } else{
      return 'Desactivado';
    }
  }
}
