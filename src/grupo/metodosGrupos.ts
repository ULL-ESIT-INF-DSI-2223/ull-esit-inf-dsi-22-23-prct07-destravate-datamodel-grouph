/**
 * Interfaz que contiene los métodos que se pueden aplicar a un grupo
 * @interface metodos_grupos
 * @property {Function} ordenarGruposPorNombreAlfabetico - Ordena los grupos por nombre alfabéticamente
 * @property {Function} ordenarGruposPorDistanciaRecorrida - Ordena los grupos por distancia recorrida
 * @property {Function} ordenarGruposPorCantidadDeIntegrantes - Ordena los grupos por cantidad de integrantes
 */
export interface metodos_grupos {
  ordenarGruposPorNombreAlfabetico: (ascendente: boolean) => void;
  ordenarGruposPorDistanciaRecorrida: (ascendente: boolean, periodo: number) => void;
  ordenarGruposPorCantidadDeIntegrantes: (ascendente: boolean) => void;
}
