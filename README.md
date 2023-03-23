# Práctica 7: Modelo de un sistema de información que permite almacenar registros de actividades deportivas

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-grouph/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-grouph/actions/workflows/node.js.yml)

[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-grouph/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-grouph/actions/workflows/coveralls.yml)

Importante, para ejecutar la práctica, hacerlo con npm run dev.

En esta práctica se nos pide crear todo un modelo de un sistema de información de registros de actividades deportivas.
Para ello se nos pide crear estructuras de datos que modelen una ruta, un usuario, un reto y un grupo. 

## Implemencación de las clases correspondientes a Usuario, Grupo, Ruta y Reto

La implementación de estas clases la siguiente:

### Clase ruta
La implementación de la clase ruta es la siguiente:

```ts
export class Ruta {
  constructor(private id: number, private nombre: string, private geo_ini : [number, number], private geo_fin : [number, number],
    private longitud : number, private desnivel : number, private usuarios : number[], private actividad : number, private calificacion : number,
    private idCreador : number) {
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
   * @method GetGeoIni
    */
  GetGeoIni() {
    return this.geo_ini;
  }
  /**
   * @method GetGeoFin
   */
  GetGeoFin() {
    return this.geo_fin;
  }
  /**
   * @method GetLongitud
   */
  GetLongitud() {
    return this.longitud;
  }
  /**
   * @method GetDesnivel
   */
  GetDesnivel() {
    return this.desnivel;
  }
  /**
  * @method GetUsuarios
  */
  GetUsuarios() {
    return this.usuarios;
  }
  /**
   * @method GetActividad
   */
  GetActividad() {
    return this.actividad;
  }
  /**
   * @method GetCalificacion
   */
  GetCalificacion() {
    return this.calificacion;
  }

  /**
   * @method GetIdCreador
   */
  GetIdCreador(): number {
    return this.idCreador;
  }
}
```

En esta clase se modela una ruta, con sus atributos y métodos para obtenerlos. Contiene un identificador, un nombre, las coordenadas de inicio y fin, la longitud, el desnivel, los usuarios que la han realizado, la actividad que se ha realizado, la calificación que tiene y el identificador del creador de la ruta.
Además tiene los métodos para obtener cada uno de los atributos.

### Clase usuario
La implementación de la clase usuario es la siguiente:

```ts
export class Usuario{
  constructor(private nombre: string, private id : number, private actividades : number, private amigos : number[], private grupos_amigos : number[][],
  private estadisticas : number[][], private rutas_favoritas : number[], private retos : number [], private historicos : tipo_historico) {
  }
  /**
   * Funcion que devuelve el nombre del usuario
   */
  GetNombre() {
    return this.nombre;
  }
  /**
   *  Funcion que devuelve el id del usuario
  */
  GetId() {
    return this.id;
  }
  /**
   * Funcion que devuelve las actividades del usuario
   */
  GetActividades() {
    return this.actividades;
  }
  /**
   * Funcion que devuelve los amigos del usuario
   */
  GetAmigos() {
    return this.amigos;
  }
  /**
   * Funcion que devuelve los grupos de amigos del usuario
   */
  GetGruposAmigos() {
    return this.grupos_amigos;
  }
  /**
   * Funcion que devuelve las estadisticas del usuario
   */
  GetEstadisticas() {
    return this.estadisticas;
  }
  /**
   * Funcion que devuelve las rutas favoritas del usuario
   */
  GetRutasFavoritas() {
    return this.rutas_favoritas;
  }
  /**
   * Funcion que devuelve los retos del usuario
   */
  GetRetos() {
    return this.retos;
  }
  /**
   * Funcion que devuelve los historicos del usuario
   */
  GetHistoricos() {
    return this.historicos;
  }
  /**
   * Funcion que añade un amigo al usuario
   */
  aniadirAmigo(id_amigo : number) {
    this.amigos.push(id_amigo);
  }
  /**
   * Funcion que elimina un amigo del usuario
   */
  eliminarAmigo(id_amigo : number) {
    this.amigos.splice(this.amigos.indexOf(id_amigo), 1);
  }
}
```

En esta clase se modela un usuario, con sus atributos y métodos para obtenerlos. Contiene un nombre, un identificador, las actividades que ha realizado, los amigos que tiene, los grupos de amigos que tiene, las estadísticas que tiene, las rutas favoritas que tiene, los retos que tiene y los históricos que tiene.
Además tiene los métodos para obtener cada uno de los atributos y para añadir y eliminar amigos.

### Clase reto
La implementación de la clase reto es la siguiente:

```ts
export class Reto{
  constructor(private id: number, private nombre: string, private rutasFormantes: string[], private tipo: number,
    private kmTotales: number, private UsuariosActivos: number[], private idCreador: number) {
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

  /**
   * @method GetIdCreador
   */
  GetIdCreador() {
    return this.idCreador;
  }
}
```

En esta clase se modela un reto, con sus atributos y métodos para obtenerlos. Contiene un identificador, un nombre, las rutas formantes, el tipo, los kilómetros totales, los usuarios activos y el identificador del creador del reto.
Además tiene los métodos para obtener cada uno de los atributos.

### Clase grupo
La implementación de la clase grupo es la siguiente:

