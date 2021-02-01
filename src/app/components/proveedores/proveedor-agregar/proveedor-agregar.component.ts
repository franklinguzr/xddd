import { Component, OnInit } from '@angular/core';
import {Producto} from '../../../models/producto';
import {Router} from '@angular/router';
import {Proveedor} from '../../../models/proveedor';
import {ProveedorService} from '../../../services/proveedor.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-proveedor-agregar',
  templateUrl: './proveedor-agregar.component.html',
  styleUrls: ['./proveedor-agregar.component.css']
})
export class ProveedorAgregarComponent implements OnInit {

    proveedorForm = new FormGroup({
      idProveedor: new FormControl('0'),
      razonSocial: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      nit: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      nombreContacto: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      tipoDocContacto: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      nroDocContacto: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d{0,20}$/), Validators.maxLength(20)]),
      emailContacto: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(20)]),
      direccion: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      telefonoFijo: new FormControl('', Validators.pattern(/^[1-9]\d{0,20}$/)),
      celular: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d{0,20}$/)]),
      estado: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  });
  constructor(private router: Router, private service: ProveedorService ){
  }


  guardar(form): void{
    if (this.proveedorForm.valid) {
      this.router.navigate(['listarProveedor']);
      this.service.createProveedor(form).subscribe(data => {
        alert('Creado con exito');
      });
    } else {

    }
  }
  regresar(): void{
    this.router.navigate(['proveedor']);
  }
  ngOnInit(): void {
  }

}
