import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {


  productos: Producto[];
  constructor(private service: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.service.getProducto().subscribe(data => {
      this.productos = data;
    });
  }

  editar(producto: Producto) {
    this.service.productoProv = producto;
    this.router.navigate(['editarProductos']);
  }
    eliminar(producto: Producto){
    this.service.delete(producto).subscribe(data => {
      this.productos = this.productos.filter(p => p !== producto);
    });
    }


}