```ts
export type tipo_historico = (string | number)[][];

export class Grupo{
  constructor(private id: number, private nombre: string, private miembrosGrupo: number[],
    private estadisticas: number[][], private clasificacionUsuarios: number[], private RutasFavoritas: number[], private historicos : tipo_historico,
    private idCreador: number) {
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
   * @method GetMiembrosGrupo
   */
  GetMiembrosGrupo() {
    return this.miembrosGrupo;
  }

  /**
   * @method GetEstadisticas
   */
  GetEstadisticas() {
    return this.estadisticas;
  }

  /**
   * @method GetClasificacionUsuarios
   */
  GetClasificacionUsuarios() {
    return this.clasificacionUsuarios;
  }

  /**
   * @method GetRutasFavoritas
   */
  GetRutasFavoritas() {
    return this.RutasFavoritas;
  }

  /**
   * @method GetHistoricos
   */
  GetHistoricos() {
    return this.historicos;
  }

  /**
   * @method GetIdCreador
   */
  GetIdCreador() {
    return this.idCreador;
  }

  /**
   * añadirMiembro
   * @param id Identificador del usuario que se añade al grupo
   */
  unirseGrupo(id : number) {
    this.miembrosGrupo.push(id);
  }

  /**
   * eliminarMiembro
   * @param id Identificador del usuario que se elimina del grupo
   */
  salirGrupo(id: number) {
    for (let i = 0; i < this.miembrosGrupo.length; i++) {
      if (this.miembrosGrupo[i] === id) {
        this.miembrosGrupo.splice(i, 1);
      }
    }
  }
}
```

En esta clase se modela un grupo, con sus atributos y métodos para obtenerlos. Contiene un identificador, un nombre, los miembros del grupo, las estadísticas del grupo, la clasificación de los usuarios, las rutas favoritas del grupo, los históricos del grupo y el identificador del creador del grupo.
Además tiene los métodos para obtener cada uno de los atributos y para añadir y eliminar miembros del grupo.

## Implementación de las colecciones de usuarios, retos, grupos y rutas

Para facilitar el uso de colecciones de usuarios, retos, grupos y rutas, se han creado las siguientes clases:

### Clase colección de usuarios
La clase colección de usuarios, la cuál implementa la siguiente interfaz:

```ts
export interface metodos_usuarios {
  ordenarUsuariosPorNombreAlfabetico(ascendente: boolean): void;
  ordenarUsuariosPorDistanciaRecorrida(ascendente: boolean, periodo: number): void;
}
```

En esta interfaz se definen los métodos que se implementarán en la clase ColeccionUsuarios.
La implementación de la clase colección de usuarios es la siguiente:

