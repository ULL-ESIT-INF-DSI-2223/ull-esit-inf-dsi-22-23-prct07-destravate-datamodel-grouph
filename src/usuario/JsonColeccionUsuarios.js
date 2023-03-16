"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.JsonColeccionUsuarios = void 0;
var usuario_1 = require("./usuario");
var coleccionUsuarios_1 = require("./coleccionUsuarios");
var lowdb = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
/**
 * Clase que extiende de ColeccionUsuarios y que implementa la persistencia de datos en un fichero JSON
 * @extends ColeccionUsuarios
 * @method addUsuario
 * @method deleteUsuario
 * @method storeUsers
 */
var JsonColeccionUsuarios = /** @class */ (function (_super) {
    __extends(JsonColeccionUsuarios, _super);
    function JsonColeccionUsuarios() {
        var _this = _super.call(this) || this;
        _this.database = lowdb(new FileSync("database.json"));
        if (_this.database.has("user").value()) {
            var dbItems = _this.database.get("user").value();
            dbItems.forEach(function (item) {
                var usuario = new usuario_1.Usuario(item.nombre, item.id, item.actividades, item.amigos, item.grupos_amigos, item.estadisticas, item.rutas_favoritas, item.retos, item.historicos);
                _this.addUsuario(usuario);
            });
        }
        else {
            _this.database.set("user", []).write();
        }
        return _this;
    }
    /**
     * añade un usuario al array de usuarios y lo guarda en el fichero JSON
     * @param usuario_entrada
     * @returns resultado
     */
    JsonColeccionUsuarios.prototype.addUsuario = function (usuario_entrada) {
        var resultado = _super.prototype.addUsuario.call(this, usuario_entrada);
        this.storeUsers();
        return resultado;
    };
    /**
     * elimina un usuario del array de usuarios y lo guarda en el fichero JSON
     * @param indice
     * @returns void
     */
    JsonColeccionUsuarios.prototype.deleteUsuario = function (indice) {
        _super.prototype.deleteUsuario.call(this, indice);
        this.storeUsers();
    };
    /**
     * guarda los usuarios en el fichero JSON
     * @returns void
     */
    JsonColeccionUsuarios.prototype.storeUsers = function () {
        this.database.set("user", this.getUsuarios()).write();
    };
    return JsonColeccionUsuarios;
}(coleccionUsuarios_1.ColeccionUsuarios));
exports.JsonColeccionUsuarios = JsonColeccionUsuarios;
