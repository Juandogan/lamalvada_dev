import { Pipe, PipeTransform } from '@angular/core';




@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {
  
  transform(value:any[]=[], arg:any): any {
    
    if(arg ==='' || arg.length < 0 ) return value;
     
    const resultPost =[];
    
    var todo:string;
    

    for(const productos of value){
      var todo:string = productos._id + productos.categoria ;

        if(todo.indexOf(arg) >-1 ){
          resultPost.push(productos);
       

        
            
          
        
    };
    
  };  

    
       
 
  
  return resultPost; 


  }
  

}