```ts
export class ColeccionUsuarios implements metodos_usuarios {
  private static usuarios: Usuario[] = [];
  private static ColeccionUsuarios: ColeccionUsuarios;
  protected constructor() {
    ColeccionUsuarios.usuarios = [];
  }

  /**
   * Método que devuelve una instancia de la clase ColeccionUsuarios
   * @method getInstance
   * @returns ColeccionUsuarios
   */
  public static getInstance(): ColeccionUsuarios {
    if (!ColeccionUsuarios.ColeccionUsuarios) {
      ColeccionUsuarios.ColeccionUsuarios = new ColeccionUsuarios();
    }
    return ColeccionUsuarios.ColeccionUsuarios;
  }

  /**
   * Método que devuelve un array de usuarios
   * @method getUsuarios
   * @returns Usuario[]
  */
  getUsuarios(): Usuario[] {
    return ColeccionUsuarios.usuarios;
  }

  /**
   * Método que añade un usuario al array de usuarios
   * @method addUsuario
   * @param usuario
   * @returns void
   */
  addUsuario(usuario_entrada: Usuario) {
    //Comrpobar que no existe un usuario con el mismo id
    if (ColeccionUsuarios.usuarios.find(Usuarios => usuario_entrada.GetId() === Usuarios.GetId())) {
      return undefined;
    }
    ColeccionUsuarios.usuarios.push(usuario_entrada);
    return usuario_entrada;
  }

  /**
   * Método que elimina un usuario del array de usuarios
   * @method deleteUsuario
   * @param indice
   * @returns void
   */
  deleteUsuario(indice: number): void {
    if (indice < 0 || indice >= ColeccionUsuarios.usuarios.length) {
      return;
    }
    ColeccionUsuarios.usuarios.splice(indice, 1);
  }

  /**
   * Método que devuelve un usuario a partir de su id
   * @method getUsuario
   * @param id
   * @returns Usuario | undefined
   */
  getUsuario(id: number): Usuario | undefined {
    const usuario = ColeccionUsuarios.usuarios.find(usuario => usuario.GetId() === id);
    return usuario;
  }

  /**
   * Método que devuelve el número de usuarios
   * @method getNumeroUsuarios
   * @returns number
   */
  getNumeroUsuarios(): number {
    return ColeccionUsuarios.usuarios.length;
  }

  /**
   * Método que devuelve un usuario a partir de su nombre
   * @method getUsuarioPorNombre
   * @param nombre
   * @returns Usuario | undefined
   */
  getUsuarioPorNombre(nombre: string): Usuario | undefined {
    const usuario = ColeccionUsuarios.usuarios.find(usuario => usuario.GetNombre() === nombre);
    return usuario;
  }

  /**
   * Método que devuelve un usuario a partir de su indice
   * @method getUsuarioPorIndice
   * @param indice
   * @returns Usuario | undefined
   */
  getItem(indice: number): Usuario | undefined {
    if (indice < 0 || indice >= ColeccionUsuarios.usuarios.length) {
      return undefined;
    }
    return ColeccionUsuarios.usuarios[indice];
  }

  /**
   * Método que ordena el array de usuarios por nombre alfabéticamente, de forma ascendente o descendente según el parámetro
   * @method ordenarUsuariosPorNombreAlfabetico
   * @param ascendente
   * @returns void
   */
  ordenarUsuariosPorNombreAlfabetico(ascendente: boolean): void {
    if (ascendente) {
      ColeccionUsuarios.usuarios.sort((a, b) => a.GetNombre().localeCompare(b.GetNombre()));
    } else {
      ColeccionUsuarios.usuarios.sort((a, b) => b.GetNombre().localeCompare(a.GetNombre()));
    }
  }

  /**
   * Método que ordena el array de usuarios por distancia recorrida, de forma ascendente o descendente según 2 parámetros,
   * el primero indica si se ordena ascendente o descendente y el segundo indica si se ordena por la semana, el mes o el año
   * @method ordenarUsuariosPorDistanciaRecorrida
   * @param ascendente
   * @param periodo
   * @returns void
   */
  ordenarUsuariosPorDistanciaRecorrida(ascendente: boolean, periodo: number): void {
    if (!ascendente) {
      switch (periodo) {
      case 0:
        ColeccionUsuarios.usuarios.sort((a, b) => a.GetEstadisticas()[0][a.GetEstadisticas()[0].length-1] - b.GetEstadisticas()[0][a.GetEstadisticas()[0].length-1]);
        break;
      case 1:
        ColeccionUsuarios.usuarios.sort((a, b) => a.GetEstadisticas()[1][a.GetEstadisticas()[0].length-1] - b.GetEstadisticas()[1][a.GetEstadisticas()[0].length-1]);
        break;
      case 2:
        ColeccionUsuarios.usuarios.sort((a, b) => a.GetEstadisticas()[2][a.GetEstadisticas()[0].length-1] - b.GetEstadisticas()[2][a.GetEstadisticas()[0].length-1]);
      break;
      }
    }
    else {
      switch (periodo) {
      case 0:
        ColeccionUsuarios.usuarios.sort((a, b) => b.GetEstadisticas()[0][a.GetEstadisticas()[0].length-1] - a.GetEstadisticas()[0][a.GetEstadisticas()[0].length-1]);
        break;
      case 1:
        ColeccionUsuarios.usuarios.sort((a, b) => b.GetEstadisticas()[1][a.GetEstadisticas()[0].length-1] - a.GetEstadisticas()[1][a.GetEstadisticas()[0].length-1]);
        break;
      case 2:
        ColeccionUsuarios.usuarios.sort((a, b) => b.GetEstadisticas()[2][a.GetEstadisticas()[0].length-1] - a.GetEstadisticas()[2][a.GetEstadisticas()[0].length-1]);
      break;
      }
    }
  }

  /**
   * metodo para añadir amigos a un usuario
   * @method aniadirAmigo
   * @param id
   * @param idAmigo
   */
  aniadirAmigo(id: number, idAmigo: number): void {
    const usuario = ColeccionUsuarios.usuarios.find(usuario => usuario.GetId() === id);
    const amigo = ColeccionUsuarios.usuarios.find(usuario => usuario.GetId() === idAmigo);
    if (usuario && amigo) {
      usuario.aniadirAmigo(amigo.GetId());
    }
  }

  /**
   * metodo para eliminar amigos de un usuario
   * @method eliminarAmigo
   * @param id
   * @param idAmigo
   */
  eliminarAmigo(id: number, idAmigo: number): void {
    const usuario = ColeccionUsuarios.usuarios.find(usuario => usuario.GetId() === id);
    const amigo = ColeccionUsuarios.usuarios.find(usuario => usuario.GetId() === idAmigo);
    if (usuario && amigo) {
      usuario.eliminarAmigo(amigo.GetId());
    }
  }
}
```

Esta clase se encarga de gestionar los usuarios, es decir, añadir, eliminar, buscar, ordenar, etc.
Dicha clase es una clase singleton en la que se almacenan los usuarios de la aplicación. Lo hemos hecho de esta manera porque consideramos que solo deberia existir una colección de usuario en la que estén todos los usuarios de la aplicación.
En esta clase se declara el constructor, un método para poder recibir una instancia, un método para añadir un usuario, un método para eliminar un usuario, un método para buscar un usuario por su id, un método para buscar un usuario por su nombre, un método para buscar un usuario por su indice, un método para ordenar los usuarios por nombre alfabéticamente, un método para ordenar los usuarios por distancia recorrida, un método para añadir un amigo a un usuario y un método para eliminar un amigo de un usuario.
De esta manera se podrán ordenar los usuarios en función a lo que se prefiera en ese momento.

### Clase colección de rutas

La clase colección de rutas implementa la siguiente interfaz:

```ts
export interface metodos_rutas {
  ordenarRutasPorNombreAlfabetico(ascendente: boolean): void;
  ordenarRutasPorCantidadUsuarios(ascendente: boolean): void;
  ordenarRutasPorDistancia(ascendente: boolean): void;
  ordenarRutasPorCalificacionMedia(ascendente: boolean): void;
  ordenarRutasPorActividad(ascendente: boolean): void;
}
```

