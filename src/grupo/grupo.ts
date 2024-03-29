export type tipo_historico = (string | number)[][];

/**
 * @class Grupo
 * @description Clase que representa un grupo de amigos
 * @param id Identificador del grupo
 * @param nombre Nombre del grupo
 * @param miembrosGrupo Usuarios que pertenecen al grupo
 * @param estadisticas Estadísticas del grupo
 * @param clasificacionUsuarios Clasificación de los usuarios del grupo
 * @param RutasFavoritas Rutas favoritas del grupo
 * @param historicos Historial de actividades del grupo
 * @param idCreador Identificador del usuario que crea el grupo
 * @method GetId
 * @method GetNombre
 * @method GetMiembrosGrupo
 * @method GetEstadisticas
 * @method GetClasificacionUsuarios
 * @method GetRutasFavoritas
 * @method GetHistoricos
 * @method GetIdCreador
 */
export class Grupo{
  constructor(private id: number, private nombre: string, private miembrosGrupo: number[],
    private estadisticas: number[][], private clasificacionUsuarios: number[], private RutasFavoritas: number[], private historicos : tipo_historico,
    private idCreador: number) {
  }

  /**
   * @method GetId
   */
  GetId() {
    return this.id;
  }

  /**
   * @method GetNombre
   */
  GetNombre() {
    return this.nombre;
  }

  /**
   * @method GetMiembrosGrupo
   */
  GetMiembrosGrupo() {
    return this.miembrosGrupo;
  }

  /**
   * @method GetEstadisticas
   */
  GetEstadisticas() {
    return this.estadisticas;
  }

  /**
   * @method GetClasificacionUsuarios
   */
  GetClasificacionUsuarios() {
    return this.clasificacionUsuarios;
  }

  /**
   * @method GetRutasFavoritas
   */
  GetRutasFavoritas() {
    return this.RutasFavoritas;
  }

  /**
   * @method GetHistoricos
   */
  GetHistoricos() {
    return this.historicos;
  }

  /**
   * @method GetIdCreador
   */
  GetIdCreador() {
    return this.idCreador;
  }

  /**
   * añadirMiembro
   * @param id Identificador del usuario que se añade al grupo
   */
  unirseGrupo(id : number) {
    this.miembrosGrupo.push(id);
  }

  /**
   * eliminarMiembro
   * @param id Identificador del usuario que se elimina del grupo
   */
  salirGrupo(id: number) {
    for (let i = 0; i < this.miembrosGrupo.length; i++) {
      if (this.miembrosGrupo[i] === id) {
        this.miembrosGrupo.splice(i, 1);
      }
    }
  }
}
