export class Projects{
    id: number;
    titulo: String ;
    descripcion: String ;
    ano: number; 

    constructor(id: number, titulo:String, descripcion:String, ano: number) { 
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.ano = ano
      }
}