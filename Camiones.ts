export class Camion{
    private id : number;
    private marca: string;
    private tipo: string;
    private patente:string;
    private anio: number;

    constructor(id:number,marca:string, tipo: string, patente:string, anio:number){
        this.id = id;
        this.marca = marca;
        this.tipo = tipo;
        this.patente = patente,
        this.anio = anio;
    }
    getId():number{
        return this.id;
    }
    getMarca(): string{
        return this.marca;
    }

    getTipo(): string{
        return this.tipo;
    }

    getPatente(): string{
        return this.patente;
    }

    getAnio(): number{
        return this.anio;
    }
}