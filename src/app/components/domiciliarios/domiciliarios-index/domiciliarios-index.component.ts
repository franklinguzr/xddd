import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-domiciliarios-index',
  templateUrl: './domiciliarios-index.component.html',
  styleUrls: ['./domiciliarios-index.component.css']
})
export class DomiciliariosIndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Listar(){
    this.router.navigate(['listarDomiciliario']);
  }

  Nuevo(){
    this.router.navigate(['agregarDomiciliario']);
  }
}
