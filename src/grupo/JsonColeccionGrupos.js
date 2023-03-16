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
exports.JsonColeccionGrupos = void 0;
var grupo_1 = require("./grupo");
var coleccionGrupos_1 = require("./coleccionGrupos");
var lowdb = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
/**
 * Clase que extiende de ColeccionGrupos y que implementa la persistencia de datos en un fichero JSON
 * @extends ColeccionGrupos
 * @method addGrupo
 * @method deleteGrupo
 * @method storeGroups
 */
var JsonColeccionGrupos = /** @class */ (function (_super) {
    __extends(JsonColeccionGrupos, _super);
    function JsonColeccionGrupos() {
        var _this = _super.call(this) || this;
        _this.database = lowdb(new FileSync("database.json"));
        if (_this.database.has("group").value()) {
            var dbItems = _this.database.get("group").value();
            dbItems.forEach(function (item) {
                var grupo = new grupo_1.Grupo(item.id, item.nombre, item.miembrosGrupo, item.estadisticas, item.clasificacionUsuarios, item.RutasFavoritas, item.historicos, item.idCreador);
                _this.addGrupo(grupo);
            });
        }
        else {
            _this.database.set("group", []).write();
        }
        return _this;
    }
    /**
     * añade un grupo al array de grupos y lo guarda en el fichero JSON
     * @param grupo_entrada
     * @returns resultado
     */
    JsonColeccionGrupos.prototype.addGrupo = function (grupo_entrada) {
        var resultado = _super.prototype.addGrupo.call(this, grupo_entrada);
        this.storeGroups();
        return resultado;
    };
    /**
     * elimina un grupo del array de grupos y lo guarda en el fichero JSON
     * @param id
     * @returns void
     */
    JsonColeccionGrupos.prototype.deleteGrupo = function (id) {
        _super.prototype.deleteGrupo.call(this, id);
        this.storeGroups();
    };
    /**
     * guarda los grupos en el fichero JSON
     * @returns void
     */
    JsonColeccionGrupos.prototype.storeGroups = function () {
        this.database.set("group", this.getGrupos()).write();
    };
    return JsonColeccionGrupos;
}(coleccionGrupos_1.ColeccionGrupos));
exports.JsonColeccionGrupos = JsonColeccionGrupos;
