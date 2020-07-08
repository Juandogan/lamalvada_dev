import { Component, OnInit } from '@angular/core';
import { datosEntrega } from '../../models/datosEntrega';
import { pedidos } from '../../models/pedidos';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../models/productos';
import { ComunicacionService } from '../../services/comunicacion.service';



@Component({
  selector: 'app-mediosdepago',
  templateUrl: './mediosdepago.component.html',
  styleUrls: ['./mediosdepago.component.css']
})
export class MediosdepagoComponent implements OnInit {
public datos:datosEntrega;
public pedidos:pedidos;
public total1:number;
public link:any;
public loading : boolean;
public pantalla : boolean = true
public productos:any
  constructor(public productosService:ProductosService, public servicio:ComunicacionService) { }

  ngOnInit(): void {

    
    this.productos = this.productosService.pedirStorage
    let pedidos:pedidos[]=[];
    var total:number ;
    this.datos = this.pedirStorage('datosEntrega');
    this.pedidos = this.pedirStorage('pedidos');
    console.log(pedidos)

    
  this.productosService.pedirStorage(); //pido de nuevo el storage 
  var suma:number = 0 ; //inicializo variable suma en 0 
var x:number= 0;
for(let index of this.productosService.carrito) //recorro todo el carrito el localStorage cargado en el Servicio y se guarda en index
{ 
  x = x + 1; //indice para cuando llega a 0 
  if(index.precio === null ){ suma = 0} // si no hay productos en el carrito suma=0 para que la primera vez tenga un valor. m
  else{
  suma = suma + Number(index.precio) ; //si ya tiene contenido suma recive su contenido mas el precio pasado a number 
     this.productosService.total = suma
this.productosService.cargaTotal(this.productosService.total)
this.productosService.cargaFecha();     
this.productosService.cargaOrden();
};

}; //find de for


let items:Productos[] = this.productosService.pedirStorage();  
                           
    
    if(items === null){ this.servicio.sum = 0 ;  } else {
      this.servicio.contador(items.length)
        for(var x = 0 ; x < this.productos.length;  x++ ) {
      for(var i = 0 ; i < items.length;  i++ ){
      if (items[i].nombre == this.productos[x].nombre){

         this.productos[x].cantidad = 0 ;
         this.productos[x].cantidad = items[i].cantidad }
         
     } 
    }
      
  }};


mercadoPago(){

  this.productosService.pedirStorage(); //pido de nuevo el storage 
  var suma:number = 0 ; //inicializo variable suma en 0 
var x:number= 0;
for(let index of this.productosService.carrito) //recorro todo el carrito el localStorage cargado en el Servicio y se guarda en index
{ 
  x = x + 1; //indice para cuando llega a 0 
  if(index.precio === null ){ suma = 0} // si no hay productos en el carrito suma=0 para que la primera vez tenga un valor. m
  else{
  suma = suma + Number(index.precio) ; //si ya tiene contenido suma recive su contenido mas el precio pasado a number 
     this.productosService.total = suma
     
};


}; //find de for



  this.productosService.pedirMercadoPago(this.productosService.total).subscribe(res => {this.link = res;  
    this.pantalla=false     
    window.location.href = (this.link.link);this.loading = false    })
    
};

  pedirStorage(value){
    return JSON.parse(localStorage.getItem(value))};
    

}