Esta interfaz contiene los métodos que se implementarán en la clase colección de rutas.
La implementación de la clase colección de rutas es la siguiente:

```ts
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
```

Esta clase se encarga de gestionar las rutas, es decir, de almacenarlas y de proporcionar métodos para poder acceder a ellas. En este caso, se ha utilizado el patrón Singleton para que sólo exista una instancia de esta clase en la aplicación, como comentamos con la clase colección de usuarios.
Esta clase contiene un constructor, un método estático que devuelve la instancia de la clase, un método que devuelve un array de rutas, un método que añade una ruta al array, un método que elimina una ruta del array, un método que devuelve una ruta a partir de su id, un método que devuelve el número de rutas, un método que devuelve una ruta a partir de su nombre, un método que devuelve una ruta a partir de su índice, un método que ordena las rutas por nombre alfabéticamente, un método que ordena las rutas por cantidad de usuarios, un método que ordena las rutas por distancia, un método que ordena las calificaciones medias de la ruta, un método que ordena las rutas por actividad.
De esta forma se consigue que las rutas se puedan ordenar de la forma que se desee, ya sea por nombre, por cantidad de usuarios, por distancia, por calificación media o por actividad.

### Clase colección de retos

La clase colección de retos implementa la siguiente interfaz:

```ts
export interface metodos_retos {
  ordenarRetosPorNombreAlfabetico(ascendente: boolean): void;
  ordenarRetosPorDistanciaRecorrida(ascendente: boolean, periodo: number): void;
  ordenarRetosPorCantidadDeUsuarios(ascendente: boolean): void;
}
```

Esta interfaz contiene los métodos que se implementarán en la clase colección de retos.
La implementación de la clase colección de retos es la siguiente:

```ts
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
```

Esta clase implementa la interfaz metodos_retos, que contiene los métodos que se implementarán en la clase colección de retos. 
Esta clase es una clase singleton, por lo que solo se puede instanciar una vez. Además contiene un array de retos, que es el array que contiene todos los retos que se han creado. Esta clase contiene los métodos necesarios para añadir, eliminar, obtener y ordenar los retos.
En la implementación tiene un constructor, que es privado, para que no se pueda instanciar la clase desde fuera de la misma. Además, tiene un método estático que devuelve una instancia de la clase, que es el método que se utiliza para instanciar la clase. Este método comprueba si ya se ha instanciado la clase, y si no es así, la instancia. Si ya se ha instanciado, devuelve la instancia que ya se había creado. Métodos para obtener un reto en función de su id, nombre o indice, para obtener el número de retos, para añadir un reto, para eliminar un reto, para ordenar los retos por nombre, distancia recorrida o cantidad de usuarios, y para obtener un reto en función de su id, nombre o indice.
De esta forma se puede ordenar la lista de retos de forma ascendente o descendente, y se puede obtener un reto en función de su id, nombre o indice.

### Clase colección de grupos

La clase colección de grupos implementa la siguiente interfaz:
  
```ts
export interface metodos_grupos {
  ordenarGruposPorNombreAlfabetico: (ascendente: boolean) => void;
  ordenarGruposPorDistanciaRecorrida: (ascendente: boolean, periodo: number) => void;
  ordenarGruposPorCantidadDeIntegrantes: (ascendente: boolean) => void;
}
```

Esta interfaz contiene los métodos que se implementarán en la clase colección de grupos.
La implementación de la clase colección de grupos es la siguiente:
  
```ts
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
```

Esta clase es la que se encarga de gestionar los grupos, es decir, añadir, eliminar, buscar, etc.
Como las anteriores, también es una clase singleton. Contiene un array de grupos, que es donde se almacenan los grupos. También contiene los métodos para añadir, eliminar, buscar, etc. de los grupos.
Contiene un constructor, un método para obtener una instancia de la clase, un método para añadir un grupo, un método para eliminar un grupo, un método para obtener un grupo, un método para obtener el número de grupos, un método para obtener un grupo por su nombre, un método para obtener un grupo por su índice, un método para ordenar los grupos por nombre alfabéticamente, un método para ordenar los grupos por distancia recorrida, un método para ordenar los grupos por cantidad de integrantes, un método para unirse a un grupo y un método para salir de un grupo.
De esta forma, se puede ordenar los grupos por nombre alfabéticamente, por distancia recorrida y por cantidad de integrantes. También se puede unirse a un grupo y salir de un grupo.

## Implementación de las clases que interactúan con la base de datos

Para la realización de la práctica se nos pedía utilizar *lowdb* para almacenar y gestionar los datos en un fichero JSON.
Para ello hemos creado las siguientes clases:

### Clase JSON colección de usuarios

La implementación de la clase JSON colección de usuarios es la siguiente:

