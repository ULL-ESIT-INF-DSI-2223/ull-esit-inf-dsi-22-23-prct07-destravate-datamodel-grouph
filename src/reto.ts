export class Reto{
  constructor(private id: number, private nombre: string, private rutasFormantes: string[], private tipo: boolean,
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
