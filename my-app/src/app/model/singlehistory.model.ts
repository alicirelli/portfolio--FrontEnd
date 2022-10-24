export class Singlehistory{
  
    id: number;
    puesto: string ;
    empresa: string ;
    fecha_inicio: string ;
    fecha_fin: string ;
    descripcion: string ;

    constructor(id:number, puesto:string, empresa:string, fecha_inicio:string, fecha_fin:string, descripcion:string) { 
        this.id = id
        this.puesto = puesto
        this.empresa = empresa
        this.fecha_inicio = fecha_inicio
        this.fecha_fin = fecha_fin
        this.descripcion = descripcion
      }
}