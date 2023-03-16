"use strict";
exports.__esModule = true;
exports.Grupo = void 0;
/**
 * @class Grupo
 * @description Clase que representa un grupo de amigos
 * @param id Identificador del grupo
 * @param nombre Nombre del grupo
 * @param miembrosGrupo Usuarios que pertenecen al grupo
 * @param estadisticas Estadísticas del grupo
 * @param clasificacionUsuarios Clasificación de los usuarios del grupo
 * @param RutasFavoritas Rutas favoritas del grupo
 * @param historicos Historial de actividades del grupo
 * @param idCreador Identificador del usuario que crea el grupo
 * @method GetId
 * @method GetNombre
 * @method GetMiembrosGrupo
 * @method GetEstadisticas
 * @method GetClasificacionUsuarios
 * @method GetRutasFavoritas
 * @method GetHistoricos
 * @method GetIdCreador
 */
var Grupo = /** @class */ (function () {
    function Grupo(id, nombre, miembrosGrupo, estadisticas, clasificacionUsuarios, RutasFavoritas, historicos, idCreador) {
        this.id = id;
        this.nombre = nombre;
        this.miembrosGrupo = miembrosGrupo;
        this.estadisticas = estadisticas;
        this.clasificacionUsuarios = clasificacionUsuarios;
        this.RutasFavoritas = RutasFavoritas;
        this.historicos = historicos;
        this.idCreador = idCreador;
    }
    /**
     * @method GetId
     */
    Grupo.prototype.GetId = function () {
        return this.id;
    };
    /**
     * @method GetNombre
     */
    Grupo.prototype.GetNombre = function () {
        return this.nombre;
    };
    /**
     * @method GetMiembrosGrupo
     */
    Grupo.prototype.GetMiembrosGrupo = function () {
        return this.miembrosGrupo;
    };
    /**
     * @method GetEstadisticas
     */
    Grupo.prototype.GetEstadisticas = function () {
        return this.estadisticas;
    };
    /**
     * @method GetClasificacionUsuarios
     */
    Grupo.prototype.GetClasificacionUsuarios = function () {
        return this.clasificacionUsuarios;
    };
    /**
     * @method GetRutasFavoritas
     */
    Grupo.prototype.GetRutasFavoritas = function () {
        return this.RutasFavoritas;
    };
    /**
     * @method GetHistoricos
     */
    Grupo.prototype.GetHistoricos = function () {
        return this.historicos;
    };
    /**
     * @method GetIdCreador
     */
    Grupo.prototype.GetIdCreador = function () {
        return this.idCreador;
    };
    return Grupo;
}());
exports.Grupo = Grupo;
