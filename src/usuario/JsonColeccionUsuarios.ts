import { Usuario, tipo_historico } from "./usuario";
import { ColeccionUsuarios } from "./coleccionUsuarios";
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";


// Tipo de datos como el de la clase usuario
type schemaType = {
  user: {nombre: string, id: number, actividades: number, amigos: number[], grupos_amigos: number[][],
    estadisticas: number[][], rutas_favoritas: number[], retos: number[], historicos: tipo_historico}[]
}

/**
 * Clase que extiende de ColeccionUsuarios y que implementa la persistencia de datos en un fichero JSON
 * @extends ColeccionUsuarios
 * @method addUsuario
 * @method deleteUsuario
 * @method storeUsers
 */
export class JsonColeccionUsuarios extends ColeccionUsuarios {
  private database: lowdb.LowdbSync<schemaType>;
  constructor () {
    super();
    this.database = lowdb(new FileSync("database.json"));
    if(this.database.has("user").value()) {
      let dbItems = this.database.get("user").value();
      dbItems.forEach((item) => {
        let usuario = new Usuario(item.nombre, item.id, item.actividades, item.amigos, item.grupos_amigos, item.estadisticas, item.rutas_favoritas, item.retos, item.historicos);
        this.addUsuario(usuario);
      });
    }
    else {
      this.database.set("user", []).write();
    }
  }

  /**
   * añade un usuario al array de usuarios y lo guarda en el fichero JSON
   * @param usuario_entrada
   * @returns resultado
   */
  addUsuario(usuario_entrada: Usuario) {
    let resultado = super.addUsuario(usuario_entrada);
    this.storeUsers();
    return resultado;
  }

  /**
   * elimina un usuario del array de usuarios y lo guarda en el fichero JSON
   * @param indice
   * @returns void
   */
  deleteUsuario(indice: number): void {
    super.deleteUsuario(indice);
    this.storeUsers();
  }

  /**
   * guarda los usuarios en el fichero JSON
   * @returns void
   */
  private storeUsers() {
    this.database.set("user", this.getUsuarios()).write();
  }
}
