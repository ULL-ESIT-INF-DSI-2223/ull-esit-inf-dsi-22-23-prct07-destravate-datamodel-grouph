"use strict";
exports.__esModule = true;
exports.ColeccionGrupos = void 0;
/**
 * Clase que contiene los grupos
 * @class ColeccionGrupos
 * @method getInstance
 * @method getGrupos
 * @method addGrupo
 * @method deleteGrupo
 * @method getGrupo
 * @method getNumeroGrupos
 * @method getGrupoPorNombre
 * @method getItem
 * @method ordenarGruposPorNombreAlfabetico
 * @method ordenarGruposPorDistanciaRecorrida
 * @method ordenarGruposPorCantidadDeIntegrantes
 */
var ColeccionGrupos = /** @class */ (function () {
    function ColeccionGrupos() {
        ColeccionGrupos.grupos = [];
    }
    /**
     * Método que devuelve una instancia de la clase ColeccionGrupos
     * @method getInstance
     * @returns ColeccionGrupos
     */
    ColeccionGrupos.getInstance = function () {
        if (!ColeccionGrupos.colecionGrupos) {
            ColeccionGrupos.colecionGrupos = new ColeccionGrupos();
        }
        return ColeccionGrupos.colecionGrupos;
    };
    /**
     * Método que devuelve un array de grupos
     * @method getGrupos
     * @returns Grupo[]
     */
    ColeccionGrupos.prototype.getGrupos = function () {
        return ColeccionGrupos.grupos;
    };
    /**
     * Método que añade un grupo al array de grupos
     * @method addGrupo
     * @param grupo
     * @returns void
     */
    ColeccionGrupos.prototype.addGrupo = function (grupo) {
        ColeccionGrupos.grupos.push(grupo);
    };
    /**
     * Método que elimina un grupo del array de grupos
     * @method deleteGrupo
     * @param indice
     * @returns void
     */
    ColeccionGrupos.prototype.deleteGrupo = function (indice) {
        if (indice < 0 || indice >= ColeccionGrupos.grupos.length) {
            return;
        }
        ColeccionGrupos.grupos.splice(indice, 1);
    };
    /**
     * Método que devuelve un grupo
     * @method getGrupo
     * @param id
     * @returns Grupo | undefined
     */
    ColeccionGrupos.prototype.getGrupo = function (id) {
        return ColeccionGrupos.grupos.find(function (grupo) { return grupo.GetId() === id; });
    };
    /**
     * Método que devuelve el número de grupos
     * @method getNumeroGrupos
     * @returns number
     */
    ColeccionGrupos.prototype.getNumeroGrupos = function () {
        return ColeccionGrupos.grupos.length;
    };
    /**
     * Método que devuelve un grupo
     * @method getGrupoPorNombre
     * @param nombre
     * @returns Grupo | undefined
     */
    ColeccionGrupos.prototype.getGrupoPorNombre = function (nombre) {
        return ColeccionGrupos.grupos.find(function (grupo) { return grupo.GetNombre() === nombre; });
    };
    /**
     * Método que devuelve un grupo
     * @method getItem
     * @param index
     * @returns Grupo
     */
    ColeccionGrupos.prototype.getItem = function (index) {
        return ColeccionGrupos.grupos[index];
    };
    /**
     * Método que ordena los grupos por nombre alfabéticamente
     * @method ordenarGruposPorNombreAlfabetico
     * @param ascendente
     * @returns void
     */
    ColeccionGrupos.prototype.ordenarGruposPorNombreAlfabetico = function (ascendente) {
        if (ascendente) {
            ColeccionGrupos.grupos.sort(function (a, b) { return a.GetNombre().localeCompare(b.GetNombre()); });
        }
        else {
            ColeccionGrupos.grupos.sort(function (a, b) { return b.GetNombre().localeCompare(a.GetNombre()); });
        }
    };
    /**
     * Método que ordena los grupos por distancia recorrida
     * @method ordenarGruposPorDistanciaRecorrida
     * @param ascendente
     * @param periodo
     */
    ColeccionGrupos.prototype.ordenarGruposPorDistanciaRecorrida = function (ascendente, periodo) {
        if (!ascendente) {
            switch (periodo) {
                case 0:
                    ColeccionGrupos.grupos.sort(function (a, b) { return a.GetEstadisticas()[0][a.GetEstadisticas()[0].length - 1] - b.GetEstadisticas()[0][a.GetEstadisticas()[0].length - 1]; });
                    break;
                case 1:
                    ColeccionGrupos.grupos.sort(function (a, b) { return a.GetEstadisticas()[1][a.GetEstadisticas()[0].length - 1] - b.GetEstadisticas()[1][a.GetEstadisticas()[0].length - 1]; });
                    break;
                case 2:
                    ColeccionGrupos.grupos.sort(function (a, b) { return a.GetEstadisticas()[2][a.GetEstadisticas()[0].length - 1] - b.GetEstadisticas()[2][a.GetEstadisticas()[0].length - 1]; });
                    break;
            }
        }
        else {
            switch (periodo) {
                case 0:
                    ColeccionGrupos.grupos.sort(function (a, b) { return b.GetEstadisticas()[0][a.GetEstadisticas()[0].length - 1] - a.GetEstadisticas()[0][a.GetEstadisticas()[0].length - 1]; });
                    break;
                case 1:
                    ColeccionGrupos.grupos.sort(function (a, b) { return b.GetEstadisticas()[1][a.GetEstadisticas()[0].length - 1] - a.GetEstadisticas()[1][a.GetEstadisticas()[0].length - 1]; });
                    break;
                case 2:
                    ColeccionGrupos.grupos.sort(function (a, b) { return b.GetEstadisticas()[2][a.GetEstadisticas()[0].length - 1] - a.GetEstadisticas()[2][a.GetEstadisticas()[0].length - 1]; });
                    break;
            }
        }
    };
    /**
     * Método que ordena los grupos por cantidad de integrantes
     * @method ordenarGruposPorCantidadDeIntegrantes
     * @param ascendente
     * @returns void
     */
    ColeccionGrupos.prototype.ordenarGruposPorCantidadDeIntegrantes = function (ascendente) {
        if (ascendente) {
            ColeccionGrupos.grupos.sort(function (a, b) { return a.GetMiembrosGrupo().length - b.GetMiembrosGrupo().length; });
        }
        else {
            ColeccionGrupos.grupos.sort(function (a, b) { return b.GetMiembrosGrupo().length - a.GetMiembrosGrupo().length; });
        }
    };
    ColeccionGrupos.grupos = [];
    return ColeccionGrupos;
}());
exports.ColeccionGrupos = ColeccionGrupos;
