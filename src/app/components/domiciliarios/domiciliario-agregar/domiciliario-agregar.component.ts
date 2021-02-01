import { Component, OnInit } from '@angular/core';
import {DomiciliarioService} from '../../../services/domiciliario.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-domiciliario-agregar',
  templateUrl: './domiciliario-agregar.component.html',
  styleUrls: ['./domiciliario-agregar.component.css']
})
export class DomiciliarioAgregarComponent implements OnInit {
  domiciliarioForm = new FormGroup({
    idDomiciliario: new FormControl('0'),
    nroDoc: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d{0,20}$/), Validators.maxLength(20)]),
    tipoDoc: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    nombres: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    apellidos: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    direccion: new FormControl('', [Validators.required, Validators.maxLength(45)]),
    telefono: new FormControl('', [ Validators.pattern(/^[0-9]\d{0,20}$/), Validators.maxLength(20)]),
    celular: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d{0,20}$/), Validators.maxLength(20)]),
    estado: new FormControl('', ),
   });
  constructor( private service: DomiciliarioService, private router: Router) { }

  ngOnInit(): void {
  }
  guardar(form): void{
    this.service.createDomiciliario(form).subscribe(data => {
      alert('Creado con exito');
      this.router.navigate(['listarDomiciliario']);
    });
  }
  regresar(): void{
    this.router.navigate(['domiciliario']);
  }

}
