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
exports.JsonColeccionRutas = void 0;
var ruta_1 = require("./ruta");
var coleccionRutas_1 = require("./coleccionRutas");
var lowdb = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
/**
 * Clase que extiende de ColeccionRutas y que implementa la persistencia de datos en un fichero JSON
 * @extends ColeccionRutas
 * @method addRuta
 * @method deleteRuta
 * @method storeRoutes
 */
var JsonColeccionRutas = /** @class */ (function (_super) {
    __extends(JsonColeccionRutas, _super);
    function JsonColeccionRutas() {
        var _this = _super.call(this) || this;
        _this.database = lowdb(new FileSync("database.json"));
        if (_this.database.has("route").value()) {
            var dbItems = _this.database.get("route").value();
            dbItems.forEach(function (item) {
                var ruta = new ruta_1.Ruta(item.id, item.nombre, item.geo_ini, item.geo_fin, item.longitud, item.desnivel, item.usuarios, item.actividad, item.calificacion, item.idCreador);
                _this.addRuta(ruta);
            });
        }
        else {
            _this.database.set("route", []).write();
        }
        return _this;
    }
    /**
     * añade una ruta al array de rutas y lo guarda en el fichero JSON
     * @param Ruta_entrada
     * @returns resultado
     */
    JsonColeccionRutas.prototype.addRuta = function (Ruta_entrada) {
        var resultado = _super.prototype.addRuta.call(this, Ruta_entrada);
        this.storeRoutes();
        return resultado;
    };
    /**
     * elimina una ruta del array de rutas y lo guarda en el fichero JSON
     * @param indice
     * @returns void
     */
    JsonColeccionRutas.prototype.deleteRuta = function (indice) {
        for (var i = 0; i < this.getRutas().length; i++) {
            if (this.getRutas()[i].GetId() === indice) {
                this.getRutas().splice(i, 1);
            }
        }
        this.storeRoutes();
    };
    /**
     * guarda las rutas en el fichero JSON
     * @returns void
     */
    JsonColeccionRutas.prototype.storeRoutes = function () {
        this.database.set("route", this.getRutas()).write();
    };
    return JsonColeccionRutas;
}(coleccionRutas_1.ColeccionRutas));
exports.JsonColeccionRutas = JsonColeccionRutas;
