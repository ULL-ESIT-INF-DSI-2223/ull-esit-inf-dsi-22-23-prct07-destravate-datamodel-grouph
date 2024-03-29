import { Grupo, tipo_historico} from './grupo';
import { ColeccionGrupos} from './coleccionGrupos';
import { Usuario } from '../usuario/usuario';
import { ColeccionUsuarios } from '../usuario/coleccionUsuarios';
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";


type schemaType = {
  group:{ id: number, nombre: string, miembrosGrupo: number[],
    estadisticas: number[][], clasificacionUsuarios: number[], RutasFavoritas: number[], historicos : tipo_historico, idCreador :number }[]
}

/**
 * Clase que extiende de ColeccionGrupos y que implementa la persistencia de datos en un fichero JSON
 * @extends ColeccionGrupos
 * @method addGrupo
 * @method deleteGrupo
 * @method storeGroups
 */
export class JsonColeccionGrupos extends ColeccionGrupos {
  private database: lowdb.LowdbSync<schemaType>;
  constructor () {
    super();
    this.database = lowdb(new FileSync("database.json"));
    if(this.database.has("group").value()) {
      let dbItems = this.database.get("group").value();
      dbItems.forEach((item) => {
        let grupo = new Grupo(item.id, item.nombre, item.miembrosGrupo, item.estadisticas, item.clasificacionUsuarios, item.RutasFavoritas, item.historicos, item.idCreador);
        this.addGrupo(grupo);
      });
    }
    else {
      this.database.set("group", []).write();
    }
  }

  /**
   * añade un grupo al array de grupos y lo guarda en el fichero JSON
   * @param grupo_entrada
   * @returns resultado
   */
  addGrupo(grupo_entrada: Grupo) {
    let resultado = super.addGrupo(grupo_entrada);
    this.storeGroups();
    return resultado;
  }

  /**
   * elimina un grupo del array de grupos y lo guarda en el fichero JSON
   * @param id
   * @returns void
   */
  deleteGrupo(id: number): void {
    for (let i = 0; i < this.getGrupos().length; i++) {
      if (this.getGrupos()[i].GetId() === id) {
        this.getGrupos().splice(i, 1);
      }
    }
    this.storeGroups();
  }

  /**
   * añade un usuario al grupo y lo guarda en el fichero JSON
   * @param idGrupo
   * @param idUsuario
   */
  unirseGrupo(idGrupo: number, idUsuario: number): void {
    super.unirseGrupo(idGrupo, idUsuario);
    this.storeGroups();
  }

  /**
   * elimina un usuario del grupo y lo guarda en el fichero JSON
   * @param idGrupo
   * @param idUsuario
   */
  salirGrupo(idGrupo: number, idUsuario: number): void {
    super.salirGrupo(idGrupo, idUsuario);
    this.storeGroups();
  }


  /**
   * guarda los grupos en el fichero JSON
   * @returns void
   */
  private storeGroups(): void {
    this.database.set("group", this.getGrupos()).write();
  }
}
