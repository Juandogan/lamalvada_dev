import { Component, OnInit } from '@angular/core';
import { ProductosService} from '../../services/productos.service';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[ProductosService]
  
})
export class NavbarComponent implements OnInit {

  public estadoCarrito:boolean = true; //estado carrito imagen abierto o cerrado (Invertir true)
  public contador:number;
      
  constructor(public productosService:ProductosService, public comunicacionService:ComunicacionService) {}

  ngOnInit() {

    this.stateCarrito() // trae el estado del carrito es un observable!
    this.iniciaCarrito()//trae valor del contador items carrito del LocalStorage          

              };


              // se susbcribe al obsevable para detectar cambios en el estado del carrito IMAGEN y CONTADOR. - 
  stateCarrito(){

         this.comunicacionService.escucharFondo.subscribe(res => {this.estadoCarrito = res})
         this.comunicacionService.escucharContador.subscribe(res => {this.contador = res})

        };


        // refresca el contador del carrito al recargar o iniciar la pagina.
  iniciaCarrito(){      

                  let data:any[]=[]
                  data = this.productosService.pedirStorage()
                  if (data === null ){} else{
                  if (data.length === 0){this.comunicacionService.enviaContadorNavbar(true)}
                  else {this.comunicacionService.enviaContadorNavbar(false)}};}
                
                 };