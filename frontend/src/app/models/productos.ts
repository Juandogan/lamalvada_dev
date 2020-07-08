export class Productos {

    constructor(_id ='', nombre='' , descripcion='', imagen='', precio='', cantidad=0,categoria='', total=0){
        
        
        this.nombre = nombre;
        this._id =_id;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.total = total;
    
    }
    _id: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: string;
    categoria: string;
    cantidad:number;
    total:number;

}


