export class Education{
    
    id: number;
    titulo: String ;
    institucion: String ;
    fecha_inicio: String ;
    fecha_fin: String ;
    certificacion: boolean ;

    constructor(id: number,titulo:String, institucion:String, fecha_inicio:String, fecha_fin:String, certificacion:boolean) { 
        this.id = id
        this.titulo = titulo
        this.institucion = institucion
        this.fecha_inicio = fecha_inicio
        this.fecha_fin = fecha_fin
        this.certificacion = certificacion
    }
}