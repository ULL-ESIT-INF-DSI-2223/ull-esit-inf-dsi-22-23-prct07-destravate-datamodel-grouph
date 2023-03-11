/**
 * Interfaz que define los métodos que se pueden aplicar a un reto
 * @interface metodos_retos
 * @property {Function} ordenarRetosPorNombreAlfabetico - Ordena los retos por nombre alfabéticamente
 * @property {Function} ordenarRetosPorDistanciaRecorrida - Ordena los retos por distancia recorrida
 * @property {Function} ordenarRetosPorCantidadDeUsuarios - Ordena los retos por tiempo
*/
export interface metodos_retos {
  ordenarRetosPorNombreAlfabetico(ascendente: boolean): void;
  ordenarRetosPorDistanciaRecorrida(ascendente: boolean, periodo: number): void;
  ordenarRetosPorCantidadDeUsuarios(ascendente: boolean): void;
}