```ts
type schemaType = {
  user: {nombre: string, id: number, actividades: number, amigos: number[], grupos_amigos: number[][],
    estadisticas: number[][], rutas_favoritas: number[], retos: number[], historicos: tipo_historico}[]
}

export class JsonColeccionUsuarios extends ColeccionUsuarios {
  private database: lowdb.LowdbSync<schemaType>;
  constructor () {
    super();
    this.database = lowdb(new FileSync("database.json"));
    if(this.database.has("user").value()) {
      let dbItems = this.database.get("user").value();
      dbItems.forEach((item) => {
        let usuario = new Usuario(item.nombre, item.id, item.actividades, item.amigos, item.grupos_amigos, item.estadisticas, item.rutas_favoritas, item.retos, item.historicos);
        this.addUsuario(usuario);
      });
    }
    else {
      this.database.set("user", []).write();
    }
  }

  /**
   * añade un usuario al array de usuarios y lo guarda en el fichero JSON
   * @param usuario_entrada
   * @returns resultado
   */
  addUsuario(usuario_entrada: Usuario) {
    let resultado = super.addUsuario(usuario_entrada);
    this.storeUsers();
    return resultado;
  }

  /**
   * elimina un usuario con id indicado del array de usuarios y lo guarda en el fichero JSON
   * @param idUsuario
   * @returns void
   */
  deleteUsuario(idUsuario: number): void {
    for (let i = 0; i < this.getUsuarios().length; i++) {
      if (this.getUsuarios()[i].GetId() === idUsuario) {
        this.getUsuarios().splice(i, 1);
      }
    }
    this.storeUsers();
  }

  /**
   * añade un amigo a un usuario y lo guarda en el fichero JSON
   * @param id
   * @param idAmigo
   * @returns void
   */
  aniadirAmigo(id: number, idAmigo: number): void {
    super.aniadirAmigo(id, idAmigo);
    this.storeUsers();
  }

  /**
   * elimina un amigo de un usuario y lo guarda en el fichero JSON
   * @param id
   * @param idAmigo
   * @returns void
   */
  eliminarAmigo(id: number, idAmigo: number): void {
    super.eliminarAmigo(id, idAmigo);
    this.storeUsers();
  }

  /**
   * guarda los usuarios en el fichero JSON
   * @returns void
   */
  private storeUsers() {
    this.database.set("user", this.getUsuarios()).write();
  }
}
```

Esta clase se encarga de que cada vez que se añade un usuario, se elimina un usuario, se añade un amigo o se elimina un amigo, se guarde en el fichero JSON.
Además de esto, también se encarga de que cuando se crea la clase, se lea el fichero JSON y se añadan los usuarios que hay en el fichero JSON al array de usuarios.

### Clase JSON colección de rutas

La implementación de la clase JSON colección de rutas es la siguiente:

```ts
type schemaType = {
  route: {id: number, nombre: string, geo_ini : [number, number], geo_fin : [number, number],
    longitud : number, desnivel : number, usuarios : number[], actividad : number, calificacion : number, idCreador:number}[]
}

export class JsonColeccionRutas extends ColeccionRutas {
  private database: lowdb.LowdbSync<schemaType>;
  constructor () {
    super();
    this.database = lowdb(new FileSync("database.json"));
    if(this.database.has("route").value()) {
      let dbItems = this.database.get("route").value();
      dbItems.forEach((item) => {
        let ruta = new Ruta(item.id, item.nombre, item.geo_ini, item.geo_fin, item.longitud, item.desnivel, item.usuarios, item.actividad, item.calificacion, item.idCreador);
        this.addRuta(ruta);
      });
    }
    else {
      this.database.set("route", []).write();
    }
  }

  /**
   * añade una ruta al array de rutas y lo guarda en el fichero JSON
   * @param Ruta_entrada
   * @returns resultado
   */
  addRuta(Ruta_entrada: Ruta) {
    let resultado = super.addRuta(Ruta_entrada);
    this.storeRoutes();
    return resultado;
  }

  /**
   * elimina una ruta del array de rutas y lo guarda en el fichero JSON
   * @param indice
   * @returns void
   */
  deleteRuta(indice: number): void {
    for(let i = 0; i < this.getRutas().length; i++) {
      if(this.getRutas()[i].GetId() === indice) {
        this.getRutas().splice(i, 1);
      }
    }
    this.storeRoutes();
  }

  /**
   * guarda las rutas en el fichero JSON
   * @returns void
   */
  private storeRoutes() {
    this.database.set("route", this.getRutas()).write();
  }
}
```

Esta clase se encarga de que cada vez que se añade una ruta, se elimina una ruta, se guarda en el fichero JSON.
Además de esto, también se encarga de que cuando se crea la clase, se lea el fichero JSON y se añadan las rutas que hay en el fichero JSON al array de rutas.

### Clase JSON colección de retos

La implementación de la clase JSON colección de retos es la siguiente:

```ts
type schemaType = {
  challenge:{ id: number, nombre: string, rutasFormantes: string[], tipo: number,
    kmTotales: number, UsuariosActivos: number[], idCreador: number}[]
}

export class JsonColeccionRetos extends ColeccionRetos {
  private database: lowdb.LowdbSync<schemaType>;
  constructor() {
    super();
    this.database = lowdb(new FileSync("database.json"));
    if(this.database.has("challenge").value()) {
      let dbItems = this.database.get("challenge").value();
      dbItems.forEach((item) => {
        let reto = new Reto(item.id, item.nombre, item.rutasFormantes, item.tipo, item.kmTotales, item.UsuariosActivos, item.idCreador);
        this.addReto(reto);
      });
    }
    else {
      this.database.set("challenge", []).write();
    }
  }

  /**
   * añade un reto al array de retos y lo guarda en el fichero JSON
   * @param reto_entrada
   * @returns resultado
   */
  addReto(reto_entrada: Reto) {
    let resultado = super.addReto(reto_entrada);
    this.storeChallenges();
    return resultado;
  }

  /**
   * elimina un reto del array de retos y lo guarda en el fichero JSON
   * @param id
   * @returns void
   */
  deleteReto(id: number): void {
    for (let i = 0; i < this.getRetos().length; i++) {
      if (this.getRetos()[i].GetId() === id) {
        this.getRetos().splice(i, 1);
      }
    }
    this.storeChallenges();
  }

  /**
   * guarda los retos en el fichero JSON
   * @returns void
   */
  private storeChallenges(): void {
    this.database.set("challenge", this.getRetos()).write();
  }
}
```

