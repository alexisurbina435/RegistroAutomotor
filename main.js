"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Autos_1 = require("./Autos");
var Motos_1 = require("./Motos");
var Camiones_1 = require("./Camiones");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
//AUTOS
var Auto1 = new Autos_1.Auto("peugeot", 'nafta', 'XDE234', 2002);
var Auto2 = new Autos_1.Auto("ford", 'nafta', 'SDS412', 2005);
var Auto3 = new Autos_1.Auto("chevrolet", 'gasolero', 'ASD612', 2010);
//MOTOS
var Moto1 = new Motos_1.Moto("hyundai", 'nafta', 'XWE093', 2020);
var Moto2 = new Motos_1.Moto("honda", 'nafta', 'DAS312', 2015);
var Moto3 = new Motos_1.Moto("kawasaki", 'nafta', 'FGH512', 2010);
//CAMIONES
var Camion1 = new Camiones_1.Camion("IVECO", 'gasolero', 'EQS239', 2000);
var Camion2 = new Camiones_1.Camion("MERCEDES BENZ", 'gasolero', 'FAS524', 2018);
var Camion3 = new Camiones_1.Camion("FIAT", 'gasolero', 'GAS525', 2006);
var nombreRegistro = new RegistroAutomotor_1.RegistroAutomotor('Automotor Olavarria');
//AGREGANDO AUTO AL REGISTRO
nombreRegistro.agregarAuto(Auto1);
nombreRegistro.agregarAuto(Auto2);
nombreRegistro.agregarAuto(Auto3);
//AGREANDO MOTOS AL REGISTRO
nombreRegistro.agregarMoto(Moto1);
nombreRegistro.agregarMoto(Moto2);
nombreRegistro.agregarMoto(Moto3);
//AGREGANDO CAMIONES AL REGISTRO
nombreRegistro.agregarCamion(Camion1);
nombreRegistro.agregarCamion(Camion2);
nombreRegistro.agregarCamion(Camion3);
console.log("Autos en el registro:", nombreRegistro.obetenerAuto().map(function (auto) { return auto.getMarca(); }));
console.log("Motos en el registro:", nombreRegistro.obetenerMoto().map(function (moto) { return moto.getMarca(); }));
console.log("Camiones en el registro:", nombreRegistro.obetenerCamion().map(function (camion) { return camion.getMarca(); }));
