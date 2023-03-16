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
exports.JsonColeccionRetos = void 0;
var reto_1 = require("./reto");
var coleccionRetos_1 = require("./coleccionRetos");
var lowdb = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
/**
 * Clase que extiende de ColeccionRetos y que implementa la persistencia de datos en un fichero JSON
 * @extends ColeccionRetos
 * @method addReto
 * @method deleteReto
 * @method storeChallenges
 */
var JsonColeccionRetos = /** @class */ (function (_super) {
    __extends(JsonColeccionRetos, _super);
    function JsonColeccionRetos() {
        var _this = _super.call(this) || this;
        _this.database = lowdb(new FileSync("database.json"));
        if (_this.database.has("challenge").value()) {
            var dbItems = _this.database.get("challenge").value();
            dbItems.forEach(function (item) {
                var reto = new reto_1.Reto(item.id, item.nombre, item.rutasFormantes, item.tipo, item.kmTotales, item.UsuariosActivos, item.idCreador);
                _this.addReto(reto);
            });
        }
        else {
            _this.database.set("challenge", []).write();
        }
        return _this;
    }
    /**
     * añade un reto al array de retos y lo guarda en el fichero JSON
     * @param reto_entrada
     * @returns resultado
     */
    JsonColeccionRetos.prototype.addReto = function (reto_entrada) {
        var resultado = _super.prototype.addReto.call(this, reto_entrada);
        this.storeChallenges();
        return resultado;
    };
    /**
     * elimina un reto del array de retos y lo guarda en el fichero JSON
     * @param id
     * @returns void
     */
    JsonColeccionRetos.prototype.deleteReto = function (id) {
        _super.prototype.deleteReto.call(this, id);
        this.storeChallenges();
    };
    /**
     * guarda los retos en el fichero JSON
     * @returns void
     */
    JsonColeccionRetos.prototype.storeChallenges = function () {
        this.database.set("challenge", this.getRetos()).write();
    };
    return JsonColeccionRetos;
}(coleccionRetos_1.ColeccionRetos));
exports.JsonColeccionRetos = JsonColeccionRetos;
