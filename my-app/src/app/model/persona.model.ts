export class Persona{

    id: number ;
    nombre: string ;
    apellido: string;
    profesion:string;
    banner: string;
    imagen:string;


    constructor(id: number, nombre:string, apellido:string, profesion:string, banner:string, imagen:string) { 
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.profesion = profesion
        this.banner = banner
        this.imagen = imagen
      }
}