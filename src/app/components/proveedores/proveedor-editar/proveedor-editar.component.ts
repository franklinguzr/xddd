import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Proveedor} from '../../../models/proveedor';
import {ProveedorService} from '../../../services/proveedor.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-proveedor-editar',
  templateUrl: './proveedor-editar.component.html',
  styleUrls: ['./proveedor-editar.component.css']
})
export class ProveedorEditarComponent implements OnInit {


  proveedor: Proveedor;
  proveedorForm = new FormGroup({
    idProveedor: new FormControl('0'),
    razonSocial: new FormControl(),
    nit: new FormControl(),
    nombreContacto: new FormControl(),
    tipoDocContacto: new FormControl(),
    nroDocContacto: new FormControl(),
    emailContacto: new FormControl(),
    direccion: new FormControl(),
    telefonoFijo: new FormControl(),
    celular: new FormControl(),
    estado: new FormControl(),
  });

  constructor(private router: Router,  private service: ProveedorService) { }

  ngOnInit(): void {
   this.getProveedor();
   this.proveedorForm.setValue({
      idProveedor: this.proveedor.idProveedor,
      razonSocial: this.proveedor.razonSocial,
      nit: this.proveedor.nit,
      nombreContacto: this.proveedor.nombreContacto,
      tipoDocContacto: this.proveedor.tipoDocContacto,
      nroDocContacto: this.proveedor.nroDocContacto,
      emailContacto: this.proveedor.emailContacto,
      direccion: this.proveedor.direccion,
      telefonoFijo: this.proveedor.telefonoFijo,
      celular: this.proveedor.celular,
      estado: this.proveedor.estado,
    });
   this.proveedorForm.get('nit').setValidators([Validators.required, Validators.maxLength(20)]);
   this.proveedorForm.get('nombreContacto').setValidators([Validators.required, Validators.maxLength(20)]);
   this.proveedorForm.get('tipoDocContacto').setValidators([Validators.required, Validators.maxLength(20)]);
   this.proveedorForm.get('razonSocial').setValidators([Validators.required, Validators.maxLength(20)]);
   this.proveedorForm.get('nroDocContacto').setValidators([Validators.required, Validators.pattern(/^[0-9]\d{0,20}$/)]);
   this.proveedorForm.get('emailContacto').setValidators([Validators.required, Validators.email, Validators.maxLength(20)]);
   this.proveedorForm.get('direccion').setValidators([Validators.required, Validators.maxLength(45)]);
   this.proveedorForm.get('telefonoFijo').setValidators(Validators.pattern(/^[1-9]\d{0,20}$/));
   this.proveedorForm.get('celular').setValidators([Validators.required, Validators.pattern(/^[0-9]\d{0,20}$/)]);
  }


  getProveedor(){
    this.proveedor = this.service.proveedor;
    /*
    const id = localStorage.getItem('id');
    this.service.getProveedorId(+id).subscribe (data => {
      this.proveedor = data;
    });
    */
  }
  regresar(): void{
    this.router.navigate(['listarProveedor']);
  }

  edit(proveedor: Proveedor){
    this.service.editProveedor(proveedor).subscribe(data => {
      this.proveedor = data;
      alert('se actualizo correctamente');
      this.router.navigate(['listarProductos']);
    });
  }

}
