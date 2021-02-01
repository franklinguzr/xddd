import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Producto} from '../../../models/producto';
import {Router} from '@angular/router';
import {ProductoService} from '../../../services/producto.service';
import {ZonaService} from '../../../services/zona.service';
import {Zona} from '../../../models/Zona';

@Component({
  selector: 'app-zonas-editar',
  templateUrl: './zonas-editar.component.html',
  styleUrls: ['./zonas-editar.component.css']
})
export class ZonasEditarComponent implements OnInit {

  zona: Zona;
  zonaForm = new FormGroup({
    idZona: new FormControl('0'),
    nombreZona: new FormControl('', [Validators.maxLength(45), Validators.required]),
    municipio: new FormControl('', [ Validators.maxLength(20), Validators.required]),
    valorCobro: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d{1,15}$/)]),
    estado: new FormControl( )
  });
  constructor(private router: Router,  private service: ZonaService) { }

  ngOnInit(): void {
    this.getProducto();
    this.zonaForm.setValue({
      idZona: this.zona.idZona,
      nombreZona: this.zona.nombreZona,
      municipio: this.zona.municipio,
      valorCobro: this.zona.valorCobro,
      estado: this.zona.estado,
    });
  }


  getProducto(){
    // mientras se arregla el getById en el back
    this.zona = this.service.zonaProv;
    /*
    const id = localStorage.getItem('id');
    this.service.getProductoId(+id).subscribe (data => {
      this.producto = data;
    });
    */
  }
  regresar(): void{
    this.router.navigate(['listarzona']);
  }
  edit(zona: Zona){
    console.log(zona);
    this.service.editZona(zona).subscribe(data => {
      this.zona = data;
      alert('se actualizo correctamente');
      this.router.navigate(['listarzona']);
    });
  }
}
