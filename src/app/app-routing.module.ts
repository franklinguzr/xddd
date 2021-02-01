import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductoEditarComponent} from './components/productos/producto-editar/producto-editar.component';
import {ProductoIndexComponent} from './components/productos/producto-index/producto-index.component';
import {ProductoListarComponent} from './components/productos/producto-listar/producto-listar.component';
import {ProductoAgregarComponent} from './components/productos/producto-agregar/producto-agregar.component';
import {ProveedorAgregarComponent} from './components/proveedores/proveedor-agregar/proveedor-agregar.component';
import {ProveedorEditarComponent} from './components/proveedores/proveedor-editar/proveedor-editar.component';
import {ProveedorIndexComponent} from './components/proveedores/proveedor-index/proveedor-index.component';
import {ProveedorListarComponent} from './components/proveedores/proveedor-listar/proveedor-listar.component';
import {AppComponent} from './app.component';
import {DomiciliariosIndexComponent} from './components/domiciliarios/domiciliarios-index/domiciliarios-index.component';
import {DomiciliariosListarComponent} from './components/domiciliarios/domiciliarios-listar/domiciliarios-listar.component';
import {DomiciliarioAgregarComponent} from './components/domiciliarios/domiciliario-agregar/domiciliario-agregar.component';
import {DomiciliarioEditarComponent} from './components/domiciliarios/domiciliario-editar/domiciliario-editar.component';
import {ZonasIndexComponent} from './components/zonas/zonas-index/zonas-index.component';
import {ZonasListarComponent} from './components/zonas/zonas-listar/zonas-listar.component';
import {ZonasAgregarComponent} from './components/zonas/zonas-agregar/zonas-agregar.component';
import {ZonasEditarComponent} from './components/zonas/zonas-editar/zonas-editar.component';

const routes: Routes = [
        {path: 'productos', component: ProductoIndexComponent},
  {path: 'listarProductos', component: ProductoListarComponent},
  {path: 'editarProductos', component: ProductoEditarComponent},
  {path: 'agregarProductos', component: ProductoAgregarComponent},
  {path: 'proveedor', component: ProveedorIndexComponent},
  {path: 'listarProveedor', component: ProveedorListarComponent},
  {path: 'editarProveedor', component: ProveedorEditarComponent},
  {path: 'agregarProveedor', component: ProveedorAgregarComponent},
  {path: 'domiciliario', component: DomiciliariosIndexComponent},
  {path: 'listarDomiciliario', component: DomiciliariosListarComponent},
  {path: 'agregarDomiciliario', component: DomiciliarioAgregarComponent},
  {path: 'editarDomiciliario', component: DomiciliarioEditarComponent},
  {path: 'zona', component: ZonasIndexComponent},
  {path: 'listarzona', component: ZonasListarComponent},
  {path: 'agregarzona', component: ZonasAgregarComponent},
  {path: 'editarzona', component: ZonasEditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
