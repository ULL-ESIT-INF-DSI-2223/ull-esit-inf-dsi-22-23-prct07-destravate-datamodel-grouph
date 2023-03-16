"use strict";
exports.__esModule = true;
exports.ColeccionUsuarios = void 0;
/**
 * Clase que representa una colección de usuarios
 * @class ColeccionUsuarios
 * @method getInstance
 * @method getUsuarios: devuelve un array de usuarios
 * @method addUsuario: añade un usuario al array de usuarios
 * @method getUsuario: devuelve un usuario a partir de su id
 * @method getNumeroUsuarios: devuelve el número de usuarios
 * @method getUsuarioPorNombre: devuelve un usuario a partir de su nombre
 * @method getItem: devuelve un usuario a partir de su índice
 */
var ColeccionUsuarios = /** @class */ (function () {
    function ColeccionUsuarios() {
        ColeccionUsuarios.usuarios = [];
    }
    /**
     * Método que devuelve una instancia de la clase ColeccionUsuarios
     * @method getInstance
     * @returns ColeccionUsuarios
     */
    ColeccionUsuarios.getInstance = function () {
        if (!ColeccionUsuarios.ColeccionUsuarios) {
            ColeccionUsuarios.ColeccionUsuarios = new ColeccionUsuarios();
        }
        return ColeccionUsuarios.ColeccionUsuarios;
    };
    /**
     * Método que devuelve un array de usuarios
     * @method getUsuarios
     * @returns Usuario[]
    */
    ColeccionUsuarios.prototype.getUsuarios = function () {
        return ColeccionUsuarios.usuarios;
    };
    /**
     * Método que añade un usuario al array de usuarios
     * @method addUsuario
     * @param usuario
     * @returns void
     */
    ColeccionUsuarios.prototype.addUsuario = function (usuario_entrada) {
        //Comrpobar que no existe un usuario con el mismo id
        if (ColeccionUsuarios.usuarios.find(function (Usuarios) { return usuario_entrada.GetId() === Usuarios.GetId(); })) {
            return undefined;
        }
        ColeccionUsuarios.usuarios.push(usuario_entrada);
        return usuario_entrada;
    };
    /**
     * Método que elimina un usuario del array de usuarios
     * @method deleteUsuario
     * @param indice
     * @returns void
     */
    ColeccionUsuarios.prototype.deleteUsuario = function (indice) {
        if (indice < 0 || indice >= ColeccionUsuarios.usuarios.length) {
            return;
        }
        ColeccionUsuarios.usuarios.splice(indice, 1);
    };
    /**
     * Método que devuelve un usuario a partir de su id
     * @method getUsuario
     * @param id
     * @returns Usuario | undefined
     */
    ColeccionUsuarios.prototype.getUsuario = function (id) {
        var usuario = ColeccionUsuarios.usuarios.find(function (usuario) { return usuario.GetId() === id; });
        return usuario;
    };
    /**
     * Método que devuelve el número de usuarios
     * @method getNumeroUsuarios
     * @returns number
     */
    ColeccionUsuarios.prototype.getNumeroUsuarios = function () {
        return ColeccionUsuarios.usuarios.length;
    };
    /**
     * Método que devuelve un usuario a partir de su nombre
     * @method getUsuarioPorNombre
     * @param nombre
     * @returns Usuario | undefined
     */
    ColeccionUsuarios.prototype.getUsuarioPorNombre = function (nombre) {
        var usuario = ColeccionUsuarios.usuarios.find(function (usuario) { return usuario.GetNombre() === nombre; });
        return usuario;
    };
    /**
     * Método que devuelve un usuario a partir de su indice
     * @method getUsuarioPorIndice
     * @param indice
     * @returns Usuario | undefined
     */
    ColeccionUsuarios.prototype.getItem = function (indice) {
        if (indice < 0 || indice >= ColeccionUsuarios.usuarios.length) {
            return undefined;
        }
        return ColeccionUsuarios.usuarios[indice];
    };
    /**
     * Método que ordena el array de usuarios por nombre alfabéticamente, de forma ascendente o descendente según el parámetro
     * @method ordenarUsuariosPorNombreAlfabetico
     * @param ascendente
     * @returns void
     */
    ColeccionUsuarios.prototype.ordenarUsuariosPorNombreAlfabetico = function (ascendente) {
        if (ascendente) {
            ColeccionUsuarios.usuarios.sort(function (a, b) { return a.GetNombre().localeCompare(b.GetNombre()); });
        }
        else {
            ColeccionUsuarios.usuarios.sort(function (a, b) { return b.GetNombre().localeCompare(a.GetNombre()); });
        }
    };
    /**
     * Método que ordena el array de usuarios por distancia recorrida, de forma ascendente o descendente según 2 parámetros,
     * el primero indica si se ordena ascendente o descendente y el segundo indica si se ordena por la semana, el mes o el año
     * @method ordenarUsuariosPorDistanciaRecorrida
     * @param ascendente
     * @param periodo
     * @returns void
     */
    ColeccionUsuarios.prototype.ordenarUsuariosPorDistanciaRecorrida = function (ascendente, periodo) {
        if (!ascendente) {
            switch (periodo) {
                case 0:
                    ColeccionUsuarios.usuarios.sort(function (a, b) { return a.GetEstadisticas()[0][a.GetEstadisticas()[0].length - 1] - b.GetEstadisticas()[0][a.GetEstadisticas()[0].length - 1]; });
                    break;
                case 1:
                    ColeccionUsuarios.usuarios.sort(function (a, b) { return a.GetEstadisticas()[1][a.GetEstadisticas()[0].length - 1] - b.GetEstadisticas()[1][a.GetEstadisticas()[0].length - 1]; });
                    break;
                case 2:
                    ColeccionUsuarios.usuarios.sort(function (a, b) { return a.GetEstadisticas()[2][a.GetEstadisticas()[0].length - 1] - b.GetEstadisticas()[2][a.GetEstadisticas()[0].length - 1]; });
                    break;
            }
        }
        else {
            switch (periodo) {
                case 0:
                    ColeccionUsuarios.usuarios.sort(function (a, b) { return b.GetEstadisticas()[0][a.GetEstadisticas()[0].length - 1] - a.GetEstadisticas()[0][a.GetEstadisticas()[0].length - 1]; });
                    break;
                case 1:
                    ColeccionUsuarios.usuarios.sort(function (a, b) { return b.GetEstadisticas()[1][a.GetEstadisticas()[0].length - 1] - a.GetEstadisticas()[1][a.GetEstadisticas()[0].length - 1]; });
                    break;
                case 2:
                    ColeccionUsuarios.usuarios.sort(function (a, b) { return b.GetEstadisticas()[2][a.GetEstadisticas()[0].length - 1] - a.GetEstadisticas()[2][a.GetEstadisticas()[0].length - 1]; });
                    break;
            }
        }
    };
    ColeccionUsuarios.usuarios = [];
    return ColeccionUsuarios;
}());
exports.ColeccionUsuarios = ColeccionUsuarios;
