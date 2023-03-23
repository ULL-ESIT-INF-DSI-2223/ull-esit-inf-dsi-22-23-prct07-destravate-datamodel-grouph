import { Ruta } from "./ruta";
import { ColeccionRutas } from "./coleccionRutas";
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";


// Tipo de datos como el de la clase ruta
type schemaType = {
  route: {id: number, nombre: string, geo_ini : [number, number], geo_fin : [number, number],
    longitud : number, desnivel : number, usuarios : number[], actividad : number, calificacion : number, idCreador:number}[]
}

/**
 * Clase que extiende de ColeccionRutas y que implementa la persistencia de datos en un fichero JSON
 * @extends ColeccionRutas
 * @method addRuta
 * @method deleteRuta
 * @method storeRoutes
 */
export class JsonColeccionRutas extends ColeccionRutas {
  private database: lowdb.LowdbSync<schemaType>;
  constructor () {
    super();
    this.database = lowdb(new FileSync("database.json"));
    if(this.database.has("route").value()) {
      let dbItems = this.database.get("route").value();
      dbItems.forEach((item) => {
        let ruta = new Ruta(item.id, item.nombre, item.geo_ini, item.geo_fin, item.longitud, item.desnivel, item.usuarios, item.actividad, item.calificacion, item.idCreador);
        this.addRuta(ruta);
      });
    }
    else {
      this.database.set("route", []).write();
    }
  }

  /**
   * añade una ruta al array de rutas y lo guarda en el fichero JSON
   * @param Ruta_entrada
   * @returns resultado
   */
  addRuta(Ruta_entrada: Ruta) {
    let resultado = super.addRuta(Ruta_entrada);
    this.storeRoutes();
    return resultado;
  }

  /**
   * elimina una ruta del array de rutas y lo guarda en el fichero JSON
   * @param indice
   * @returns void
   */
  deleteRuta(indice: number): void {
    for(let i = 0; i < this.getRutas().length; i++) {
      if(this.getRutas()[i].GetId() === indice) {
        this.getRutas().splice(i, 1);
      }
    }
    this.storeRoutes();
  }

  /**
   * guarda las rutas en el fichero JSON
   * @returns void
   */
  private storeRoutes() {
    this.database.set("route", this.getRutas()).write();
  }
}
