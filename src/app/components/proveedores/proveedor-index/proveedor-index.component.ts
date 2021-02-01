import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-proveedor-index',
  templateUrl: './proveedor-index.component.html',
  styleUrls: ['./proveedor-index.component.css']
})
export class ProveedorIndexComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private router: Router){}

  Listar(){
    this.router.navigate(['listarProveedor']);
  }

  Nuevo(){
    this.router.navigate(['agregarProveedor']);
  }
}
