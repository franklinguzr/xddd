import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-zonas-index',
  templateUrl: './zonas-index.component.html',
  styleUrls: ['./zonas-index.component.css']
})
export class ZonasIndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Listar(){
    this.router.navigate(['listarzona']);
  }

  Nuevo(){
    this.router.navigate(['agregarzona']);
  }

}
