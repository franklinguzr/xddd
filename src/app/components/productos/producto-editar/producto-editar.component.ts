
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {

  producto: Producto;
  productoForm = new FormGroup({
    idProducto: new FormControl(),
    nombreProducto: new FormControl(),
    dimensiones: new FormControl(),
    unidadEmpaque: new FormControl(),
    precio: new FormControl()
  });
  constructor(private router: Router,  private service: ProductoService) { }

  ngOnInit(): void {
    this.getProducto();
    this.productoForm.setValue({
      idProducto: this.producto.idProducto,
      nombreProducto: this.producto.nombreProducto,
      dimensiones: this.producto.dimensiones,
      unidadEmpaque: this.producto.unidadEmpaque,
      precio: this.producto.precio,
    });
    this.productoForm.get('nombreProducto').setValidators([Validators.maxLength(45), Validators.required]);
    this.productoForm.get('dimensiones').setValidators([ Validators.maxLength(20), Validators.required]);
    this.productoForm.get('unidadEmpaque').setValidators([ Validators.maxLength(25), Validators.required]);
    this.productoForm.get('precio').setValidators([Validators.required, Validators.pattern(/^[1-9]\d{1,15}$/)]);

  }


  getProducto(){
    // mientras se arregla el getById en el back
    this.producto = this.service.productoProv;
    /*
    const id = localStorage.getItem('id');
    this.service.getProductoId(+id).subscribe (data => {
      this.producto = data;
    });
    */
  }
  regresar(): void{
    this.router.navigate(['listarProductos']);
  }
  edit(producto: Producto){
    console.log(producto);
    this.service.editProducto(producto).subscribe(data => {
      this.producto = data;
      alert('se actualizo correctamente');
      this.router.navigate(['listarProductos']);
    });
  }
}
