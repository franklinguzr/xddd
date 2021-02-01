
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { ProductoIndexComponent } from './components/productos/producto-index/producto-index.component';




const appRoute: Routes = [
    {path: '', component: LoginComponent},
    {path: 'productos', component: ProductoIndexComponent}
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute, { relativeLinkResolution: 'legacy' }) ;