Esta clase se encarga de que cada vez que se añade un reto, se elimina un reto, se guarda en el fichero JSON.
Además de esto, también se encarga de que cuando se crea la clase, se lea el fichero JSON y se añadan los retos que hay en el fichero JSON al array de retos.

### Clase JSON colección de grupos

La implementación de la clase JSON colección de grupos es la siguiente:

```ts
type schemaType = {
  group:{ id: number, nombre: string, miembrosGrupo: number[],
    estadisticas: number[][], clasificacionUsuarios: number[], RutasFavoritas: number[], historicos : tipo_historico, idCreador :number }[]
}

export class JsonColeccionGrupos extends ColeccionGrupos {
  private database: lowdb.LowdbSync<schemaType>;
  constructor () {
    super();
    this.database = lowdb(new FileSync("database.json"));
    if(this.database.has("group").value()) {
      let dbItems = this.database.get("group").value();
      dbItems.forEach((item) => {
        let grupo = new Grupo(item.id, item.nombre, item.miembrosGrupo, item.estadisticas, item.clasificacionUsuarios, item.RutasFavoritas, item.historicos, item.idCreador);
        this.addGrupo(grupo);
      });
    }
    else {
      this.database.set("group", []).write();
    }
  }

  /**
   * añade un grupo al array de grupos y lo guarda en el fichero JSON
   * @param grupo_entrada
   * @returns resultado
   */
  addGrupo(grupo_entrada: Grupo) {
    let resultado = super.addGrupo(grupo_entrada);
    this.storeGroups();
    return resultado;
  }

  /**
   * elimina un grupo del array de grupos y lo guarda en el fichero JSON
   * @param id
   * @returns void
   */
  deleteGrupo(id: number): void {
    for (let i = 0; i < this.getGrupos().length; i++) {
      if (this.getGrupos()[i].GetId() === id) {
        this.getGrupos().splice(i, 1);
      }
    }
    this.storeGroups();
  }

  /**
   * añade un usuario al grupo y lo guarda en el fichero JSON
   * @param idGrupo
   * @param idUsuario
   */
  unirseGrupo(idGrupo: number, idUsuario: number): void {
    super.unirseGrupo(idGrupo, idUsuario);
    this.storeGroups();
  }

  /**
   * elimina un usuario del grupo y lo guarda en el fichero JSON
   * @param idGrupo
   * @param idUsuario
   */
  salirGrupo(idGrupo: number, idUsuario: number): void {
    super.salirGrupo(idGrupo, idUsuario);
    this.storeGroups();
  }


  /**
   * guarda los grupos en el fichero JSON
   * @returns void
   */
  private storeGroups(): void {
    this.database.set("group", this.getGrupos()).write();
  }
}
```

Esta clase se encarga de que cada vez que se añade un grupo, se elimina un grupo, se guarda en el fichero JSON.
Además de esto, también se encarga de que cuando se crea la clase, se lea el fichero JSON y se añadan los grupos que hay en el fichero JSON al array de grupos.

## Fichero principal (index.ts)

Este es el fichero principal de la aplicación. El usuario a la hora de ejecutar la aplicación interactuara con este fichero constantemente.

Para el correcto funcionamiento de este fichero, tras las importaciones. Lo primero que se ve son distintas funciones para mostrar por pantalla los usuarios, rutas,retos o grupos. Un ejmplo de estas funciones es la siguiente:

```ts

function ImprimirGrupos(coleccionGrupos: JsonColeccionGrupos) {
  let variable = coleccionGrupos.getGrupos();
  variable.forEach((grupo) => {
    console.log(grupo.GetNombre(), grupo.GetId());
  });
}
  
  ```

  Tras esto, en el codigo creamos los comandos para los distintos menus que vamos a usar. Nosotros usamos 7 distintos tanto para el menu principal como para los submenus. Un ejemplo de estos comandos es el siguiente:

  ```ts
  enum comandosOrdenarRetos {
  OrdenAlfabeticoAscendente = 'Orden alfabético ascendente',
  OrdenAlfabeticoDescendente = 'Orden alfabético descendente',
  PorCantidadDeKmAscendente = 'Por cantidad de km ascendente',
  PorCantidadDeKmDescendente = 'Por cantidad de km descendente',
  CantidadDeMiembrosAscendente = 'Cantidad de miembros ascendente',
  CantidadDeMiembrosDescendente = 'Cantidad de miembros descendente',
}

```

estos comandos son los que se muestran por pantalla y el usuario los selecciona para realizar una accion.

Tras esto, se empiezan a crear funciones para crear los, mostrar o borrar los disntintos elementos de la aplicación. Al ser todo similares pero simplemente variando los campos a rellenar, solo mostraremos un ejemplo de estas funciones. Un ejemplo de estas funciones es la siguiente:

