import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../models/productos';
//import {trigger, state, style, animate, transition} from '@angular/animations'
import { ComunicacionService } from '../../services/comunicacion.service';
import { datosEntrega } from '../../models/datosEntrega';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[ProductosService]
  //animations:[
  //  trigger('aniCard',[
  //  state('void', style({
   //   transform:'scale(0)'
      
  //    })),
      
   //       transition(':enter', animate('500ms ease-in')),
  
   // ])
 // ]
  
})
export class MainComponent implements OnInit {
  
  public productos:Productos[];
  public pedido:any[];
  public estado:boolean=false;
  public loading:boolean=true; 
  public datosNew = new datosEntrega; //inicializa DatosEnvio LocalStorage


  constructor(public productosService:ProductosService, public service:ComunicacionService) { }

  ngOnInit(): void { 
    
    
      //this.productos =   JSON.parse(localStorage.getItem('bigdata'))
    //if ( this.productos === null){  
    this.pedirProductos() ;


//inicializa DatosEnvio LocalStorage    
    var datosEntrega =  JSON.parse(localStorage.getItem('datosEntrega')); //inicializa DatosEnvio LocalStorage
    if(datosEntrega===null){
      localStorage.setItem('datosEntrega', JSON.stringify(this.datosNew)); //mando el arreglo con las modificaciones al LocalStorage

    }
//inicializa DatosEnvio LocalStorage  FIN   

  //} else {
   // this.productos = JSON.parse(localStorage.getItem('bigdata')) 

   //}
  };



  pedirProductos(){

//localStorage.clear();
  
    this.productosService.pedirProductos().subscribe(res =>{
    this.productosService.productos = res as Productos[];
    this.productos = res as Productos[];
    //localStorage.setItem('bigdata', JSON.stringify(res))
    
    
    
    for(var x = 0 ; x < this.productos.length;  x++ ) {
      this.productos[x].cantidad = 0;
      
      
    } 
    
    //if (this.productosService.pedirStorage() != null  ){}
    let items:Productos[] = this.productosService.pedirStorage();  
                           
    
    if(items === null){this.loading=false; this.service.sum = 0 ;  } else {
      this.service.contador(items.length)
        for(var x = 0 ; x < this.productos.length;  x++ ) {
      for(var i = 0 ; i < items.length;  i++ ){
      if (items[i].nombre == this.productos[x].nombre){

         this.productos[x].cantidad = 0 ;
         this.productos[x].cantidad = items[i].cantidad }
         
     } 
    } 
  }  
  
    this.loading =false  
      });


    

    };
  
  
eliminarItem(entrada:any ){
    
  //Pido el contenido del localStorage y lo guardo en eliItem . luego tomo el indice del for de html y borro 
  let eliItem:Productos[]=[] ;
  
eliItem = this.productosService.pedirStorage();                         
if (eliItem === null ){localStorage.clear(); this.service.enviaContadorNavbar(true)}

for(let i = 0 ; i < eliItem.length; i++) {
  if (entrada.cantidad == eliItem[i].cantidad && entrada._id == eliItem[i]._id) {
    
  eliItem.splice(i,1);
  
  if (eliItem.length === 0){this.service.enviaContadorNavbar(true)}
localStorage.setItem('pedidos', JSON.stringify(eliItem)); //mando el arreglo con las modificaciones al LocalStorage

}
}
    
  };   

    

};


