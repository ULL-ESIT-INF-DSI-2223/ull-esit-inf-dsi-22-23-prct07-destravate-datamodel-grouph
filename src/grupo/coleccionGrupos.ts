import { Grupo } from './grupo';
import { metodos_grupos } from './metodosGrupos';

/**
 * Clase que contiene los grupos
 * @class ColeccionGrupos
 */
export class ColeccionGrupos implements metodos_grupos {
  private static grupos: Grupo[] = [];
  private static colecionGrupos: ColeccionGrupos;
  protected constructor() {
    ColeccionGrupos.grupos = [];
  }

  public static getInstance(): ColeccionGrupos {
    if (!ColeccionGrupos.colecionGrupos) {
      ColeccionGrupos.colecionGrupos = new ColeccionGrupos();
    }
    return ColeccionGrupos.colecionGrupos;
  }

  getGrupos(): Grupo[] {
    return ColeccionGrupos.grupos;
  }

  addGrupo(grupo: Grupo): void {
    ColeccionGrupos.grupos.push(grupo);
  }

  deleteGrupo(indice: number): void {
    if (indice < 0 || indice >= ColeccionGrupos.grupos.length) {
      return;
    }
    ColeccionGrupos.grupos.splice(indice, 1);
  }

  getGrupo(id: number): Grupo | undefined {
    return ColeccionGrupos.grupos.find(grupo => grupo.GetId() === id);
  }

  getNumeroGrupos(): number {
    return ColeccionGrupos.grupos.length;
  }

  getGrupoPorNombre(nombre: string): Grupo | undefined {
    return ColeccionGrupos.grupos.find(grupo => grupo.GetNombre() === nombre);
  }

  getItem(index: number): Grupo {
    return ColeccionGrupos.grupos[index];
  }

  ordenarGruposPorNombreAlfabetico(ascendente: boolean): void {
    if (ascendente) {
      ColeccionGrupos.grupos.sort((a, b) => a.GetNombre().localeCompare(b.GetNombre()));
    } else {
      ColeccionGrupos.grupos.sort((a, b) => b.GetNombre().localeCompare(a.GetNombre()));
    }
  }

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

  ordenarGruposPorCantidadDeIntegrantes(ascendente: boolean): void {
    if (ascendente) {
      ColeccionGrupos.grupos.sort((a, b) => a.GetMiembrosGrupo().length - b.GetMiembrosGrupo().length);
    } else {
      ColeccionGrupos.grupos.sort((a, b) => b.GetMiembrosGrupo().length - a.GetMiembrosGrupo().length);
    }
  }
}
