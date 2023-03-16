"use strict";
exports.__esModule = true;
exports.Usuario = void 0;
/**
 * Clase Usuario
 * @param nombre Nombre del usuario
 * @param id Identificador del usuario
 * @param actividades Actividades del usuario (0 si es correr, 1 si es en bici, 2 si es en ambas)
 * @param amigos Amigos del usuario
 * @param grupos_amigos Grupos de amigos del usuario
 * @param estadisticas Estadisticas del usuario
 * @param rutas_favoritas Rutas favoritas del usuario
 * @param retos Retos del usuario
 * @param historicos Historicos del usuario
 * @method GetNombre
 * @method GetId
 * @method GetActividades
 * @method GetAmigos
 * @method GetGruposAmigos
 * @method GetEstadisticas
 * @method GetRutasFavoritas
 * @method GetRetos
 * @method GetHistoricos
 */
var Usuario = /** @class */ (function () {
    function Usuario(nombre, id, actividades, amigos, grupos_amigos, estadisticas, rutas_favoritas, retos, historicos) {
        this.nombre = nombre;
        this.id = id;
        this.actividades = actividades;
        this.amigos = amigos;
        this.grupos_amigos = grupos_amigos;
        this.estadisticas = estadisticas;
        this.rutas_favoritas = rutas_favoritas;
        this.retos = retos;
        this.historicos = historicos;
    }
    /**
     * Funcion que devuelve el nombre del usuario
     */
    Usuario.prototype.GetNombre = function () {
        return this.nombre;
    };
    /**
     *  Funcion que devuelve el id del usuario
    */
    Usuario.prototype.GetId = function () {
        return this.id;
    };
    /**
     * Funcion que devuelve las actividades del usuario
     */
    Usuario.prototype.GetActividades = function () {
        return this.actividades;
    };
    /**
     * Funcion que devuelve los amigos del usuario
     */
    Usuario.prototype.GetAmigos = function () {
        return this.amigos;
    };
    /**
     * Funcion que devuelve los grupos de amigos del usuario
     */
    Usuario.prototype.GetGruposAmigos = function () {
        return this.grupos_amigos;
    };
    /**
     * Funcion que devuelve las estadisticas del usuario
     */
    Usuario.prototype.GetEstadisticas = function () {
        return this.estadisticas;
    };
    /**
     * Funcion que devuelve las rutas favoritas del usuario
     */
    Usuario.prototype.GetRutasFavoritas = function () {
        return this.rutas_favoritas;
    };
    /**
     * Funcion que devuelve los retos del usuario
     */
    Usuario.prototype.GetRetos = function () {
        return this.retos;
    };
    /**
     * Funcion que devuelve los historicos del usuario
     */
    Usuario.prototype.GetHistoricos = function () {
        return this.historicos;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
