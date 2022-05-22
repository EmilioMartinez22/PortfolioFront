export class Proyecto {
    id?: number;
    institucion: string;
    descripcion: string;
    imagenUrl: string;
    anio: number;

    constructor(institucion: string, descripcion:string, imagenUrl:string, anio:number) {
        this.institucion = institucion;
        this.descripcion = descripcion;
        this.imagenUrl = imagenUrl;
        this.anio = anio;
}
}