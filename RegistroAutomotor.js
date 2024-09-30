"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombre, ListaDeAuto, ListaDeMoto, ListaDeCamion) {
        this.nombre = nombre;
        if (ListaDeAuto != undefined) {
            this.auto = ListaDeAuto;
        }
        else {
            this.auto = [];
        }
        if (ListaDeMoto != undefined) {
            this.moto = ListaDeMoto;
        }
        else {
            this.moto = [];
        }
        if (ListaDeCamion != undefined) {
            this.camion = ListaDeCamion;
        }
        else {
            this.camion = [];
        }
    }
    RegistroAutomotor.prototype.getNombre = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.agregarAuto = function (auto) {
        this.auto.push(auto);
    };
    RegistroAutomotor.prototype.agregarMoto = function (moto) {
        this.moto.push(moto);
    };
    RegistroAutomotor.prototype.agregarCamion = function (camion) {
        this.camion.push(camion);
    };
    RegistroAutomotor.prototype.obetenerAuto = function () {
        return this.auto;
    };
    RegistroAutomotor.prototype.obetenerMoto = function () {
        return this.moto;
    };
    RegistroAutomotor.prototype.obetenerCamion = function () {
        return this.camion;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
