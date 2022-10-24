export class NuevoUsuario {

    nombre: string;
    nombreusuario: string;
    email: string;
    password: string;

    constructor(nombre: string, nombreusuario: string, email: string, password: string) {
        this.nombre = nombre;
        this.nombreusuario = nombreusuario;
        this.email = email;
        this.password = password;
    }
}