/**
 * Interfaz que define los métodos que se pueden aplicar a un usuario
 * @interface metodos_usuarios
 * @property {Function} ordenarUsuariosPorNombreAlfabetico - Ordena los usuarios por nombre alfabéticamente
 * @property {Function} ordenarUsuariosPorDistanciaRecorrida - Ordena los usuarios por distancia recorrida
 */
export interface metodos_usuarios {
  ordenarUsuariosPorNombreAlfabetico(ascendente: boolean): void;
  ordenarUsuariosPorDistanciaRecorrida(ascendente: boolean, periodo: number): void;
}
