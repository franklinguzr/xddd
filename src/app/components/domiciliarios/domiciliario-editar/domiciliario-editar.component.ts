import { Component, OnInit } from '@angular/core';
import {Producto} from '../../../models/producto';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductoService} from '../../../services/producto.service';
import {Domiciliario} from '../../../models/Domiciliario';
import {DomiciliarioService} from '../../../services/domiciliario.service';

@Component({
  selector: 'app-domiciliario-editar',
  templateUrl: './domiciliario-editar.component.html',
  styleUrls: ['./domiciliario-editar.component.css']
})
export class DomiciliarioEditarComponent implements OnInit {
  domiciliario: Domiciliario;
  domiciliarioForm = new FormGroup({
    idDomiciliario: new FormControl('0'),
    nroDoc: new FormControl([Validators.required, Validators.pattern(/^[0-9]\d{0,20}$/), Validators.maxLength(20)]),
    tipoDoc: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    nombres: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    apellidos: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    direccion: new FormControl('', [Validators.required, Validators.maxLength(45)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d{0,20}$/), Validators.maxLength(20)]),
    celular: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d{0,20}$/), Validators.maxLength(20)]),
    estado: new FormControl('', )
  });
  constructor(private router: Router,  private service: DomiciliarioService) { }

  ngOnInit(): void {
    this.getProducto();
    this.domiciliarioForm.setValue({
      idDomiciliario: this.domiciliario.idDomiciliario,
      nombres: this.domiciliario.nombres,
      apellidos: this.domiciliario.apellidos,
      tipoDoc: this.domiciliario.tipoDoc,
      nroDoc:  this.domiciliario.nroDoc,
      direccion: this.domiciliario.direccion,
      estado: this.domiciliario.estado,
      telefono: this.domiciliario.telefono,
      celular: this.domiciliario.celular
    });
  }


  getProducto(){
    // mientras se arregla el getById en el back
    this.domiciliario = this.service.domiciliarioProv;
    /*
    const id = localStorage.getItem('id');
    this.service.getProductoId(+id).subscribe (data => {
      this.producto = data;
    });
    */
  }
  regresar(): void{
    this.router.navigate(['listarDomiciliario']);
  }
  edit(domiciliario: Domiciliario){
    this.service.editDomiciliario(domiciliario).subscribe(data => {
      this.domiciliario = data;
      alert('se actualizo correctamente');
      this.router.navigate(['listarDomiciliario']);
    });
  }
}
