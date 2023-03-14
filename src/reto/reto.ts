/**
 * @class Reto
 * @param id
 * @param nombre
 * @param rutasFormantes
 * @param tipo
 * @param kmTotales
 * @param UsuariosActivos
 * @method GetId
 * @method GetNombre
 * @method GetRutasFormantes
 * @method GetTipo
 * @method GetKmTotales
 * @method GetUsuariosActivos
 */
export class Reto{
  constructor(private id: number, private nombre: string, private rutasFormantes: string[], private tipo: number,
    private kmTotales: number, private UsuariosActivos: number[]) {
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
   * @method GetRutasFormantes
   */
  GetRutasFormantes() {
    return this.rutasFormantes;
  }
  /**
   * @method GetTipo
   */
  GetTipo() {
    return this.tipo;
  }
  /**
   * @method GetKmTotales
   */
  GetKmTotales() {
    return this.kmTotales;
  }
  /**
   * @method GetUsuariosActivos
   */
  GetUsuariosActivos() {
    return this.UsuariosActivos;
  }
}
