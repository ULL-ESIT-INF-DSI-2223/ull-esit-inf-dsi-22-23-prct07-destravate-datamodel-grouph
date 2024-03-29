import {Ruta} from "./ruta";
import { metodos_rutas } from "./metodosRutas";

/**
 * Clase que representa una colección de rutas
 * @class ColeccionRutas
 * @method getRutas: devuelve un array de rutas
 * @method addRuta: añade una ruta al array de rutas
 * @method getRuta: devuelve una ruta a partir de su id
 * @method getNumeroRutas: devuelve el número de rutas
 * @method getRutaPorNombre: devuelve una ruta a partir de su nombre
 * @method getItem: devuelve una ruta a partir de su índice
 */
export class ColeccionRutas implements metodos_rutas {
  private static rutas: Ruta[] = [];
  private static ColeccionRutas: ColeccionRutas;
  protected constructor() {
    ColeccionRutas.rutas = [];
  }
  /**
   * Método que devuelve una instancia de la clase ColeccionRutas
   * @method getInstance
   * @returns ColeccionRutas
   */
  public static getInstance(): ColeccionRutas {
    if (!ColeccionRutas.ColeccionRutas) {
      ColeccionRutas.ColeccionRutas = new ColeccionRutas();
    }
    return ColeccionRutas.ColeccionRutas;
  }
  /**
   * Método que devuelve un array de rutas
   * @method getRutas
   * @returns Ruta[]
   */
  getRutas(): Ruta[] {
    return ColeccionRutas.rutas;
  }
  /**
   * Método que añade una ruta al arraColeccion.
   * @method addRuta
   * @param ruta
   * @returns void
   */
  addRuta(ruta_entrada: Ruta): Ruta | undefined {
    // Se comprueba que el id no existe
    if (ColeccionRutas.rutas.find(ruta => ruta_entrada.GetId() === ruta.GetId())) {
      return undefined;
    }
    ColeccionRutas.rutas.push(ruta_entrada);
    return ruta_entrada;
  }
  /**
   * Método que elimina una ruta del arraColeccion.
   * @method deleteRuta
   * @param indice
   * @returns void
   */
  deleteRuta(indice: number): void {
    if (indice < 0 || indice >= ColeccionRutas.rutas.length) {
      return;
    }
    ColeccionRutas.rutas.splice(indice, 1);
  }
  /**
   * Método que devuelve una ruta a partir de su id
   * @method getRuta
   * @param id
   * @returns Ruta | undefined
  */
  getRuta(id: number): Ruta | undefined {
    const ruta = ColeccionRutas.rutas.find(ruta => ruta.GetId() === id);
    return ruta;
  }
  /**
   * Método que devuelve el número de rutas
   * @method getNumeroRutas
   * @returns number
   */
  getNumeroRutas(): number {
    return ColeccionRutas.rutas.length;
  }

  /**
   * Método que devuelve una ruta a partir de su nombre
   * @method getRutaPorNombre
   * @param nombre
   * @returns Ruta | undefined
   */
  getRutaPorNombre(nombre: string): Ruta | undefined {
    const ruta = ColeccionRutas.rutas.find(ruta => ruta.GetNombre() === nombre);
    return ruta;
  }
  /**
   * Método que devuelve una ruta a partir de su índice
   * @method getItem
   * @param indice
   * @returns Ruta | undefined
   */
  getItem(indice: number): Ruta | undefined{
    if (indice < 0 || indice >= ColeccionRutas.rutas.length) {
      return undefined;
    }
    return ColeccionRutas.rutas[indice];
  }
  /**
   * Método que ordenaColeccion. por nombre alfabéticamente, que dado un parámetro de entrada ordena ascendentemente o descendentemente
   * @method ordenarRutasPorNombreAlfabetico
   * @param ascendente
   * @returns void
  */
  ordenarRutasPorNombreAlfabetico(ascendente: boolean): void {
    if (ascendente) {
      ColeccionRutas.rutas.sort((a, b) => a.GetNombre().localeCompare(b.GetNombre()));
    } else {
      ColeccionRutas.rutas.sort((a, b) => b.GetNombre().localeCompare(a.GetNombre()));
    }
  }
  /**
   * Método que ordena las rutas por cantidad de usuarios, que dado un parámetro de entrada ordena ascendentemente o descendentemente
   * @method ordenarRutasPorCantidadUsuarios
   * @returns void
   */
  ordenarRutasPorCantidadUsuarios(ascendente: boolean): void {
    if (ascendente) {
      ColeccionRutas.rutas.sort((a, b) => a.GetUsuarios().length - b.GetUsuarios().length);
    } else {
      ColeccionRutas.rutas.sort((a, b) => b.GetUsuarios().length - a.GetUsuarios().length);
    }
  }
  /**
   * Método que ordena las rutas por distancia, que dado un parámetro de entrada ordena ascendentemente o descendentemente
   * @method ordenarRutasPorDistancia
   * @returns void
   */
  ordenarRutasPorDistancia(ascendente: boolean): void {
    if (ascendente) {
      ColeccionRutas.rutas.sort((a, b) => a.GetLongitud() - b.GetLongitud());
    } else {
      ColeccionRutas.rutas.sort((a, b) => b.GetLongitud() - a.GetLongitud());
    }
  }
  /**
   * Método que ordena las calificaciones medias de la ruta, que dado un parámetro de entrada ordena ascendentemente o descendentemente
   * @method ordenarRutasPorCalificacionMedia
   * @returns void
  */
  ordenarRutasPorCalificacionMedia(ascendente: boolean): void {
    if (ascendente) {
      ColeccionRutas.rutas.sort((a, b) => a.GetCalificacion() - b.GetCalificacion());
    } else {
      ColeccionRutas.rutas.sort((a, b) => b.GetCalificacion() - a.GetCalificacion());
    }
  }
  /**
   * Método que ordena las rutas por actividad, que dado un parámetro de entrada ordena ascendentemente o descendentemente
   * @method ordenarRutasPorActividad
   * @returns void
  */
  ordenarRutasPorActividad(ascendente: boolean): void {
    if (ascendente) {
      ColeccionRutas.rutas.sort((a, b) => a.GetActividad() - b.GetActividad());
    } else {
      ColeccionRutas.rutas.sort((a, b) => b.GetActividad() - a.GetActividad());
    }
  }
}
