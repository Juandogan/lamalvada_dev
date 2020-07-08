import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../services/productos.service';
import { NgForm } from '@angular/forms';
import { Productos } from '../../../models/productos';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public tipoForm = "nota";
  public tipo:string;
  public tipo2:string ='promos';
  public productos :Productos[];

    
  constructor(public productosService:ProductosService) { }

  ngOnInit(): void {
     this.pedirProductos();
     localStorage.clear();
   //  this.productosService.escucharFondo.subscribe(res => {console.log('daaa',res)})
 
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