"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(marca, tipo, patente, anio) {
        this.marca = marca;
        this.tipo = tipo;
        this.patente = patente,
            this.anio = anio;
    }
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.getTipo = function () {
        return this.tipo;
    };
    Moto.prototype.getPatente = function () {
        return this.patente;
    };
    Moto.prototype.getAnio = function () {
        return this.anio;
    };
    return Moto;
}());
exports.Moto = Moto;
