import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-producto-agregar',
  templateUrl: './producto-agregar.component.html',
  styleUrls: ['./producto-agregar.component.css']
})
export class ProductoAgregarComponent implements OnInit {


  productoForm = new FormGroup({
    idProducto: new FormControl('0'),
    nombreProducto: new FormControl('', [Validators.maxLength(45), Validators.required]),
    dimensiones: new FormControl('', [ Validators.maxLength(20), Validators.required]),
    unidadEmpaque: new FormControl('', [ Validators.maxLength(25), Validators.required]),
    precio: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d{1,15}$/)])
});
  constructor(private router: Router, private service: ProductoService ){}



  guardar(form): void{
    this.service.createProducto(form).subscribe(data => {
    alert('Creado con exito');
    this.router.navigate(['listarProductos']);
  });
}
  regresar(): void{
    this.router.navigate(['productos']);
  }
  ngOnInit(): void {
  }

}
