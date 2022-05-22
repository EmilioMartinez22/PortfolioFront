export class Skill {
    id?: number;
    nombre: string;
    porcentaje: number;
    imagenUrl: string;
    
   

    constructor(nombre: string, porcentaje:number, imagenUrl:string) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.imagenUrl = imagenUrl;
}
}