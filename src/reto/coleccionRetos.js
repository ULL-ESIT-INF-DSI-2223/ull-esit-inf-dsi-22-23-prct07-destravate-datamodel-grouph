"use strict";
exports.__esModule = true;
exports.ColeccionRetos = void 0;
/**
 * Clase que representa una colección de retos
 * @class ColeccionRetos
 * @method getInstance
 * @method getRetos
 * @method addReto
 * @method deleteReto
 * @method getReto
 * @method getNumeroRetos
 * @method getRetoPorNombre
 * @method getRetosPorIndice
 * @method ordenarRetosPorNombreAlfabetico
 * @method ordenarRetosPorDistanciaRecorrida
 * @method ordenarRetosPorCantidadDeUsuarios
 */
var ColeccionRetos = /** @class */ (function () {
    function ColeccionRetos() {
        ColeccionRetos.retos = [];
    }
    /**
     * Método que devuelve una instancia de la clase ColeccionRetos
     * @method getInstance
     * @returns ColeccionRetos
     */
    ColeccionRetos.getInstance = function () {
        if (!ColeccionRetos.ColeccionRetos) {
            ColeccionRetos.ColeccionRetos = new ColeccionRetos();
        }
        return ColeccionRetos.ColeccionRetos;
    };
    /**
     * Método que devuelve un array de retos
     * @method getRetos
     * @returns Reto[]
     */
    ColeccionRetos.prototype.getRetos = function () {
        return ColeccionRetos.retos;
    };
    /**
     * Método que añade un reto al array de retos
     * @method addReto
     * @param reto
     * @returns void
     */
    ColeccionRetos.prototype.addReto = function (reto_entrada) {
        //Comrpobar que no existe un reto con el mismo id
        if (ColeccionRetos.retos.find(function (Retos) { return reto_entrada.GetId() === Retos.GetId(); })) {
            return undefined;
        }
        ColeccionRetos.retos.push(reto_entrada);
        return reto_entrada;
    };
    /**
     * Método que elimina un reto del array de retos
     * @method deleteReto
     * @param indice
     * @returns void
     */
    ColeccionRetos.prototype.deleteReto = function (indice) {
        if (indice < 0 || indice >= ColeccionRetos.retos.length) {
            return;
        }
        ColeccionRetos.retos.splice(indice, 1);
    };
    /**
     * Método que devuelve un reto a partir de su id
     * @method getReto
     * @param id
     * @returns Reto | undefined
     */
    ColeccionRetos.prototype.getReto = function (id) {
        var reto = ColeccionRetos.retos.find(function (Retos) { return Retos.GetId() === id; });
        return reto;
    };
    /**
     * Método que devuelve el numero de retos
     * @method getNumeroRetos
     * @returns number
    */
    ColeccionRetos.prototype.getNumeroRetos = function () {
        return ColeccionRetos.retos.length;
    };
    /**
     * Método que devuelve un reto a partir de su nombre
     * @method getRetoPorNombre
     * @param nombre
     * @returns Reto | undefined
     */
    ColeccionRetos.prototype.getRetoPorNombre = function (nombre) {
        var reto = ColeccionRetos.retos.find(function (Retos) { return Retos.GetNombre() === nombre; });
        return reto;
    };
    /**
     * Método que devuelve un array de retos a partir de su indice
     * @method getRetosPorIndice
     * @param indice
     * @returns Reto | undefined
     */
    ColeccionRetos.prototype.getRetosPorIndice = function (indice) {
        if (indice < 0 || indice >= ColeccionRetos.retos.length) {
            return undefined;
        }
        return ColeccionRetos.retos[indice];
    };
    /**
     * Método que ordena el array de retos alfabéticamente, de forma ascendente o descendente según el parámetro
      * @method ordenarRetosPorNombreAlfabetico
      * @param ascendente
      * @returns void
      */
    ColeccionRetos.prototype.ordenarRetosPorNombreAlfabetico = function (ascendente) {
        if (ascendente) {
            ColeccionRetos.retos.sort(function (a, b) { return a.GetNombre().localeCompare(b.GetNombre()); });
        }
        else {
            ColeccionRetos.retos.sort(function (a, b) { return b.GetNombre().localeCompare(a.GetNombre()); });
        }
    };
    /**
     * Método que ordena el array de retos por distancia recorrida, de forma ascendente o descendente según el parámetro
     * @method ordenarRetosPorDistanciaRecorrida
     * @param ascendente
     * @param periodo
     * @returns void
     */
    ColeccionRetos.prototype.ordenarRetosPorDistanciaRecorrida = function (ascendente) {
        if (ascendente) {
            ColeccionRetos.retos.sort(function (a, b) { return a.GetKmTotales() - b.GetKmTotales(); });
        }
        else {
            ColeccionRetos.retos.sort(function (a, b) { return b.GetKmTotales() - a.GetKmTotales(); });
        }
    };
    /**
     * Método que ordena el array de retos por cantidad de usuarios, de forma ascendente o descendente según el parámetro
     * @method ordenarRetosPorCantidadDeUsuarios
     * @param ascendente
     * @returns void
    */
    ColeccionRetos.prototype.ordenarRetosPorCantidadDeUsuarios = function (ascendente) {
        if (ascendente) {
            ColeccionRetos.retos.sort(function (a, b) { return a.GetUsuariosActivos().length - b.GetUsuariosActivos().length; });
        }
        else {
            ColeccionRetos.retos.sort(function (a, b) { return b.GetUsuariosActivos().length - a.GetUsuariosActivos().length; });
        }
    };
    ColeccionRetos.retos = [];
    return ColeccionRetos;
}());
exports.ColeccionRetos = ColeccionRetos;
