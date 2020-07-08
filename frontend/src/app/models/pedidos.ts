
export class pedidos {

    constructor(nombre='', descripcion='', precio=0, _id='', estado='new'){
        
        this._id = _id
        this.nombre = nombre;
        this.descripcion = descripcion
        this.precio = precio
        this.estado = estado
        
  
    
 

    }
    nombre: string;
    descripcion: string;
    precio: number;
    estado: string;
    
    _id:string;
}
    