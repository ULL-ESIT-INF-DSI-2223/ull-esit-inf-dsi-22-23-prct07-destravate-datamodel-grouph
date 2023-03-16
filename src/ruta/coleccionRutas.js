"use strict";
exports.__esModule = true;
exports.ColeccionRutas = void 0;
/**
 * Clase que representa una colección de rutas
 * @class ColeccionRutas
 * @method getRutas: devuelve un array de rutas
 * @method addRuta: añade una ruta al array de rutas
 * @method getRuta: devuelve una ruta a partir de su id
 * @method getNumeroRutas: devuelve el número de rutas
 * @method getRutaPorNombre: devuelve una ruta a partir de su nombre
 * @method getItem: devuelve una ruta a partir de su índice
 */
var ColeccionRutas = /** @class */ (function () {
    function ColeccionRutas() {
        ColeccionRutas.rutas = [];
    }
    /**
     * Método que devuelve una instancia de la clase ColeccionRutas
     * @method getInstance
     * @returns ColeccionRutas
     */
    ColeccionRutas.getInstance = function () {
        if (!ColeccionRutas.ColeccionRutas) {
            ColeccionRutas.ColeccionRutas = new ColeccionRutas();
        }
        return ColeccionRutas.ColeccionRutas;
    };
    /**
     * Método que devuelve un array de rutas
     * @method getRutas
     * @returns Ruta[]
     */
    ColeccionRutas.prototype.getRutas = function () {
        return ColeccionRutas.rutas;
    };
    /**
     * Método que añade una ruta al arraColeccion.
     * @method addRuta
     * @param ruta
     * @returns void
     */
    ColeccionRutas.prototype.addRuta = function (ruta_entrada) {
        // Se comprueba que el id no existe
        if (ColeccionRutas.rutas.find(function (ruta) { return ruta_entrada.GetId() === ruta.GetId(); })) {
            return undefined;
        }
        ColeccionRutas.rutas.push(ruta_entrada);
        return ruta_entrada;
    };
    /**
     * Método que elimina una ruta del arraColeccion.
     * @method deleteRuta
     * @param indice
     * @returns void
     */
    ColeccionRutas.prototype.deleteRuta = function (indice) {
        if (indice < 0 || indice >= ColeccionRutas.rutas.length) {
            return;
        }
        ColeccionRutas.rutas.splice(indice, 1);
    };
    /**
     * Método que devuelve una ruta a partir de su id
     * @method getRuta
     * @param id
     * @returns Ruta | undefined
    */
    ColeccionRutas.prototype.getRuta = function (id) {
        var ruta = ColeccionRutas.rutas.find(function (ruta) { return ruta.GetId() === id; });
        return ruta;
    };
    /**
     * Método que devuelve el número de rutas
     * @method getNumeroRutas
     * @returns number
     */
    ColeccionRutas.prototype.getNumeroRutas = function () {
        return ColeccionRutas.rutas.length;
    };
    /**
     * Método que devuelve una ruta a partir de su nombre
     * @method getRutaPorNombre
     * @param nombre
     * @returns Ruta | undefined
     */
    ColeccionRutas.prototype.getRutaPorNombre = function (nombre) {
        var ruta = ColeccionRutas.rutas.find(function (ruta) { return ruta.GetNombre() === nombre; });
        return ruta;
    };
    /**
     * Método que devuelve una ruta a partir de su índice
     * @method getItem
     * @param indice
     * @returns Ruta | undefined
     */
    ColeccionRutas.prototype.getItem = function (indice) {
        if (indice < 0 || indice >= ColeccionRutas.rutas.length) {
            return undefined;
        }
        return ColeccionRutas.rutas[indice];
    };
    /**
     * Método que ordenaColeccion. por nombre alfabéticamente, que dado un parámetro de entrada ordena ascendentemente o descendentemente
     * @method ordenarRutasPorNombreAlfabetico
     * @param ascendente
     * @returns void
    */
    ColeccionRutas.prototype.ordenarRutasPorNombreAlfabetico = function (ascendente) {
        if (ascendente) {
            ColeccionRutas.rutas.sort(function (a, b) { return a.GetNombre().localeCompare(b.GetNombre()); });
        }
        else {
            ColeccionRutas.rutas.sort(function (a, b) { return b.GetNombre().localeCompare(a.GetNombre()); });
        }
    };
    /**
     * Método que ordena las rutas por cantidad de usuarios, que dado un parámetro de entrada ordena ascendentemente o descendentemente
     * @method ordenarRutasPorCantidadUsuarios
     * @returns void
     */
    ColeccionRutas.prototype.ordenarRutasPorCantidadUsuarios = function (ascendente) {
        if (ascendente) {
            ColeccionRutas.rutas.sort(function (a, b) { return a.GetUsuarios().length - b.GetUsuarios().length; });
        }
        else {
            ColeccionRutas.rutas.sort(function (a, b) { return b.GetUsuarios().length - a.GetUsuarios().length; });
        }
    };
    /**
     * Método que ordena las rutas por distancia, que dado un parámetro de entrada ordena ascendentemente o descendentemente
     * @method ordenarRutasPorDistancia
     * @returns void
     */
    ColeccionRutas.prototype.ordenarRutasPorDistancia = function (ascendente) {
        if (ascendente) {
            ColeccionRutas.rutas.sort(function (a, b) { return a.GetLongitud() - b.GetLongitud(); });
        }
        else {
            ColeccionRutas.rutas.sort(function (a, b) { return b.GetLongitud() - a.GetLongitud(); });
        }
    };
    /**
     * Método que ordena las calificaciones medias de la ruta, que dado un parámetro de entrada ordena ascendentemente o descendentemente
     * @method ordenarRutasPorCalificacionMedia
     * @returns void
    */
    ColeccionRutas.prototype.ordenarRutasPorCalificacionMedia = function (ascendente) {
        if (ascendente) {
            ColeccionRutas.rutas.sort(function (a, b) { return a.GetCalificacion() - b.GetCalificacion(); });
        }
        else {
            ColeccionRutas.rutas.sort(function (a, b) { return b.GetCalificacion() - a.GetCalificacion(); });
        }
    };
    /**
     * Método que ordena las rutas por actividad, que dado un parámetro de entrada ordena ascendentemente o descendentemente
     * @method ordenarRutasPorActividad
     * @returns void
    */
    ColeccionRutas.prototype.ordenarRutasPorActividad = function (ascendente) {
        if (ascendente) {
            ColeccionRutas.rutas.sort(function (a, b) { return a.GetActividad() - b.GetActividad(); });
        }
        else {
            ColeccionRutas.rutas.sort(function (a, b) { return b.GetActividad() - a.GetActividad(); });
        }
    };
    ColeccionRutas.rutas = [];
    return ColeccionRutas;
}());
exports.ColeccionRutas = ColeccionRutas;
