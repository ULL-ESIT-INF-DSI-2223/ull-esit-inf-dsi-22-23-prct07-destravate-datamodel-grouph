import { Reto } from './reto';
import { metodos_retos } from './metodosRetos';

export class ColeccionRetos implements metodos_retos {
  private static retos: Reto[] = [];
  private static ColeccionRetos: ColeccionRetos;
  protected constructor() {
    ColeccionRetos.retos = [];
  }

  /**
   * Método que devuelve una instancia de la clase ColeccionRetos
   * @method getInstance
   * @returns ColeccionRetos
   */
  public static getInstance(): ColeccionRetos {
    if (!ColeccionRetos.ColeccionRetos) {
      ColeccionRetos.ColeccionRetos = new ColeccionRetos();
    }
    return ColeccionRetos.ColeccionRetos;
  }

  /**
   * Método que devuelve un array de retos
   * @method getRetos
   * @returns Reto[]
   */
  getRetos(): Reto[] {
    return ColeccionRetos.retos;
  }

  /**
   * Método que añade un reto al array de retos
   * @method addReto
   * @param reto
   * @returns void
   */
  addReto(reto_entrada: Reto) : Reto | undefined{
    //Comrpobar que no existe un reto con el mismo id
    if (ColeccionRetos.retos.find(Retos => reto_entrada.GetId() === Retos.GetId())) {
      return undefined;
    }
    ColeccionRetos.retos.push(reto_entrada);
    return reto_entrada;
  }

  /**
   * Método que elimina un reto del array de retos
   * @method deleteReto
   * @param indice
   * @returns void
   */
  deleteReto(indice: number): void {
    if (indice < 0 || indice >= ColeccionRetos.retos.length) {
      return;
    }
    ColeccionRetos.retos.splice(indice, 1);
  }

  /**
   * Método que devuelve un reto a partir de su id
   * @method getReto
   * @param id
   * @returns Reto | undefined
   */
  getReto(id: number): Reto | undefined {
    const reto = ColeccionRetos.retos.find(Retos => Retos.GetId() === id);
    return reto;
  }

  /**
   * Método que devuelve el numero de retos
   * @method getNumeroRetos
   * @returns number
  */
  getNumeroRetos(): number {
    return ColeccionRetos.retos.length;
  }

  /**
   * Método que devuelve un reto a partir de su nombre
   * @method getRetoPorNombre
   * @param nombre
   * @returns Reto | undefined
   */
  getRetoPorNombre(nombre: string): Reto | undefined {
    const reto = ColeccionRetos.retos.find(Retos => Retos.GetNombre() === nombre);
    return reto;
  }

  /**
   * Método que devuelve un array de retos a partir de su indice
   * @method getRetosPorIndice
   * @param indice
   * @returns Reto | undefined
   */
  getRetosPorIndice(indice: number): Reto | undefined {
    if (indice < 0 || indice >= ColeccionRetos.retos.length) {
      return undefined;
    }
    return ColeccionRetos.retos[indice];
  }

  /**
   * Método que ordena el array de retos alfabéticamente, de forma ascendente o descendente según el parámetro
    * @method ordenarRetosPorNombreAlfabetico
    * @param ascendente
    * @returns void
    */
  ordenarRetosPorNombreAlfabetico(ascendente: boolean): void {
    if (ascendente) {
      ColeccionRetos.retos.sort((a, b) => a.GetNombre().localeCompare(b.GetNombre()));
    } else {
      ColeccionRetos.retos.sort((a, b) => b.GetNombre().localeCompare(a.GetNombre()));
    }
  }

  /**
   * Método que ordena el array de retos por distancia recorrida, de forma ascendente o descendente según el parámetro
   * @method ordenarRetosPorDistanciaRecorrida
   * @param ascendente
   * @param periodo
   * @returns void
   */
  ordenarRetosPorDistanciaRecorrida(ascendente: boolean): void {
    if (ascendente) {
      ColeccionRetos.retos.sort((a, b) => a.GetKmTotales() - b.GetKmTotales());
    } else {
      ColeccionRetos.retos.sort((a, b) => b.GetKmTotales() - a.GetKmTotales());
    }
  }

  /**
   * Método que ordena el array de retos por cantidad de usuarios, de forma ascendente o descendente según el parámetro
   * @method ordenarRetosPorCantidadDeUsuarios
   * @param ascendente
   * @returns void
  */
  ordenarRetosPorCantidadDeUsuarios(ascendente: boolean): void {
    if (ascendente) {
      ColeccionRetos.retos.sort((a, b) => a.GetUsuariosActivos().length - b.GetUsuariosActivos().length);
    } else {
      ColeccionRetos.retos.sort((a, b) => b.GetUsuariosActivos().length - a.GetUsuariosActivos().length);
    }
  }
}
