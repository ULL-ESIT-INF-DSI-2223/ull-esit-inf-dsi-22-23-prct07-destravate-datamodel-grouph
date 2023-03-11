type tipo_historico = (string | number)[][];

/**
 * Clase Usuario
 * @param nombre Nombre del usuario
 * @param id Identificador del usuario
 * @param actividades Actividades del usuario (0 si es correr, 1 si es en bici, 2 si es en ambas)
 * @param amigos Amigos del usuario
 * @param grupos_amigos Grupos de amigos del usuario
 * @param estadisticas Estadisticas del usuario
 * @param rutas_favoritas Rutas favoritas del usuario
 * @param retos Retos del usuario
 * @param historicos Historicos del usuario
 */
export class Usuario{
  constructor(private nombre: string, private id : number, private actividades : number, private amigos : number[], private grupos_amigos : number[][],
  private estadisticas : number[][], private rutas_favoritas : number[], private retos : number [], private historicos : tipo_historico) {
  }
  /**
   * Funcion que devuelve el nombre del usuario
   */
  GetNombre() {
    return this.nombre;
  }
  /**
   *  Funcion que devuelve el id del usuario
  */
  GetId() {
    return this.id;
  }
  /**
   * Funcion que devuelve las actividades del usuario
   */
  GetActividades() {
    return this.actividades;
  }
  /**
   * Funcion que devuelve los amigos del usuario
   */
  GetAmigos() {
    return this.amigos;
  }
  /**
   * Funcion que devuelve los grupos de amigos del usuario
   */
  GetGruposAmigos() {
    return this.grupos_amigos;
  }
  /**
   * Funcion que devuelve las estadisticas del usuario
   */
  GetEstadisticas() {
    return this.estadisticas;
  }
  /**
   * Funcion que devuelve las rutas favoritas del usuario
   */
  GetRutasFavoritas() {
    return this.rutas_favoritas;
  }
  /**
   * Funcion que devuelve los retos del usuario
   */
  GetRetos() {
    return this.retos;
  }
  /**
   * Funcion que devuelve los historicos del usuario
   */
  GetHistoricos() {
    return this.historicos;
  }
}