```ts
function promptCrearRuta(idUsuarioCreador:number) : void {
  console.clear();
  inquirer.prompt([
  {
    type: 'input',
    name: 'nombre',
    message: 'Introduce el nombre de la ruta'
  },
  {
    type: 'input',
    name: 'id',
    message: 'Introduce el id de la ruta'
  },
  {
    type: 'input',
    name: 'punto_inicio',
    message: 'Introduce el punto de inicio de la ruta',
    filter: function(input) {
      // Convertir la entrada en un array de enteros
      return input.split(',').map(numero => parseInt(numero));
    },
  },
  {
    type: 'input',
    name: 'punto_fin',
    message: 'Introduce el punto de fin de la ruta',
    filter: function(input) {
      // Convertir la entrada en un array de enteros
      return input.split(',').map(numero => parseInt(numero));
    },
  },
  {
    type: 'input',
    name: 'distancia',
    message: 'Introduce la distancia de la ruta'
  },
  {
    type: 'input',
    name: 'desnivel',
    message: 'Introduce el desnivel de la ruta'
  },
  {
    type: 'input',
    name: 'usuarios',
    message: 'Introduce los usuarios de la ruta',
    filter: function(input) {
      // Convertir la entrada en un array de enteros
      return input.split(',').map(numero => parseInt(numero));
    },
  },
  {
    type: 'input',
    name: 'actividad',
    message: 'Introduce la actividad de la ruta'
  },
  {
    type: 'input',
    name: 'calificacion',
    message: 'Introduce la calificacion de la ruta'
  }]).then((respuestas) => {
    const nuevaRuta = new Ruta(parseInt(respuestas.id), respuestas.nombre, respuestas.punto_inicio, respuestas.punto_fin,
      parseInt(respuestas.distancia), parseInt(respuestas.desnivel), respuestas.usuarios, parseInt(respuestas.actividad), parseInt(respuestas.calificacion), idUsuarioCreador);
    coleccionRutas.addRuta(nuevaRuta);
    console.log('Ruta creada exitosamente.');
  });
}
```

Como se puede ver, en el codigo anterior, se crea una nueva ruta con los datos que el usuario ha introducido por pantalla. Tras esto, se añade la ruta al array de rutas y se guarda en el fichero JSON.

El codigo de borrar seria similar, solo que en vez de añadir la ruta al array de rutas, se elimina de este.

```ts
function promptBorrarRuta(idUsuarioCreador: number) : void {
  console.clear();
  inquirer.prompt({
    type: 'input',
    name: 'id',
    message: 'Introduce el id de la ruta que quieres borrar'
  }).then((respuestas) => {
    if (coleccionRutas.getRuta(parseInt(respuestas.id)) !== undefined) {
      if (idUsuarioCreador === coleccionRutas.getRuta(parseInt(respuestas.id)).GetIdCreador()) {
        coleccionRutas.deleteRuta(parseInt(respuestas.id));
        console.log('Ruta borrada exitosamente');
      }
      else {
        console.log('No puedes borrar una ruta que no has creado');
      }
    }
    else {
      console.log('La ruta no existe');
    }
  });
}
```

Añadir que aqui se comprueba si el usuario puede borrar o no los contenidos en funcion de si es el creador o no.

El siguiente ejemplo ya usa los comandos con los que el usuario interactua:

```ts
function MostrarRutas() {
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'id',
    message: '¿Cómo quiere ordenar las rutas?',
    choices: Object.values(comandosOrdenarRutas)
  }).then((respuestas) => {
    switch(respuestas['id']) {
      case comandosOrdenarRutas.OrdenAlfabeticoAscendente:
        coleccionRutas.ordenarRutasPorNombreAlfabetico(true);
        ImprimirRutas(coleccionRutas);
        break;
      case comandosOrdenarRutas.OrdenAlfabeticoDescendente:
        coleccionRutas.ordenarRutasPorNombreAlfabetico(false);
        ImprimirRutas(coleccionRutas);
        break;
      case comandosOrdenarRutas.CantidadDeUsuariosAscendente:
        coleccionRutas.ordenarRutasPorCantidadUsuarios(true);
        ImprimirRutas(coleccionRutas);
        break;
      case comandosOrdenarRutas.CantidadDeUsuariosDescendente:
        coleccionRutas.ordenarRutasPorCantidadUsuarios(false);
        ImprimirRutas(coleccionRutas);
      break;
      case comandosOrdenarRutas.LongitudDeRutasAscendente:
        coleccionRutas.ordenarRutasPorDistancia(true);
        ImprimirRutas(coleccionRutas);
        break;
      case comandosOrdenarRutas.LongitudDeRutasDescendente:
        coleccionRutas.ordenarRutasPorDistancia(false);
        break;
      case comandosOrdenarRutas.CalificacionMediaAscendente:
        coleccionRutas.ordenarRutasPorCalificacionMedia(true);
        ImprimirRutas(coleccionRutas);
        break;
      case comandosOrdenarRutas.CalificacionMediaDescendente:
        coleccionRutas.ordenarRutasPorCalificacionMedia(false);
        ImprimirRutas(coleccionRutas);
        break;
      case comandosOrdenarRutas.ActividadAscendente:
        coleccionRutas.ordenarRutasPorActividad(true);
        ImprimirRutas(coleccionRutas);
        break;
      case comandosOrdenarRutas.ActividadDescendente:
        coleccionRutas.ordenarRutasPorActividad(false);
        ImprimirRutas(coleccionRutas);
        break;
    }
  });
}
```

