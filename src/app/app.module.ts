import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoIndexComponent } from './components/productos/producto-index/producto-index.component';
import { ProductoListarComponent } from './components/productos/producto-listar/producto-listar.component';
import { ProductoAgregarComponent } from './components/productos/producto-agregar/producto-agregar.component';
import { ProductoEditarComponent } from './components/productos/producto-editar/producto-editar.component';
import { ProductoService } from './services/producto.service';
import { ProveedorIndexComponent } from './components/proveedores/proveedor-index/proveedor-index.component';
import { ProveedorListarComponent } from './components/proveedores/proveedor-listar/proveedor-listar.component';
import { ProveedorAgregarComponent } from './components/proveedores/proveedor-agregar/proveedor-agregar.component';
import { ProveedorEditarComponent } from './components/proveedores/proveedor-editar/proveedor-editar.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ZonasIndexComponent } from './components/zonas/zonas-index/zonas-index.component';
import { DomiciliariosIndexComponent } from './components/domiciliarios/domiciliarios-index/domiciliarios-index.component';
import { DomiciliariosListarComponent } from './components/domiciliarios/domiciliarios-listar/domiciliarios-listar.component';
import { DomiciliarioAgregarComponent } from './components/domiciliarios/domiciliario-agregar/domiciliario-agregar.component';
import { DomiciliarioEditarComponent } from './components/domiciliarios/domiciliario-editar/domiciliario-editar.component';
import { ZonasListarComponent } from './components/zonas/zonas-listar/zonas-listar.component';
import { ZonasAgregarComponent } from './components/zonas/zonas-agregar/zonas-agregar.component';
import { ZonasEditarComponent } from './components/zonas/zonas-editar/zonas-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductoIndexComponent,
    ProductoListarComponent,
    ProductoAgregarComponent,
    ProductoEditarComponent,
    ProveedorIndexComponent,
    ProveedorListarComponent,
    ProveedorAgregarComponent,
    ProveedorEditarComponent,
    ZonasIndexComponent,
    DomiciliariosIndexComponent,
    DomiciliariosListarComponent,
    DomiciliarioAgregarComponent,
    DomiciliarioEditarComponent,
    ZonasListarComponent,
    ZonasAgregarComponent,
    ZonasEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
