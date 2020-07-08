import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../../services/comunicacion.service';
import { datosEntrega } from '../../models/datosEntrega';
import { pedidos } from '../../models/pedidos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comprasfin',
  templateUrl: './comprasfin.component.html',
  styleUrls: ['./comprasfin.component.css']
})
export class ComprasfinComponent implements OnInit {

  public datosEnvio:pedidos
  public datosPedido:datosEntrega
  public pedidoFront:any
  public idCompraMercadoPago:any
  public idCompraMercadoPago2:any
  public estadoCompraMercadoPago:any
  public medioPagoMercadoPago:any
  
  constructor(public service:ComunicacionService,  private router: Router) {

    var urlTree = this.router.parseUrl(this.router.url);
    this.idCompraMercadoPago = urlTree.queryParams['collection_id'];
    this.idCompraMercadoPago2 = urlTree.queryParams['merchant_order_id'];
    this.estadoCompraMercadoPago = urlTree.queryParams['collection_status'];
    this.medioPagoMercadoPago = urlTree.queryParams['payment_type'];
    
   }



  ngOnInit(): void {


this.datosPedido = this.pedirStorage('pedidos')
this.datosEnvio = this.pedirStorage('datosEntrega') 
this.datosPedido.idpago = this.idCompraMercadoPago
this.datosPedido.mp = true
this.datosPedido.statusPago = this.estadoCompraMercadoPago


var arregloUnido = Object.assign({},this.datosEnvio, this.datosPedido);


this.service.emit('send-message', (arregloUnido))


  }


  

  pedirStorage(value){

    return JSON.parse(localStorage.getItem(value));

    

  
  
  }


  
    
}
