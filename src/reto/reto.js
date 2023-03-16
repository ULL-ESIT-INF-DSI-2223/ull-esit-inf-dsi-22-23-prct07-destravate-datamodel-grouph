"use strict";
exports.__esModule = true;
exports.Reto = void 0;
/**
 * @class Reto
 * @param id
 * @param nombre
 * @param rutasFormantes
 * @param tipo
 * @param kmTotales
 * @param UsuariosActivos
 * @param idCreador
 * @method GetId
 * @method GetNombre
 * @method GetRutasFormantes
 * @method GetTipo
 * @method GetKmTotales
 * @method GetUsuariosActivos
 * @method GetIdCreador
 */
var Reto = /** @class */ (function () {
    function Reto(id, nombre, rutasFormantes, tipo, kmTotales, UsuariosActivos, idCreador) {
        this.id = id;
        this.nombre = nombre;
        this.rutasFormantes = rutasFormantes;
        this.tipo = tipo;
        this.kmTotales = kmTotales;
        this.UsuariosActivos = UsuariosActivos;
        this.idCreador = idCreador;
    }
    /**
     * @method GetId
     */
    Reto.prototype.GetId = function () {
        return this.id;
    };
    /**
     * @method GetNombre
     */
    Reto.prototype.GetNombre = function () {
        return this.nombre;
    };
    /**
     * @method GetRutasFormantes
     */
    Reto.prototype.GetRutasFormantes = function () {
        return this.rutasFormantes;
    };
    /**
     * @method GetTipo
     */
    Reto.prototype.GetTipo = function () {
        return this.tipo;
    };
    /**
     * @method GetKmTotales
     */
    Reto.prototype.GetKmTotales = function () {
        return this.kmTotales;
    };
    /**
     * @method GetUsuariosActivos
     */
    Reto.prototype.GetUsuariosActivos = function () {
        return this.UsuariosActivos;
    };
    /**
     * @method GetIdCreador
     */
    Reto.prototype.GetIdCreador = function () {
        return this.idCreador;
    };
    return Reto;
}());
exports.Reto = Reto;
