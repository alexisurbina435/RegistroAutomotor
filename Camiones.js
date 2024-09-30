"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    function Camion(marca, tipo, patente, anio) {
        this.marca = marca;
        this.tipo = tipo;
        this.patente = patente,
            this.anio = anio;
    }
    Camion.prototype.getMarca = function () {
        return this.marca;
    };
    Camion.prototype.getTipo = function () {
        return this.tipo;
    };
    Camion.prototype.getPatente = function () {
        return this.patente;
    };
    Camion.prototype.getAnio = function () {
        return this.anio;
    };
    return Camion;
}());
exports.Camion = Camion;
