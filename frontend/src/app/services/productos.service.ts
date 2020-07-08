import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../models/productos';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productoSeleccionado: Productos;
  productos: Productos[];
  unProducto: Productos;
  contador:number;
  lala:string;
  public format:any;
  public carrito:any;
  public pedido:any
  public cuenta:any;
  public juan:any;
  public total:number = 0;
  
  //Nuevo comunicaction
  



//readonly URL_API = "http://localhost:3000/productos";
readonly URL_API  = "http://192.168.43.55:3000/productos";
readonly URL_API2 = "http://192.168.43.55:3000/mercadopago";

  constructor(private http:HttpClient, public snackBar:MatSnackBar) {   
    this.productoSeleccionado = new Productos();
    this.unProducto = new Productos();
    this.unProducto.cantidad = 1;
    this.pedido= [];

    
};




pedirStorage(){
  this.carrito = JSON.parse(localStorage.getItem('pedidos'));
  return JSON.parse(localStorage.getItem('pedidos'));
  };

  getLocalStorage(value){
     return JSON.parse(localStorage.getItem(value));
    };


snack(value:string){

  this.snackBar.open(value,'',{duration:100, horizontalPosition:'center', verticalPosition:'top',   panelClass: ['blue-snackbar']})
};

guardarStorage(promo:Productos){
  
let promos:Productos[]=[];
let bana:any =JSON.parse(localStorage.getItem('pedidos'))
this.snackBar.open('','',{duration:100, horizontalPosition:'center', verticalPosition:'top',   panelClass: ['blue-snackbar']})


if (  bana === null)
 {promo.cantidad = 1 ; 
  promos.push(promo) 
  localStorage.setItem('pedidos', JSON.stringify(promos));
  this.juan = 0;

 } //mando el arreglo con las modificaciones al LocalStorage
 
  else{  


  promos = JSON.parse(localStorage.getItem('pedidos'))
  this.juan = promo.cantidad;


promo.total = this.total

  promos.push(promo)

  localStorage.setItem('pedidos', JSON.stringify(promos))
  
  }




  // promos = JSON.parse(localStorage.getItem('pedidos'))
  // for(var x = 0 ; x < promos.length;  x++ ) {
  //   this.total === this.total  + Number(promos[x].precio) 

  //   promos.push(promo)

  //   localStorage.setItem('pedidos', JSON.stringify(promos))


//};

  };


  cargaTotal(suma:number){
    let bana:any =JSON.parse(localStorage.getItem('datosEntrega'))
    bana.total = suma
   for(var x = 0 ; x < bana.length;  x++ ) { 
     bana[x].total = suma
    

   }
    
    localStorage.setItem('datosEntrega', JSON.stringify(bana))
  }

  cargaFecha(){
    let bana:any =JSON.parse(localStorage.getItem('datosEntrega'))
    bana.fecha = new Date()
    console.log('serviciofecha', bana.fecha)
    localStorage.setItem('datosEntrega', JSON.stringify(bana))
  }

  
  cargaOrden(){
    let bana:any =JSON.parse(localStorage.getItem('datosEntrega'))
    bana.orden = String(Math.random()).substring(3,7) 
    bana.estado = "New"
    localStorage.setItem('datosEntrega', JSON.stringify(bana))
  }
  
  
  
  
  obtenerUno(_id:string, producto:any){
  
     var suma:number;
     this.unProducto = this.productos.find(x => x._id == _id );    
     suma = this.unProducto.cantidad ;
     this.unProducto.cantidad = (suma ++) ;
     this.unProducto.cantidad = (suma);
   };        
//    return this.unProducto ;     
          
  
         restarUno(_id:string){
          var suma:number;
           this.unProducto = this.productos.find(x => x._id == _id );    
           suma = this.unProducto.cantidad;     
           if(this.unProducto.cantidad == 0){return this.unProducto ;     }else{
           this.unProducto.cantidad = (suma --) ;
           this.unProducto.cantidad = (suma);
           
           return this.unProducto ;     
           
          }
          
        };
               
          ////PETICIONES HTTP
        pedirProductos() {
          var precio:number = Number(this.pedido.precio)
          return this.http.get(this.URL_API);
          
        };
      
   
        pedirMercadoPago(value) {
                    return this.http.get(this.URL_API2 + `/${value}`);
          
        };
      


        agregarProducto(productos:Productos) {   
          return this.http.post(this.URL_API, productos);
          
        }; 
      
        modificarProducto(productos:Productos) {
          return this.http.put(this.URL_API + `/${productos._id}` , productos);
        };
      
        borrarProducto(_id:string) {
          return this.http.delete(this.URL_API + `/${_id}`);
        };
               

};
