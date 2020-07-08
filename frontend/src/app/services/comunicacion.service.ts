import { Injectable } from '@angular/core';
import { Subject, Observable } from '../../../node_modules/rxjs';
import * as io from 'socket.io-client' ;

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

socket :any;
server = "http://192.168.43.55:3001"

public mensaje:string;
public fondo:boolean;
public contadorItem:number;
public sum:number = -1 ;
private enviarContador = new Subject<number>();
public escucharContador = this.enviarContador.asObservable();
public dale:any


private enviarFondo = new Subject<boolean>();
public escucharFondo = this.enviarFondo.asObservable();

constructor(){

  //

  this.socket = io(this.server) //conexion IONIC

  
}

listen(eventName: String){

  return new Observable((Subscriber)=>{
    this.socket.on(eventName, (data)=>{
      Subscriber.next(data)
      
    })
  })
};

emit(eventName: String, data:any){
  this.socket.emit(eventName, data)
};


emitEstado(eventName: String, index: any, data:any){
  this.socket.emit(eventName, index, data)
};






contador(value:number){

  this.sum = value
 
 
  this.enviarContador.next(value)


};

enviaContadorNavbar(value:boolean){
    this.enviarFondo.next(value);  
    this.sum = this.sum + 1;
     this.enviarContador.next(this.sum);
 
};
  
  
};
