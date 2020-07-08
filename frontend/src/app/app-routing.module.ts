import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CartaComponent } from './componentes/carta/carta.component';
import { ComprasComponent} from './componentes/compras/compras.component';
import {FormularioComponent} from './componentes/formulario/formulario.component'
import {ModulocomprasComponent} from './componentes/modulocompras/modulocompras.component'
import  {MediosdepagoComponent} from './componentes/mediosdepago/mediosdepago.component'
import  { ComprasfinComponent } from './componentes/comprasfin/comprasfin.component'
import  { PagoefectivoComponent } from './componentes/pagoefectivo/pagoefectivo.component'
import { RouterLinkActive } from '@angular/router';


const routes: Routes = [
{
  path:'', component: MainComponent},
  {path:'productos', component: ProductosComponent},
  {path:'carta', component: CartaComponent},
   {path:'modulocompras', component: ModulocomprasComponent,
    children:[
    {path:"", component:ComprasComponent},
    {path:"formulario", component:FormularioComponent}, 
    {path:"mediosdepago", component:MediosdepagoComponent}, 
    {path:"comprasfin", component:ComprasfinComponent},
    {path:"pagoefectivo", component:PagoefectivoComponent}
      ]
      
}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
