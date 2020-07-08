import { Component, OnInit } from '@angular/core';
import { ProductosService} from '../../services/productos.service';
import { Productos } from '../../models/productos';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
  providers:[ProductosService]  
})



export class ComprasComponent implements OnInit {
public state:string = 'inicial';  
productos:any;
carrito: Productos;
resultado:number = 0; 
public dale:any
public fondo:boolean;

  constructor(public productosService:ProductosService, public snackBar:MatSnackBar, public servicio:ComunicacionService) { }


  ngOnInit(): void {
    
    // this.productosService.escucharFondo.subscribe(res => {this.fondo = res})

  this.productos =  this.productosService.pedirStorage();
  
 
      var suma:number = 0 ;
      
    if (this.productosService.carrito===null){this.productosService.total = 0 }else{


    for(let index of this.productosService.carrito){
      
      if(index.precio === null ){ suma = 0; this.productosService.total = 0}
      else{
      suma = suma + Number(index.precio) ;
     this.resultado= suma;
     this.productosService.total = suma


  
    };

    
  
    
  };
};  
  
  };

  borrarStorage(){
    localStorage.clear()
  };

eliminarItem(entrada:Productos, i:number){
   
  let eliItem:Productos[]=[] ;
  eliItem = this.productosService.pedirStorage(); 
  var cont:number = 0 
  for(let i = 0 ; i < eliItem.length; i++) {  
  if(entrada._id == eliItem[i]._id){
    cont = cont +1;
    
    this.snackBar.open('','',{duration:100, horizontalPosition:'center', verticalPosition:'top',  panelClass: ['blue-snackbar1']})
    
    
  }
  }


  for(let i = 0 ; i < eliItem.length; i++) {
 
    if (entrada._id == eliItem[i]._id && eliItem[i].cantidad == cont ) {
        
    eliItem.splice(i,1);
    
  localStorage.setItem('pedidos', JSON.stringify(eliItem)); //mando el arreglo con las modificaciones al LocalStorage
  this.servicio.contador(eliItem.length)
  if (eliItem.length === 0){this.servicio.enviaContadorNavbar(true); this.resultado = 0; this.productosService.total = 0}
  if (eliItem.length === 0){this.servicio.enviaContadorNavbar(true);  this.servicio.contador(0) }
  }
  }




//Calculadora

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

// como siempre que borra manda algo, creeamos un indice que al llegar a cero manda a la variable resultado 0 
if(x ===0 ){ this.resultado=0}
else{this.resultado=suma;    this.productosService.total = suma
}; //si es mayor a 0 es poque hay elementos y muestra el precio

};



};

