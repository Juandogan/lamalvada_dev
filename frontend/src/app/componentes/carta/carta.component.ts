import { Component, OnInit } from '@angular/core';
import { Productos } from '../../models/productos';
import { ProductosService } from '../../services/productos.service';
import { ComunicacionService } from '../../services/comunicacion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { datosEntrega } from '../../models/datosEntrega';


@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
  
 
})

export class CartaComponent implements OnInit {
  fondo:boolean;
  public productos:Productos[];
  public panel:string;
  public ind:number;
  

  constructor(public productosService:ProductosService,public snackBar:MatSnackBar, public service1:ComunicacionService){

  }


  ngOnInit(): void {

    this.pedirProductos();
    var item = JSON.parse(localStorage.getItem('pedidos'));     
    if(item ===null ){this.service1.contador(0)} else {
    this.service1.contador(item.length)    }
    
  
    
  }

cerrar(){ 
 this.panel='false'
};



  eliminarItem(entrada:any ){
   
  //Pido el contenido del localStorage y lo guardo en eliItem . luego tomo el indice del for de html y borro 
  let eliItem:Productos[]=[] ;
  
eliItem = JSON.parse(localStorage.getItem('pedidos')); 

if (eliItem === null ){localStorage.clear(); this.service1.enviaContadorNavbar(true) }
for(let i = 0 ; i < eliItem.length; i++) {
  if (entrada.cantidad == eliItem[i].cantidad && entrada._id == eliItem[i]._id) {
    
  eliItem.splice(i,1);
  this.snackBar.open('','',{duration:100, horizontalPosition:'center', verticalPosition:'top',  panelClass: ['blue-snackbar1']})
  if (eliItem.length === 0 ){ this.service1.contador(0)} else {
  this.service1.contador(eliItem.length)    }
  console.log(eliItem.length)
  if (eliItem.length === 0){this.service1.enviaContadorNavbar(true);  this.service1.contador(0) }
localStorage.setItem('pedidos', JSON.stringify(eliItem)); //mando el arreglo con las modificaciones al LocalStorage

}
} 
    
  };   

    

  pedirProductos(){
                            
                            this.productosService.pedirProductos()
                            .subscribe(res =>{
                            this.productosService.productos = res as Productos[];
                            this.productos = res as Productos[];
                            
                            
                            for(var x = 0 ; x < this.productos.length;  x++ ) {
                              this.productos[x].cantidad = 0;}
                            
                            let items:Productos[] = JSON.parse(localStorage.getItem('pedidos'));                         
                            if (items ===null){} else {

                            for(var x = 0 ; x < this.productos.length;  x++ ) {
                              for(var i = 0 ; i < items.length;  i++ ){
                              if (items[i].nombre == this.productos[x].nombre){
    
                                 this.productos[x].cantidad = 0 ;
                                 this.productos[x].cantidad = items[i].cantidad }
                               
                             } 
                            } 
                          } //fin de if comprobarcion de item esta vacio o lleno            
                              });
                                                     
                            
                            };
                            trackByFn(index:number,productos:Productos){
                              return index;
                              
                            }
                            };


