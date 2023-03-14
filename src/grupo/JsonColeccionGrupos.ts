import { Grupo, tipo_historico} from './grupo';
import { ColeccionGrupos} from './coleccionGrupos';
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";


type schemaType = {
  group:{ id: number, nombre: string, miembrosGrupo: number[],
    estadisticas: number[][], clasificacionUsuarios: number[], RutasFavoritas: number[], historicos : tipo_historico }[]
}

export class JsonColeccionGrupos extends ColeccionGrupos {
  private database: lowdb.LowdbSync<schemaType>;
  constructor () {
    super();
    this.database = lowdb(new FileSync("database.json"));
    if(this.database.has("group").value()) {
      let dbItems = this.database.get("group").value();
      dbItems.forEach((item) => {
        let grupo = new Grupo(item.id, item.nombre, item.miembrosGrupo, item.estadisticas, item.clasificacionUsuarios, item.RutasFavoritas, item.historicos);
        this.addGrupo(grupo);
      });
    }
    else {
      this.database.set("group", []).write();
    }
  }
  addGrupo(grupo_entrada: Grupo) {
    let resultado = super.addGrupo(grupo_entrada);
    this.storeGroups();
    return resultado;
  }
  deleteGrupo(id: number): void {
    super.deleteGrupo(id);
    this.storeGroups();
  }
  private storeGroups(): void {
    this.database.set("group", this.getGrupos()).write();
  }
}
