/**
 * Interfaz que contiene los métodos que se pueden aplicar a las rutas
 * @interface metodos_rutas
 * @property {Function} ordenarRutasPorNombreAlfabetico - Ordena las rutas por nombre alfabéticamente
 * @property {Function} ordenarRutasPorCantidadUsuarios - Ordena las rutas por cantidad de usuarios
 * @property {Function} ordenarRutasPorDistancia - Ordena las rutas por distancia
 * @property {Function} ordenarRutasPorCalificacionMedia - Ordena las rutas por calificación media
 * @property {Function} ordenarRutasPorActividad - Ordena las rutas por actividad
 */
export interface metodos_rutas {
  ordenarRutasPorNombreAlfabetico(ascendente: boolean): void;
  ordenarRutasPorCantidadUsuarios(ascendente: boolean): void;
  ordenarRutasPorDistancia(ascendente: boolean): void;
  ordenarRutasPorCalificacionMedia(ascendente: boolean): void;
  ordenarRutasPorActividad(ascendente: boolean): void;
}
