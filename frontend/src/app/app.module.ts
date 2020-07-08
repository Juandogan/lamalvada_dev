import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MainComponent } from './componentes/main/main.component';
import { ProductosService } from './services/productos.service';
import { CartaComponent } from './componentes/carta/carta.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ComprasComponent } from './componentes/compras/compras.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { MediosdepagoComponent } from './componentes/mediosdepago/mediosdepago.component';
import { ModulocomprasComponent } from './componentes/modulocompras/modulocompras.component';
import { RedirigiendoComponent } from './componentes/redirigiendo/redirigiendo.component';
import { ComprasfinComponent } from './componentes/comprasfin/comprasfin.component';
import {MatBadgeModule} from '@angular/material/badge';
import { FormComponent } from './componentes/productos/form/form.component';
import { KeysPipe } from './pipes/keys.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import { PagoefectivoComponent } from './componentes/pagoefectivo/pagoefectivo.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    CartaComponent,
    FilterPipe,
    ProductosComponent,
    ComprasComponent,
    FormularioComponent,
    MediosdepagoComponent,
    ModulocomprasComponent,
    RedirigiendoComponent,
    ComprasfinComponent,
    FormComponent,
    KeysPipe,
    PagoefectivoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSnackBarModule,
    RouterModule,
    MatBadgeModule,
    ReactiveFormsModule
    
    
    
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
