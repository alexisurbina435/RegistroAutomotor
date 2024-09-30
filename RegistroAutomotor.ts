import { Auto } from "./Autos";
import { Moto } from "./Motos";
import { Camion } from "./Camiones";

export class RegistroAutomotor{
    private nombre: string;
    private auto : Auto[];
    private moto : Moto[];
    private camion : Camion[];

    constructor(nombre: string, ListaDeAuto?: Auto[], ListaDeMoto?: Moto[], ListaDeCamion?: Camion[]){
        this.nombre = nombre;
        if(ListaDeAuto != undefined){
            this.auto = ListaDeAuto;
        }else{
            this.auto = [];
        }

        if(ListaDeMoto != undefined){
            this.moto = ListaDeMoto;
        }else{
            this.moto = [];
        }

        if(ListaDeCamion != undefined){
            this.camion = ListaDeCamion;
        }else{
            this.camion = [];
        }
    }

    getNombre(): string{
        return this.nombre;
    }

    agregarAuto(auto: Auto):void{
        this.auto.push(auto);
    }
    agregarMoto(moto:Moto):void{
        this.moto.push(moto);
    }
    agregarCamion(camion: Camion):void{
        this.camion.push(camion);
    }

    obetenerAuto(): Auto[]{
        return this.auto;
    }
    obetenerMoto(): Moto[]{
        return this.moto;
    }
    obetenerCamion(): Camion[]{
        return this.camion;
    }

}