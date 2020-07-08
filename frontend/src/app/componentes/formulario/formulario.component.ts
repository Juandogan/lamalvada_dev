import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; 
import { datosEntrega } from '../../models/datosEntrega';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../models/productos';
import { ComunicacionService } from '../../services/comunicacion.service';
import { FormControl, Validators } from '@angular/forms'
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit {

public datosEntrega = JSON.parse(localStorage.getItem('datosEntrega')); //  Cargo DatosEntrega Con info del LOCAL. 
public datosEnvios = new datosEntrega; // datosEnvios variable de paso. almacena input del Form 
public productos:any;  //revisar esta prop. 
public myDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');  // formatea con la fecha actual para inicializar entrega diferida. 
 

// Inicializacion de Form Reactivos con sus validaciones =>import { FormControl, Validator, Validators } from '@angular/forms'
// pasaje de data del localStorage a los INPUTS y validaciones
nombreForm = new FormControl(this.datosEntrega.nombre,[Validators.required])
celForm = new FormControl(this.datosEntrega.cel,[Validators.required])
direccionForm = new FormControl(this.datosEntrega.direccion,[Validators.required])
direccionNumeroForm = new FormControl(this.datosEntrega.direccionNumero,[Validators.required])
direccionPisoForm = new FormControl(this.datosEntrega.direccionPiso,[])
direccionDptoForm = new FormControl(this.datosEntrega.direccionDpto,[])
localidadForm = new FormControl(this.datosEntrega.localidad,[Validators.required])
entregaDif = new FormControl(this.datosEntrega.entregaDiferida,[Validators.required])
entregaInmedia = new FormControl(this.datosEntrega.entregaInmediata,[Validators.required])
fechaForm = new FormControl(this.datosEntrega.fechaDif,[])
horaForm = new FormControl(this.datosEntrega.horaDif,[])
// FIN 



constructor(private location: Location, public servicio:ProductosService, public servicioComunicatio:ComunicacionService ) {

  //Escucha por cambios en los unputs
  this.nombreForm.valueChanges.subscribe(value => {console.log(value)})
  this.celForm.valueChanges.subscribe(value => {console.log(value)})
  this.direccionForm.valueChanges.subscribe(value => {console.log(value)})
  this.direccionPisoForm.valueChanges.subscribe(value => {console.log(value)})
  this.direccionDptoForm.valueChanges.subscribe(value => {console.log(value)})
  this.fechaForm.valueChanges.subscribe(value => {console.log(value)})
  this.horaForm.valueChanges.subscribe(value => {console.log(value)})
  


  //Se inicializan variables radioButtons
  // this.datosEntrega.inmediata = true; 
  // this.datosEntrega.diferida = false;
  
 }

 ngOnInit():void{

  
// actualiza contador (Encapsular)    
this.productos = this.servicio.getLocalStorage('pedidos');  
if(this.productos === null ){localStorage.setItem('datosEntrega', JSON.stringify(this.datosEntrega));    }else{
this.datosEntrega =  JSON.parse(localStorage.getItem('datosEntrega')); 
}
let items:Productos[] = this.productos;  
    if(items === null){ this.servicioComunicatio.sum = 0 ;  } else {
      this.servicioComunicatio.contador(items.length)
        for(var x = 0 ; x < this.productos.length;  x++ ) {
      for(var i = 0 ; i < items.length;  i++ ){
      if (items[i].nombre == this.productos[x].nombre){

         this.productos[x].cantidad = 0 ;
         this.productos[x].cantidad = items[i].cantidad }
         
     } 
    } 
  }  
}

  

pedirStorage(){
  return JSON.parse(localStorage.getItem('datosEntrega'))
  
}

  cancel() { 
    this.location.back(); // <-- go back to previous location on cancel 
    } 

    topscroll(){ window.scroll(0,90)} 
    topscroll2(){ window.scroll(0,40)}
    focusOut(){ window.scroll(0,0)}

    entregaDiferida(){
      
       this.datosEntrega.diferida = true
      this.datosEntrega.inmediata = false
      this.datosEntrega.inmediata = !this.datosEntrega.diferida
      this.datosEntrega.diferida = !this.datosEntrega.inmediata
      if (this.datosEntrega.diferida = false){this.datosEntrega.inmediata =true}
      
    };
 
      
    entregaInmediata(){
      this.datosEntrega.inmediata = true
      this.datosEntrega.diferida = false
      this.datosEntrega.diferida = !this.datosEntrega.inmediata
      this.datosEntrega.inmediata = !this.datosEntrega.diferida
      
   };

   datosEnvio(event:Event){
      event.preventDefault()
    console.log(this.nombreForm.value)


    //  this.datosEnvios = formEntrega.value;

    
this.datosEnvios.nombre = this.nombreForm.value
this.datosEnvios.cel = this.celForm.value
this.datosEnvios.direccion = this.direccionForm.value
this.datosEnvios.direccionNumero = this.direccionNumeroForm.value
this.datosEnvios.direccionPiso = this.direccionPisoForm.value
this.datosEnvios.direccionDpto = this.direccionDptoForm.value
this.datosEnvios.localidad = this.localidadForm.value
this.datosEnvios.diferida = this.datosEntrega.diferida
this.datosEnvios.inmediata = this.datosEntrega.inmediata
this.datosEnvios.direccion = this.datosEnvios.direccion 
this.datosEnvios.fechaDif = this.fechaForm.value
this.datosEnvios.horaDif = this.horaForm.value


  
    this.datosEntrega = this.datosEnvios

localStorage.setItem('datosEntrega', JSON.stringify(this.datosEntrega));
this.servicio.snackBar.open('','',{duration:300, horizontalPosition:'left', verticalPosition:'top',  panelClass: ['blue-snackbar']})

   };
   
   }
