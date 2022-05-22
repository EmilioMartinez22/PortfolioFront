export class Educacion {
    id?: number;
    institucion: string;
    descripcion: string;
    imagenUrl: string;
    entrada: number;
    salida: number;

    constructor(institucion: string, descripcion:string, imagenUrl:string, entrada:number, salida:number) {
        this.institucion = institucion;
        this.descripcion = descripcion;
        this.imagenUrl = imagenUrl;
        this.entrada = entrada;
        this.salida = salida;
    }
}