Como se puede ver, se crea un menu con los diferentes comandos de ordenacion y se ordenan las rutas en funcion de la opcion que el usuario haya elegido. Tras esto, se imprimen las rutas ordenadas.

Estas 3 funciones son similares pero variando los distintos campos y metodos de ordenacion.

Otras funciones similares que estan en algunas clases son las de añadir o elimiar, tanto amigos a un usuarios, como usuarios a un grupo. A la hora de añadir, un ejemplo es:
  
  ```ts
  function promptAniadirAmigo(idUsuario:number): void {
  console.clear();
  inquirer.prompt([
  {
    type: 'input',
    name: 'id',
    message: 'Introduce el id del usuario que quieres añadir como amigo'
  },
  ]).then((respuestas) => {
    //comprueba si el id introducido ya es su amigo
    if (coleccionUsuarios.getUsuario(idUsuario).GetAmigos().includes(parseInt(respuestas.id))) {
      console.log('El usuario ya es tu amigo');
    }
    else{
      if (coleccionUsuarios.getUsuario(parseInt(respuestas.id)) !== undefined) {
        coleccionUsuarios.aniadirAmigo(idUsuario, parseInt(respuestas.id));
        console.log('Amigo añadido exitosamente');
      }
      else {
        console.log('El usuario no existe');
      }
    }
  });
}
```

como se puede ver, se comprueba si el usuario existe y si ya es amigo del usuario que esta logueado. Tras esto, se añade el amigo al array de amigos del usuario.

Y para borrar el usuario, se hace lo siguiente:

```ts

function promptEliminarAmigo(idUsuario:number): void {
  console.clear();
  inquirer.prompt([
  {
    type: 'input',
    name: 'id',
    message: 'Introduce el id del usuario que quieres eliminar como amigo'
  },
  ]).then((respuestas) => {
    if (coleccionUsuarios.getUsuario(parseInt(respuestas.id)) !== undefined) {
      coleccionUsuarios.eliminarAmigo(idUsuario, parseInt(respuestas.id));
      console.log('Amigo eliminado exitosamente');
    }
    else {
      console.log('El usuario no existe');
    }
  });
}
```

Como se puede ver, se comprueba si el usuario existe y si es amigo del usuario que esta logueado. Tras esto, se elimina el amigo del array de amigos del usuario.

Por último, estan las funciones de los menus, en los que se usan los comandos mencionados anteriormente y donde se selecciona la opcion que se quiere ejecutar por el usuario. Un ejemplo de estos es:

```ts
function main(idUsuarioCreador: number): void {
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'comando',
    message: '¿Qué quieres hacer?',
    choices: Object.values(ComandosMenu),
  }).then((respuestas) => {
    switch(respuestas['comando']) {
      case ComandosMenu.Salir:
        break;
      case ComandosMenu.promptMostrarUsuarios:
        promptMostrarUsuarios();
        break;
      case ComandosMenu.aniadirAmigo:
        promptAniadirAmigo(idUsuarioCreador);
        break;
      case ComandosMenu.eliminarAmigo:
        promptEliminarAmigo(idUsuarioCreador);
        break;
      case ComandosMenu.BorrarUsuario:
        BorrarUsuario(idUsuarioCreador);
        break;
      case ComandosMenu.CrearRuta:
        promptCrearRuta(idUsuarioCreador);
        break;
      case ComandosMenu.MostrarRutas:
        submenu();
        break;
      case ComandosMenu.BorrarRuta:
        promptBorrarRuta(idUsuarioCreador);
        break;
      case ComandosMenu.CrearGrupo:
        promptCrearGrupo(idUsuarioCreador);
        break;
      case ComandosMenu.UnirseAGrupo:
        promptAnadirUsuarioAGrupo(idUsuarioCreador);
        break;
      case ComandosMenu.salirGrupo:
        promptEliminarUsuarioDeGrupo(idUsuarioCreador);
        break;
      case ComandosMenu.MostrarGrupos:
        MostrarGrupos();
        break;
      case ComandosMenu.BorrarGrupo:
        promptBorrarGrupo(idUsuarioCreador);
        break;
      case ComandosMenu.CrearReto:
        promptCrearReto(idUsuarioCreador);
        break;
      case ComandosMenu.MostrarRetos:
        MostrarRetos();
        break;
      case ComandosMenu.BorrarReto:
        promptBorrarReto(idUsuarioCreador);
        break;
    }
  })
}
```

Como se puede apreciar, se crea un menu con las distintas opciones que tiene el usuario y se ejecuta la funcion correspondiente a la opcion que el usuario haya elegido.


## Conclusiones

En esta práctica hemos podido poner a prueba todos nuestros conocimientos sobre todos los conceptos de la asignatura y dandonos cuenta de verdad todo lo que podemos llegar a hacer con los conocimientos actuales. También, el uso de las interfaces nos ha permitido crear una aplicación que se adapta a las necesidades de los usuarios y que es fácil de modificar y ampliar.
Por último, el aprender a utilizar una base de datos nos ha permitido crear una aplicación que es mucho más robusta y que puede ser utilizada por muchos usuarios a la vez y nos ha servido para aprender a utilizar una base de datos para futuros trabajos. 
