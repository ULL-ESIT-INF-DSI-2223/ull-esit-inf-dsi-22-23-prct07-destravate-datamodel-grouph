import { Reto } from './reto';
import { ColeccionRetos } from './coleccionRetos';
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type schemaType = {
  challenge:{ id: number, nombre: string, rutasFormantes: string[], tipo: number,
    kmTotales: number, UsuariosActivos: number[]}[]
}

export class JsonColeccionRetos extends ColeccionRetos {
  private database: lowdb.LowdbSync<schemaType>;
  constructor() {
    super();
    this.database = lowdb(new FileSync("database.json"));
    if(this.database.has("challenge").value()) {
      let dbItems = this.database.get("challenge").value();
      dbItems.forEach((item) => {
        let reto = new Reto(item.id, item.nombre, item.rutasFormantes, item.tipo, item.kmTotales, item.UsuariosActivos);
        this.addReto(reto);
      });
    }
    else {
      this.database.set("challenge", []).write();
    }
  }
  addReto(reto_entrada: Reto) {
    let resultado = super.addReto(reto_entrada);
    this.storeChallenges();
    return resultado;
  }
  deleteReto(id: number): void {
    super.deleteReto(id);
    this.storeChallenges();
  }
  private storeChallenges(): void {
    this.database.set("challenge", this.getRetos()).write();
  }
}

