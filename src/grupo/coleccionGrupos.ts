import { Grupo } from './grupo';
import { metodos_grupos } from './metodosGrupos';

/**
 * Clase que contiene los grupos
 * @class ColeccionGrupos
 * @method getInstance
 * @method getGrupos
 * @method addGrupo
 * @method deleteGrupo
 * @method getGrupo
 * @method getNumeroGrupos
 * @method getGrupoPorNombre
 * @method getItem
 * @method ordenarGruposPorNombreAlfabetico
 * @method ordenarGruposPorDistanciaRecorrida
 * @method ordenarGruposPorCantidadDeIntegrantes
 */
export class ColeccionGrupos implements metodos_grupos {
  private static grupos: Grupo[] = [];
  private static colecionGrupos: ColeccionGrupos;
  protected constructor() {
    ColeccionGrupos.grupos = [];
  }

  /**
   * Método que devuelve una instancia de la clase ColeccionGrupos
   * @method getInstance
   * @returns ColeccionGrupos
   */
  public static getInstance(): ColeccionGrupos {
    if (!ColeccionGrupos.colecionGrupos) {
      ColeccionGrupos.colecionGrupos = new ColeccionGrupos();
    }
    return ColeccionGrupos.colecionGrupos;
  }

  /**
   * Método que devuelve un array de grupos
   * @method getGrupos
   * @returns Grupo[]
   */
  getGrupos(): Grupo[] {
    return ColeccionGrupos.grupos;
  }

  /**
   * Método que añade un grupo al array de grupos
   * @method addGrupo
   * @param grupo
   * @returns void
   */
  addGrupo(grupo: Grupo): void {
    ColeccionGrupos.grupos.push(grupo);
  }

  /**
   * Método que elimina un grupo del array de grupos
   * @method deleteGrupo
   * @param indice
   * @returns void
   */
  deleteGrupo(indice: number): void {
    if (indice < 0 || indice >= ColeccionGrupos.grupos.length) {
      return;
    }
    ColeccionGrupos.grupos.splice(indice, 1);
  }

  /**
   * Método que devuelve un grupo
   * @method getGrupo
   * @param id
   * @returns Grupo | undefined
   */
  getGrupo(id: number): Grupo | undefined {
    const grupo = ColeccionGrupos.grupos.find(grupo => grupo.GetId() === id);
    return grupo;
  }

  /**
   * Método que devuelve el número de grupos
   * @method getNumeroGrupos
   * @returns number
   */
  getNumeroGrupos(): number {
    return ColeccionGrupos.grupos.length;
  }

  /**
   * Método que devuelve un grupo
   * @method getGrupoPorNombre
   * @param nombre
   * @returns Grupo | undefined
   */
  getGrupoPorNombre(nombre: string): Grupo | undefined {
    return ColeccionGrupos.grupos.find(grupo => grupo.GetNombre() === nombre);
  }

  /**
   * Método que devuelve un grupo
   * @method getItem
   * @param index
   * @returns Grupo
   */
  getItem(index: number): Grupo {
    return ColeccionGrupos.grupos[index];
  }

  /**
   * Método que ordena los grupos por nombre alfabéticamente
   * @method ordenarGruposPorNombreAlfabetico
   * @param ascendente
   * @returns void
   */
  ordenarGruposPorNombreAlfabetico(ascendente: boolean): void {
    if (ascendente) {
      ColeccionGrupos.grupos.sort((a, b) => a.GetNombre().localeCompare(b.GetNombre()));
    } else {
      ColeccionGrupos.grupos.sort((a, b) => b.GetNombre().localeCompare(a.GetNombre()));
    }
  }

  /**
   * Método que ordena los grupos por distancia recorrida
   * @method ordenarGruposPorDistanciaRecorrida
   * @param ascendente
   * @param periodo
   */
  ordenarGruposPorDistanciaRecorrida(ascendente: boolean, periodo: number): void {
    if (!ascendente) {
      switch (periodo) {
      case 0:
        ColeccionGrupos.grupos.sort((a, b) => a.GetEstadisticas()[0][a.GetEstadisticas()[0].length-1] - b.GetEstadisticas()[0][a.GetEstadisticas()[0].length-1]);
        break;
      case 1:
        ColeccionGrupos.grupos.sort((a, b) => a.GetEstadisticas()[1][a.GetEstadisticas()[0].length-1] - b.GetEstadisticas()[1][a.GetEstadisticas()[0].length-1]);
        break;
      case 2:
        ColeccionGrupos.grupos.sort((a, b) => a.GetEstadisticas()[2][a.GetEstadisticas()[0].length-1] - b.GetEstadisticas()[2][a.GetEstadisticas()[0].length-1]);
      break;
      }
    }
    else {
      switch (periodo) {
      case 0:
        ColeccionGrupos.grupos.sort((a, b) => b.GetEstadisticas()[0][a.GetEstadisticas()[0].length-1] - a.GetEstadisticas()[0][a.GetEstadisticas()[0].length-1]);
        break;
      case 1:
        ColeccionGrupos.grupos.sort((a, b) => b.GetEstadisticas()[1][a.GetEstadisticas()[0].length-1] - a.GetEstadisticas()[1][a.GetEstadisticas()[0].length-1]);
        break;
      case 2:
        ColeccionGrupos.grupos.sort((a, b) => b.GetEstadisticas()[2][a.GetEstadisticas()[0].length-1] - a.GetEstadisticas()[2][a.GetEstadisticas()[0].length-1]);
      break;
      }
    }
  }

  /**
   * Método que ordena los grupos por cantidad de integrantes
   * @method ordenarGruposPorCantidadDeIntegrantes
   * @param ascendente
   * @returns void
   */
  ordenarGruposPorCantidadDeIntegrantes(ascendente: boolean): void {
    if (ascendente) {
      ColeccionGrupos.grupos.sort((a, b) => a.GetMiembrosGrupo().length - b.GetMiembrosGrupo().length);
    } else {
      ColeccionGrupos.grupos.sort((a, b) => b.GetMiembrosGrupo().length - a.GetMiembrosGrupo().length);
    }
  }

  /**
   * Método para unirse a un grupo
   * @method unirseGrupo
   * @param id
   * @param idGrupo
   */
  unirseGrupo(idGrupo: number, id: number): void {
    const grupo = ColeccionGrupos.grupos.find(grupo => grupo.GetId() === idGrupo);
    if (grupo) {
      grupo.unirseGrupo(id);
    }
  }

  /**
   * Metodo para salir de un grupo
   * @method salirGrupo
   * @param id
   * @param idGrupo
   */
  salirGrupo(idGrupo: number, id: number): void {
    const grupo = ColeccionGrupos.grupos.find(grupo => grupo.GetId() === idGrupo);
    if (grupo) {
      grupo.salirGrupo(id);
    }
  }
}
