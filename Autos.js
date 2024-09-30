"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, tipo, patente, anio) {
        this.marca = marca;
        this.tipo = tipo;
        this.patente = patente,
            this.anio = anio;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getTipo = function () {
        return this.tipo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    return Auto;
}());
exports.Auto = Auto;
