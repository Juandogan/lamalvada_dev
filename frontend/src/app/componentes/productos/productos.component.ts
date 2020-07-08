import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { NgForm } from '@angular/forms';
import { Productos } from '../../models/productos';
import { ComunicacionService } from '../../services/comunicacion.service';
import { pedidos } from '../../models/pedidos';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers:[ProductosService]

})
export class ProductosComponent implements OnInit {
  public tipoForm = "nota";
  public tipo:string;
  public tipo2:string ='promos';
  public tipo3:string ='listado';
  public productos :Productos[];
  
  public pedidos:any;
  public pedidos2:any;
  public total:number;
  public estado:string;
  public cantped:any;
  
  eventName = 'send-message'
  
    
  constructor(public productosService:ProductosService, public servicio:ComunicacionService) {  }

  ngOnInit(): void {
    
     this.pedirProductos();
    

  };

  formEdit(value:string){

      this.tipo3=value; window.scroll(0,0) ;         
      this.servicio.emit('send-cxn','a')           
      //this.servicio.emit('send-message','a')           


      this.servicio.listen('cnx').subscribe((data:any)=>{
      this.pedidos = data.reverse() })        
      this.servicio.listen('text-event').subscribe((data:any)=>{
      this.pedidos = data.reverse(), this.cantped = data.length })

      

     };
     
  cambiarEstado( value, index ){

    var index = index


       this.pedidos[index].estado = value
       var estado = this.pedidos[index].estado

       

       this.servicio.emitEstado('send-messageEstado', index, estado)

    
  };
cambiarPromo(value:string){
    this.tipo2 =value;

  };
openEditor(tipoForm:string){

  this.tipoForm= this.tipoForm;

  };  

  topscroll(){ window.scroll(0,0)} 

  agregarProductos(form: NgForm){
    if(form.value._id)
    {
      this.productosService.modificarProducto(form.value)
      .subscribe(res => {
        this.limpiarForm(form);
        console.log(res);
        this.pedirProductos()
                         })}  
    else  {

     this.productosService.agregarProducto(form.value)
     .subscribe(res => {console.log(res);
    this.limpiarForm(form);
     console.log('guardado')
     this.pedirProductos()
    });
  
}; //fin de If 

  }; //fin de agregar productos

  pedirProductos(){
  this.productosService.pedirProductos()
    .subscribe(res =>{
      this.productosService.productos = res as Productos[];
       this.productos = res as Productos[]; 
      console.log(res);
    });
  };

  editarProductos(producto:any){
this.productosService.productoSeleccionado = producto

  };


  borrarProducto(producto:any){
    this.productosService.productoSeleccionado = producto; 
    console.log(producto._id);
        this.productosService.borrarProducto(producto._id).subscribe(res => console.log(res));
        
        console.log('Eliminado')
        this.pedirProductos()
  };
  
  
  limpiarForm(form?:NgForm){
    if (form){form.reset();
    this.productosService.productoSeleccionado = new Productos;
    };

  }};