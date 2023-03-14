import { Ruta } from "./ruta";
import { ColeccionRutas } from "./coleccionRutas";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";


// Tipo de datos como el de la clase ruta
type schemaType = {
  route: {id: number, nombre: string, geo_ini : [number, number], geo_fin : [number, number],
    longitud : number, desnivel : number, usuarios : number[], actividad : number, calificacion : number}[]
}

export class JsonColeccionRutas extends ColeccionRutas {
  private database: lowdb.LowdbSync<schemaType>;
  constructor () {
    super();
    this.database = lowdb(new FileSync("database.json"));
    if(this.database.has("route").value()) {
      let dbItems = this.database.get("route").value();
      dbItems.forEach((item) => {
        let ruta = new Ruta(item.id, item.nombre, item.geo_ini, item.geo_fin, item.longitud, item.desnivel, item.usuarios, item.actividad, item.calificacion);
        this.addRuta(ruta);
      });
    }
    else {
      this.database.set("route", []).write();
    }
  }
  addRuta(Ruta_entrada: Ruta) {
    let resultado = super.addRuta(Ruta_entrada);
    this.storeRoutes();
    return resultado;
  }
  deleteRuta(indice: number): void {
    super.deleteRuta(indice);
    this.storeRoutes();
  }
  private storeRoutes() {
    this.database.set("route", this.getRutas()).write();
  }
}
