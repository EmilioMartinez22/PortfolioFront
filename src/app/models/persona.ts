export class Persona {
    id?: number;
    nombre: string;
    imagenUrl: string;
    descripcion: string;
    email: string;
    telefono: number;

    constructor(nombre: string, imagenUrl:string, descripcion:string, email:string, telefono:number) {
        this.nombre = nombre;
        this.imagenUrl = imagenUrl;
        this.descripcion = descripcion;
        this.email = email;
        this.telefono = telefono;
    }
}