"use strict";
exports.__esModule = true;
exports.Ruta = void 0;
/**
 * @class Rutas
 * @description Clase que representa una ruta
 * @param id Identificador de la ruta
 * @param nombre Nombre de la ruta
 * @param geo_ini Coordenadas de inicio de la ruta
 * @param geo_fin Coordenadas de fin de la ruta
 * @param longitud Longitud de la ruta
 * @param desnivel Desnivel de la ruta
 * @param usuarios Usuarios que han realizado la ruta
 * @param actividad Estado de la ruta
 * @param calificacion Calificación de la ruta
 * @param idCreador Identificador del usuario que crea la ruta
 * @method GetId
 * @method GetNombre
 * @method GetGeoIni
 * @method GetGeoFin
 * @method GetLongitud
 * @method GetDesnivel
 * @method GetUsuarios
 * @method GetActividad
 * @method GetCalificacion
 * @method GetIdCreador
 */
var Ruta = /** @class */ (function () {
    function Ruta(id, nombre, geo_ini, geo_fin, longitud, desnivel, usuarios, actividad, calificacion, idCreador) {
        this.id = id;
        this.nombre = nombre;
        this.geo_ini = geo_ini;
        this.geo_fin = geo_fin;
        this.longitud = longitud;
        this.desnivel = desnivel;
        this.usuarios = usuarios;
        this.actividad = actividad;
        this.calificacion = calificacion;
        this.idCreador = idCreador;
    }
    /**
     * @method GetId
     */
    Ruta.prototype.GetId = function () {
        return this.id;
    };
    /**
   * @method GetNombre
   */
    Ruta.prototype.GetNombre = function () {
        return this.nombre;
    };
    /**
     * @method GetGeoIni
      */
    Ruta.prototype.GetGeoIni = function () {
        return this.geo_ini;
    };
    /**
     * @method GetGeoFin
     */
    Ruta.prototype.GetGeoFin = function () {
        return this.geo_fin;
    };
    /**
     * @method GetLongitud
     */
    Ruta.prototype.GetLongitud = function () {
        return this.longitud;
    };
    /**
     * @method GetDesnivel
     */
    Ruta.prototype.GetDesnivel = function () {
        return this.desnivel;
    };
    /**
    * @method GetUsuarios
    */
    Ruta.prototype.GetUsuarios = function () {
        return this.usuarios;
    };
    /**
     * @method GetActividad
     */
    Ruta.prototype.GetActividad = function () {
        return this.actividad;
    };
    /**
     * @method GetCalificacion
     */
    Ruta.prototype.GetCalificacion = function () {
        return this.calificacion;
    };
    /**
     * @method GetIdCreador
     */
    Ruta.prototype.GetIdCreador = function () {
        return this.idCreador;
    };
    return Ruta;
}());
exports.Ruta = Ruta;
