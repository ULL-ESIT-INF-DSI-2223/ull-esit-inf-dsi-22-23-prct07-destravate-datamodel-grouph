import { Reto } from './reto';
import { ColeccionRetos } from './coleccionRetos';
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

type schemaType = {
  challenge:{ id: number, nombre: string, rutasFormantes: string[], tipo: number,
    kmTotales: number, UsuariosActivos: number[], idCreador: number}[]
}

/**
 * Clase que extiende de ColeccionRetos y que implementa la persistencia de datos en un fichero JSON
 * @extends ColeccionRetos
 * @method addReto
 * @method deleteReto
 * @method storeChallenges
 */
export class JsonColeccionRetos extends ColeccionRetos {
  private database: lowdb.LowdbSync<schemaType>;
  constructor() {
    super();
    this.database = lowdb(new FileSync("database.json"));
    if(this.database.has("challenge").value()) {
      let dbItems = this.database.get("challenge").value();
      dbItems.forEach((item) => {
        let reto = new Reto(item.id, item.nombre, item.rutasFormantes, item.tipo, item.kmTotales, item.UsuariosActivos, item.idCreador);
        this.addReto(reto);
      });
    }
    else {
      this.database.set("challenge", []).write();
    }
  }

  /**
   * añade un reto al array de retos y lo guarda en el fichero JSON
   * @param reto_entrada
   * @returns resultado
   */
  addReto(reto_entrada: Reto) {
    let resultado = super.addReto(reto_entrada);
    this.storeChallenges();
    return resultado;
  }

  /**
   * elimina un reto del array de retos y lo guarda en el fichero JSON
   * @param id
   * @returns void
   */
  deleteReto(id: number): void {
    super.deleteReto(id);
    this.storeChallenges();
  }

  /**
   * guarda los retos en el fichero JSON
   * @returns void
   */
  private storeChallenges(): void {
    this.database.set("challenge", this.getRetos()).write();
  }
}

