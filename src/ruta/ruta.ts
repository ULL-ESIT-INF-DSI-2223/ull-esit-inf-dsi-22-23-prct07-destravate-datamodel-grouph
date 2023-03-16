/**
 * @class Rutas
 * @description Clase que representa una ruta
 * @param id Identificador de la ruta
 * @param nombre Nombre de la ruta
 * @param geo_ini Coordenadas de inicio de la ruta
 * @param geo_fin Coordenadas de fin de la ruta
 * @param longitud Longitud de la ruta
 * @param desnivel Desnivel de la ruta
 * @param usuarios Usuarios que han realizado la ruta
 * @param actividad Estado de la ruta
 * @param calificacion Calificación de la ruta
 * @param idCreador Identificador del usuario que crea la ruta
 * @method GetId
 * @method GetNombre
 * @method GetGeoIni
 * @method GetGeoFin
 * @method GetLongitud
 * @method GetDesnivel
 * @method GetUsuarios
 * @method GetActividad
 * @method GetCalificacion
 * @method GetIdCreador
 */
export class Ruta {
  constructor(private id: number, private nombre: string, private geo_ini : [number, number], private geo_fin : [number, number],
    private longitud : number, private desnivel : number, private usuarios : number[], private actividad : number, private calificacion : number,
    private idCreador : number) {
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
   * @method GetGeoIni
    */
  GetGeoIni() {
    return this.geo_ini;
  }
  /**
   * @method GetGeoFin
   */
  GetGeoFin() {
    return this.geo_fin;
  }
  /**
   * @method GetLongitud
   */
  GetLongitud() {
    return this.longitud;
  }
  /**
   * @method GetDesnivel
   */
  GetDesnivel() {
    return this.desnivel;
  }
  /**
  * @method GetUsuarios
  */
  GetUsuarios() {
    return this.usuarios;
  }
  /**
   * @method GetActividad
   */
  GetActividad() {
    return this.actividad;
  }
  /**
   * @method GetCalificacion
   */
  GetCalificacion() {
    return this.calificacion;
  }

  /**
   * @method GetIdCreador
   */
  GetIdCreador(): number {
    return this.idCreador;
  }
}
