
export class datosEntrega {

    constructor(nombre='' , cel='', direccion='',direccionNumero='', direccionPiso='', direccionDpto='', localidad='', 
    inmediata=true, diferida=false, fecha='', hora='', mp=false, idpago='', statusPago=''  ){
        
        
        this.nombre = nombre;
        this.cel = cel;
        this.direccion = direccion;        
        this.direccionNumero = direccionNumero;
        this.direccionPiso = direccionPiso;
        this.direccionDpto = direccionDpto;
        this.localidad = localidad;

        this.inmediata = inmediata;
        this.diferida = diferida;
        this.fecha = fecha;
        this.hora = hora;



        this.mp = mp;
        this.idpago = idpago;
        this.statusPago = statusPago;
        
    }   
    
    nombre: string;
    cel: string;
    direccion: string;
    direccionNumero: string;
    direccionPiso: string;
    direccionDpto: string;
    envio:string;
    localidad:string;

    inmediata:boolean;
    diferida:boolean;
    fechaDif:string;
    horaDif:string;
    fecha:string;
    hora:string;
    
    pedidos:any
    nombre2: string;
    descripcion: string;
    precio: number;
    _id:string;


    mp:boolean;
    idpago:string;
    statusPago:string;

    
}
