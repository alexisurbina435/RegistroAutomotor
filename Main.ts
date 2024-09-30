import { Auto } from "./Autos";
import { Moto } from "./Motos";
import { Camion } from "./Camiones";
import { RegistroAutomotor } from "./RegistroAutomotor";
//AUTOS
const Auto1 = new Auto(1111,"peugeot",'nafta','XDE234', 2002);
const Auto2 = new Auto(1122,"ford",'nafta','SDS412', 2005);
const Auto3 = new Auto(1133,"chevrolet",'gasolero','ASD612', 2010);
//MOTOS
const Moto1 = new Moto(1144,"hyundai",'nafta','XWE093', 2020);
const Moto2 = new Moto(1155,"honda",'nafta','DAS312', 2015);
const Moto3 = new Moto(1166,"kawasaki",'nafta','FGH512', 2010);
//CAMIONES
const Camion1 = new Camion(2244,"IVECO",'gasolero','EQS239', 2000);
const Camion2 = new Camion(2214,"MERCEDES BENZ",'gasolero','FAS524', 2018);
const Camion3 = new Camion(5512,"FIAT",'gasolero','GAS525', 2006);

const nombreRegistro = new RegistroAutomotor('Automotor Olavarria');

//AGREGANDO AUTO AL REGISTRO
nombreRegistro.agregarAuto(Auto1)
nombreRegistro.agregarAuto(Auto2)
nombreRegistro.agregarAuto(Auto3)
//AGREANDO MOTOS AL REGISTRO
nombreRegistro.agregarMoto(Moto1)
nombreRegistro.agregarMoto(Moto2)
nombreRegistro.agregarMoto(Moto3)
//AGREGANDO CAMIONES AL REGISTRO
nombreRegistro.agregarCamion(Camion1)
nombreRegistro.agregarCamion(Camion2)
nombreRegistro.agregarCamion(Camion3)

console.log("Autos en el registro:", nombreRegistro.obetenerAuto().map(auto => auto.getMarca()));
console.log("Motos en el registro:", nombreRegistro.obetenerMoto().map(moto => moto.getMarca()));
console.log("Camiones en el registro:", nombreRegistro.obetenerCamion().map(camion => camion.getMarca()));


