import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductoService} from '../../../services/producto.service';
import {ZonaService} from '../../../services/zona.service';

@Component({
  selector: 'app-zonas-agregar',
  templateUrl: './zonas-agregar.component.html',
  styleUrls: ['./zonas-agregar.component.css']
})
export class ZonasAgregarComponent implements OnInit {

  zonaForm = new FormGroup({
    idZona: new FormControl('0'),
    nombreZona: new FormControl('', [Validators.maxLength(45), Validators.required]),
    municipio: new FormControl('', [ Validators.maxLength(20), Validators.required]),
    valorCobro: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d{1,15}$/)]),
    estado: new FormControl( )
  });
  constructor(private router: Router, private service: ZonaService ){}



  guardar(form): void{
    this.service.createZona(form).subscribe(data => {
      alert('Creado con exito');
      this.router.navigate(['listarzona']);
    });
  }
  regresar(): void{
    this.router.navigate(['listarzona']);
  }
  ngOnInit(): void {
  }
}
