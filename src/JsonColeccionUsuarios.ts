import { Usuario, tipo_historico } from "./usuario";
import { ColeccionUsuarios } from "./coleccionUsuarios";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";


// Tipo de datos como el de la clase usuario
type schemaType = {
  user: {nombre: string, id: number, actividades: number, amigos: number[], grupos_amigos: number[][], 
    estadisticas: number[][], rutas_favoritas: number[], retos: number[], historicos: tipo_historico}[]
}

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
  addUsuario(usuario_entrada: Usuario) {
    let resultado = super.addUsuario(usuario_entrada);
    this.storeUsers();
    return resultado;
  }
  deleteUsuario(indice: number): void {
    super.deleteUsuario(indice);
    this.storeUsers();
  }
  private storeUsers() {
    this.database.set("user", this.getUsuarios()).write();
  }
}