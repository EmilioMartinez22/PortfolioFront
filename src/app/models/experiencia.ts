export class Experiencia {
    id?: number;
    empresa: string;
    descripcion: string;
    imagenUrl: string;
    entrada: number;
    salida: number;

    constructor(empresa: string, descripcion:string, imagenUrl:string, entrada:number, salida:number) {
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.imagenUrl = imagenUrl;
        this.entrada = entrada;
        this.salida = salida;
    }
}