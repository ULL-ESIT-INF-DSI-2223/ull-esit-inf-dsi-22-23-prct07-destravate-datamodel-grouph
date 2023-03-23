import { Usuario, tipo_historico} from './usuario/usuario';
import { ColeccionUsuarios } from './usuario/coleccionUsuarios';
import {Ruta} from './ruta/ruta';
import {Grupo} from './grupo/grupo';
import {Reto} from './reto/reto';
import { ColeccionGrupos } from './grupo/coleccionGrupos';
import { ColeccionRutas } from './ruta/coleccionRutas';
import { ColeccionRetos } from './reto/coleccionRetos';
import { JsonColeccionUsuarios } from './usuario/JsonColeccionUsuarios';
import { JsonColeccionGrupos } from './grupo/JsonColeccionGrupos';
import { JsonColeccionRutas } from './ruta/JsonColeccionRutas';
import { JsonColeccionRetos } from './reto/JsonColeccionRetos';
import readline from 'readline';
const inquirer = require('inquirer');

let coleccionUsuarios: JsonColeccionUsuarios;
let coleccionGrupos: JsonColeccionGrupos;
let coleccionRutas: JsonColeccionRutas;
let coleccionRetos: JsonColeccionRetos;

coleccionUsuarios = new JsonColeccionUsuarios();
coleccionGrupos = new JsonColeccionGrupos();
coleccionRutas = new JsonColeccionRutas();
coleccionRetos = new JsonColeccionRetos();


function ImprimirUsuario(entrada: JsonColeccionUsuarios): void {
  let variable = entrada.getUsuarios();
  variable.forEach((usuario) => {
    console.log(usuario.GetNombre(), usuario.GetId());
  });
}

function ImprimirRutas(coleccionRutas: JsonColeccionRutas): void {
  let variable = coleccionRutas.getRutas();
  variable.forEach((ruta) => {
    console.log(ruta.GetNombre(), ruta.GetId());
  });
}

function ImprimirInfoRuta(id : number) :void {
  if(coleccionRutas.getRuta(id) !== undefined){
    let variable = coleccionRutas.getRuta(id);
    console.log("La información de la ruta es: ");
    console.log("Nombre: ", variable.GetNombre());
    console.log("Id: ", variable.GetId());
    console.log("Localización de inicio: ", variable.GetGeoIni());
    console.log("Localización de fin: ", variable.GetGeoFin());
    console.log("Longitud: ", variable.GetLongitud());
    console.log("Desnivel: ", variable.GetDesnivel());
    console.log("Actividad: ", variable.GetActividad());
    console.log("Calificación: ", variable.GetCalificacion());
    console.log("Id del creador: ", variable.GetIdCreador());
    console.log("Id de los miembros: ", variable.GetUsuarios());
  }
  else {
    console.log("No existe la ruta");
  }
}

function ImprimirGrupos(coleccionGrupos: JsonColeccionGrupos) {
  let variable = coleccionGrupos.getGrupos();
  variable.forEach((grupo) => {
    console.log(grupo.GetNombre(), grupo.GetId());
  });
}

function ImprimirRetos (coleccionRetos: JsonColeccionRetos) : void {
  let variable = coleccionRetos.getRetos();
  variable.forEach((reto) => {
    console.log(reto.GetNombre(), reto.GetId());
  });
}

/**
 * comandosMenu
 */
enum ComandosMenu {
  BorrarUsuario = 'Borrar usuario',
  aniadirAmigo = 'Añadir un amigo',
  eliminarAmigo = 'Eliminar un amigo',
  promptMostrarUsuarios = 'Mostrar usuarios',
  CrearRuta = 'Crear ruta',
  BorrarRuta = 'Borrar ruta',
  MostrarRutas = 'Mostrar rutas',
  CrearGrupo = 'Crear grupo',
  BorrarGrupo = 'Borrar grupo',
  salirGrupo = 'Salir de un grupo',
  MostrarGrupos = 'Mostrar grupos',
  UnirseAGrupo = 'Unirse a un grupo',
  CrearReto = 'Crear reto',
  BorrarReto = 'Borrar reto',
  MostrarRetos = 'Mostrar retos',
  Salir = 'Salir'
}

/**
 * comandosIniciales
 */
enum comandosIniciales {
  CrearUsuario = 'Crear usuario',
  IniciarSesion = 'Iniciar sesión',
  Salir = 'Salir'
}

/**
 * comandosOrdenarRutas
 */
enum comandosOrdenarRutas {
  OrdenAlfabeticoAscendente = 'Orden alfabético ascendente',
  OrdenAlfabeticoDescendente = 'Orden alfabético descendente',
  CantidadDeUsuariosAscendente = 'Cantidad de usuarios ascendente',
  CantidadDeUsuariosDescendente = 'Cantidad de usuarios descendente',
  LongitudDeRutasAscendente = 'Longitud de rutas ascendente',
  LongitudDeRutasDescendente = 'Longitud de rutas descendente',
  CalificacionMediaAscendente = 'Calificación media ascendente',
  CalificacionMediaDescendente = 'Calificación media descendente',
  ActividadAscendente = 'Por actividad ascendente',
  ActividadDescendente = 'Por actividad descendente',
}

/**
 * comandosOrdenarUsuarios
 */
enum comandosOrdenarUsuarios {
  OrdenAlfabeticoAscendente = 'Orden alfabético ascendente',
  OrdenAlfabeticoDescendente = 'Orden alfabético descendente',
  PorCantidadDeKmAscendenteSemanal = 'Por cantidad de km ascendente esta semana',
  PorCantidadDeKmDescendenteSemanal = 'Por cantidad de km descendente esta semana',
  PorCantidadDeKmAscendenteMensual = 'Por cantidad de km ascendente este mes',
  PorCantidadDeKmDescendenteMensual = 'Por cantidad de km descendente este mes',
  PorCantidadDeKmAscendenteAnual = 'Por cantidad de km ascendente este año',
  PorCantidadDeKmDescendenteAnual = 'Por cantidad de km descendente este año',
}

/**
 * comandosOrdenarGrupos
 */
enum comandosOrdenarGrupos {
  OrdenAlfabeticoAscendente = 'Orden alfabético ascendente',
  OrdenAlfabeticoDescendente = 'Orden alfabético descendente',
  PorCantidadDeKmAscendenteSemanal = 'Por cantidad de km ascendente esta semana',
  PorCantidadDeKmDescendenteSemanal = 'Por cantidad de km descendente esta semana',
  PorCantidadDeKmAscendenteMensual = 'Por cantidad de km ascendente este mes',
  PorCantidadDeKmDescendenteMensual = 'Por cantidad de km descendente este mes',
  PorCantidadDeKmAscendenteAnual = 'Por cantidad de km ascendente este año',
  PorCantidadDeKmDescendenteAnual = 'Por cantidad de km descendente este año',
  CantidadDeMiembrosAscendente = 'Cantidad de miembros ascendente',
  CantidadDeMiembrosDescendente = 'Cantidad de miembros descendente',
}

/**
 * comandosOrdenarRetos
 */
enum comandosOrdenarRetos {
  OrdenAlfabeticoAscendente = 'Orden alfabético ascendente',
  OrdenAlfabeticoDescendente = 'Orden alfabético descendente',
  PorCantidadDeKmAscendente = 'Por cantidad de km ascendente',
  PorCantidadDeKmDescendente = 'Por cantidad de km descendente',
  CantidadDeMiembrosAscendente = 'Cantidad de miembros ascendente',
  CantidadDeMiembrosDescendente = 'Cantidad de miembros descendente',
}

/**
 * comandos seleccion mostrar info  de las rutas
 */
enum comandosSeleccionMostrarInfoRutas {
  MostrarInfoRuta = 'Mostrar información de una ruta',
  MostrarRutas = 'Mostrar listado de rutas',
}

enum comandosVolverMenu {
  VolverMenu = 'Volver al menú principal',
  Salir = 'Salir'
}

/**
 * Pregunta al usuario qué comando desea ejecutar
 * y ejecuta el comando correspondiente.
 * @param coleccionUsuarios Colección de usuarios
 */
function promptCrearUsuario() : void {
  console.clear();
  inquirer.prompt([
    {
      type: 'input',
      name: 'nombre',
      message: 'Introduce el nombre del usuario'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Introduce el id del usuario'
    },
    {
      type: 'input',
      name: 'actividades',
      message: 'Introduce el numero de actividades del usuario'
    },
    {
      type: 'input',
      name: 'amigos',
      message: 'Introduce los amigos del usuario',
      filter: function(input: string) {
        // Convertir la entrada en un array de enteros
        return input.split(',').map(numero => parseInt(numero));
      },
    },
    {
      type : 'input',
      name : 'grupos_amigos',
      message : 'Introduce los grupos de amigos del usuario',
      filter: function(input: string) {
        // Convertir la entrada en un array de arrays de enteros
        const grupos = input.split('.');
        return grupos.map(grupo => grupo.split(',').map(numero => parseInt(numero)));
      },
    },
    {
      type: 'input',
      name: 'estadisticas',
      message: 'Introduce las estadisticas del usuario',
      filter: function(input: string) {
        // Convertir la entrada en un array de arrays de enteros
        const grupos = input.split('.');
        return grupos.map(grupo => grupo.split(',').map(numero => parseInt(numero)));
      },
    },
    {
      type : 'input',
      name : 'rutas_favoritas',
      message : 'Introduce las rutas favoritas del usuario',
      filter: function(input) {
        // Convertir la entrada en un array de enteros
        return input.split(',').map(numero => parseInt(numero));
      },
    },
    {
      type : 'input',
      name : 'retos',
      message : 'Introduce los retos del usuario',
      filter: function(input) {
        // Convertir la entrada en un array de enteros
        return input.split(',').map(numero => parseInt(numero));
      },
    },
    {
      type : 'input',
      name : 'historicos',
      message : 'Introduce los historicos del usuario',
      filter: function(input) {
        // Convertir la entrada en un array de arrays con elementos de cadena y número
        const arrays = input.split('.');
        const result = [];
        for (let i = 0; i < arrays.length; i++) {
          const elementos = arrays[i].split(',');
          const texto = elementos[0];
          const numero = parseInt(elementos[1]);
          result.push([texto, numero]);
        }
        return result;
      },
    },
    ]).then((respuestas) => {
      //funcion que revisa si ya existe un usuario con ese id
      if (coleccionUsuarios.getUsuario(parseInt(respuestas.id)) !== null) {
        console.log('Ya existe un usuario con ese id');
        return;
      }
      const nuevoUsuario = new Usuario(respuestas.nombre, parseInt(respuestas.id), parseInt(respuestas.actividades), respuestas.amigos,
      respuestas.grupos_amigos, respuestas.estadisticas, respuestas.rutas_favoritas, respuestas.retos, respuestas.historicos);
      coleccionUsuarios.addUsuario(nuevoUsuario);
      console.log('Usuario creado exitosamente.');
      console.log(coleccionUsuarios.getUsuarios());
      main(nuevoUsuario.GetId());
    });
}

/**
 * Muestra los usuarios
 * @returns {void}
 */
function promptMostrarUsuarios() {
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'id',
    message: '¿Cómo quiere ordenar los usuarios?',
    choices: Object.values(comandosOrdenarUsuarios)
  }).then((respuestas) => {
    switch(respuestas['id']) {
      case comandosOrdenarUsuarios.OrdenAlfabeticoAscendente:
        coleccionUsuarios.ordenarUsuariosPorNombreAlfabetico(true);
        ImprimirUsuario(coleccionUsuarios);
        break;
      case comandosOrdenarUsuarios.OrdenAlfabeticoDescendente:
        coleccionUsuarios.ordenarUsuariosPorNombreAlfabetico(false);
        ImprimirUsuario(coleccionUsuarios);
        break;
      case comandosOrdenarUsuarios.PorCantidadDeKmAscendenteAnual:
        coleccionUsuarios.ordenarUsuariosPorDistanciaRecorrida(true,2);
        ImprimirUsuario(coleccionUsuarios);
        break;
      case comandosOrdenarUsuarios.PorCantidadDeKmDescendenteAnual:
        coleccionUsuarios.ordenarUsuariosPorDistanciaRecorrida(false,2);
        ImprimirUsuario(coleccionUsuarios);
        break;
      case comandosOrdenarUsuarios.PorCantidadDeKmAscendenteMensual:
        coleccionUsuarios.ordenarUsuariosPorDistanciaRecorrida(true,1);
        ImprimirUsuario(coleccionUsuarios);
        break;
      case comandosOrdenarUsuarios.PorCantidadDeKmDescendenteMensual:
        coleccionUsuarios.ordenarUsuariosPorDistanciaRecorrida(false,1);
        ImprimirUsuario(coleccionUsuarios);
        break;
      case comandosOrdenarUsuarios.PorCantidadDeKmAscendenteSemanal:
        coleccionUsuarios.ordenarUsuariosPorDistanciaRecorrida(true,0);
        ImprimirUsuario(coleccionUsuarios);
        break;
      case comandosOrdenarUsuarios.PorCantidadDeKmDescendenteSemanal:
        coleccionUsuarios.ordenarUsuariosPorDistanciaRecorrida(false,0);
        ImprimirUsuario(coleccionUsuarios);
        break;
    }
  });
}

/**
 * funcion que comprueba si un usuario existe y retorna su id
 * @return number
 * @param id
 */
function IniciarSesion(id: number) : number {
  let variable = coleccionUsuarios.getUsuarios();
  let i = 0;
  for (i = 0; i < variable.length; i++) {
    if (variable[i].GetId() === id) {
      main(id);
    }
  }
  console.log('El usuario no existe');
  return 0;
}


/**
 * Borra un usuario
 * @returns {void}
 */
function BorrarUsuario(idUsuarioCreador:number): void {
  let variable = coleccionUsuarios.getNumeroUsuarios();
  coleccionUsuarios.deleteUsuario(idUsuarioCreador);
  if (variable === coleccionUsuarios.getNumeroUsuarios()) {
    console.log('El usuario no existe');
  }
  else {
    console.log('Usuario borrado exitosamente');
  }
}

/**
 * añadir un amigo
 * @returns {void}
 * @param idUsuario
 */
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

/**
 * eliminar un amigo
 * @returns {void}
 * @param idUsuario
 */
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


/**
 * Crea una ruta
 * @returns {void}
 */
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

/**
 * Borra una ruta
 * @returns {void}
 */
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

/**
 * Muestra las rutas
 * @returns {void}
 */
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

/**
 * Crea un grupo
 * @returns {void}
 */
function promptCrearGrupo (idUsuarioCreador:number) : void {
  console.clear();
  inquirer.prompt([
  {
    type: 'input',
    name: 'nombre',
    message: 'Introduce el nombre del grupo'
  },
  {
    type: 'input',
    name: 'id',
    message: 'Introduce el id del grupo'
  },
  {
    type: 'input',
    name: 'miembros',
    message: 'Introduce los usuarios del grupo',
    filter: function(input) {
      // Convertir la entrada en un array de enteros
      return input.split(',').map(numero => parseInt(numero));
    },
  },
  {
    type: 'input',
    name: 'estadisticas',
    message: 'Introduce las estadisticas del grupo',
    filter: function(input: string) {
      // Convertir la entrada en un array de arrays de enteros
      const grupos = input.split('.');
      return grupos.map(grupo => grupo.split(',').map(numero => parseInt(numero)));
    },
  },
  {
    type: 'input',
    name: 'clasificacion',
    message: 'Introduce la clasificacion',
    filter: function(input) {
      // Convertir la entrada en un array de enteros
      return input.split(',').map(numero => parseInt(numero));
    },
  },
  {
    type: 'input',
    name: 'rutas',
    message: 'Introduce las rutas favoritas del grupo',
    filter: function(input) {
      // Convertir la entrada en un array de enteros
      return input.split(',').map(numero => parseInt(numero));
    },
  },
  {
    type: 'input',
    name: 'historicos',
    message: 'Introduce los historicos del grupo',
    filter: function(input) {
      // Convertir la entrada en un array de arrays con elementos de cadena y número
      const arrays = input.split('.');
      const result = [];
      for (let i = 0; i < arrays.length; i++) {
        const elementos = arrays[i].split(',');
        const texto = elementos[0];
        const numero = parseInt(elementos[1]);
        result.push([texto, numero]);
      }
      return result;
    },
  }]).then((respuestas) => {
    const nuevoGrupo = new Grupo(parseInt(respuestas.id), respuestas.nombre, respuestas.miembros, respuestas.estadisticas,
    respuestas.clasificacion, respuestas.rutas, respuestas.historicos, idUsuarioCreador);
    coleccionGrupos.addGrupo(nuevoGrupo);
    console.log('Grupo creado exitosamente.');
  });
}

/**
 * Borra un grupo
 * @returns {void}
 */
function promptBorrarGrupo (idUsuarioCreador: number) : void {
  console.clear();
  inquirer.prompt({
    type: 'input',
    name: 'id',
    message: 'Introduce el id del grupo que quieres borrar'
  }).then((respuestas) => {
    if (coleccionGrupos.getGrupo(parseInt(respuestas.id)) !== undefined) {
      if (idUsuarioCreador === coleccionGrupos.getGrupo(parseInt(respuestas.id)).GetIdCreador()) {
        coleccionGrupos.deleteGrupo(parseInt(respuestas.id));
        console.log('Grupo borrado exitosamente');
      }
      else {
        console.log('No puedes borrar un grupo que no has creado');
      }
    }
    else {
      console.log('El grupo no existe');
    }
  });
}

/**
 * Muestra los grupos
 * @returns {void}
 */
function MostrarGrupos() {
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'id',
    message: '¿Cómo quiere ordenar los grupos?',
    choices: Object.values(comandosOrdenarGrupos)
  }).then((respuestas) => {
    switch(respuestas['id']) {
      case comandosOrdenarGrupos.OrdenAlfabeticoAscendente:
        coleccionGrupos.ordenarGruposPorNombreAlfabetico(true);
        ImprimirGrupos(coleccionGrupos);
        break;
      case comandosOrdenarGrupos.OrdenAlfabeticoDescendente:
        coleccionGrupos.ordenarGruposPorNombreAlfabetico(false);
        ImprimirGrupos(coleccionGrupos);
        break;
      case comandosOrdenarGrupos.CantidadDeMiembrosAscendente:
        coleccionGrupos.ordenarGruposPorCantidadDeIntegrantes(true);
        ImprimirGrupos(coleccionGrupos);
        break;
      case comandosOrdenarGrupos.CantidadDeMiembrosDescendente:
        coleccionGrupos.ordenarGruposPorCantidadDeIntegrantes(false);
        ImprimirGrupos(coleccionGrupos);
        break;
      case comandosOrdenarGrupos.PorCantidadDeKmAscendenteSemanal:
        coleccionGrupos.ordenarGruposPorDistanciaRecorrida(true,0);
        ImprimirGrupos(coleccionGrupos);
        break;
      case comandosOrdenarGrupos.PorCantidadDeKmDescendenteSemanal:
        coleccionGrupos.ordenarGruposPorDistanciaRecorrida(false,0);
        ImprimirGrupos(coleccionGrupos);
        break;
      case comandosOrdenarGrupos.PorCantidadDeKmAscendenteMensual:
        coleccionGrupos.ordenarGruposPorDistanciaRecorrida(true,1);
        ImprimirGrupos(coleccionGrupos);
        break;
      case comandosOrdenarGrupos.PorCantidadDeKmDescendenteMensual:
        coleccionGrupos.ordenarGruposPorDistanciaRecorrida(false,1);
        ImprimirGrupos(coleccionGrupos);
        break;
      case comandosOrdenarGrupos.PorCantidadDeKmAscendenteAnual:
        coleccionGrupos.ordenarGruposPorDistanciaRecorrida(true,2);
        ImprimirGrupos(coleccionGrupos);
        break;
    }
  });
}

/**
 * añade un usuario a un grupo
 * @returns {void}
 */
function promptAnadirUsuarioAGrupo (idUsuario: number) : void {
  console.clear();
  inquirer.prompt([
  {
    type: 'input',
    name: 'idGrupo',
    message: 'Introduce el id del grupo al que te quieres unir'
  },]).then((respuestas) => {
    if (coleccionGrupos.getGrupo(parseInt(respuestas.idGrupo)).GetMiembrosGrupo().includes(idUsuario)) {
      console.log('El usuario ya esta en el grupo');
    }
    else {
      if (coleccionGrupos.getGrupo(parseInt(respuestas.idGrupo)) !== undefined) {
        coleccionGrupos.unirseGrupo(parseInt(respuestas.idGrupo), idUsuario);
        console.log('Usuario añadido al grupo');
      }
      else {
        console.log('El grupo no existe');
      }
    }
  });
}

/**
 * Elimina un usuario de un grupo
 * @returns {void}
 */
function promptEliminarUsuarioDeGrupo (idUsuario: number) : void {
  console.clear();
  inquirer.prompt([
  {
    type: 'input',
    name: 'idGrupo',
    message: 'Introduce el id del grupo del que quieres salir'
  },]).then((respuestas) => {
    if (coleccionGrupos.getGrupo(parseInt(respuestas.idGrupo)) !== undefined) {
      coleccionGrupos.salirGrupo(parseInt(respuestas.idGrupo),idUsuario);
      console.log('Se ha salido del grupo correctamente');
    }
    else {
      console.log('El grupo no existe');
    }
  }
  );
}

/**
 * Crea un reto
 * @returns {void}
 */
function promptCrearReto (idUsuarioCreador:number) : void {
  console.clear();
  inquirer.prompt([
  {
    type: 'input',
    name: 'nombre',
    message: 'Introduce el nombre del reto'
  },
  {
    type: 'input',
    name: 'id',
    message: 'Introduce el id del reto'
  },
  {
    type: 'input',
    name: 'rutas',
    message: 'Introduce los rutas del reto',
    filter: function(input) {
      // Convertir la entrada en un array de enteros
      return input.split(',').map(palabra => palabra);
    },
  },
  {
    type: 'input',
    name: 'tipo',
    message: 'Introduce el tipo del reto'
  },
  {
    type: 'input',
    name: 'kilometros',
    message: 'Introduce los kilómetros del reto'
  },
  {
    type: 'input',
    name: 'usuarios',
    message: 'Introduce los usuarios del reto',
    filter: function(input) {
      // Convertir la entrada en un array de enteros
      return input.split(',').map(numero => parseInt(numero));
    },
  }]).then((respuestas) => {
    const nuevoReto = new Reto(parseInt(respuestas.id), respuestas.nombre, respuestas.rutas, parseInt(respuestas.tipo),
    parseInt(respuestas.kilometros), respuestas.usuarios, idUsuarioCreador);
    coleccionRetos.addReto(nuevoReto);
    console.log('Reto creado exitosamente.');
  });
}

/**
 * Borra un reto
 * @returns {void}
 */
function promptBorrarReto (idUsuarioCreador: number) : void {
  console.clear();
  inquirer.prompt({
    type: 'input',
    name: 'id',
    message: 'Introduce el id del reto que quieres borrar'
  }).then((respuestas) => {
    if (coleccionRetos.getReto(parseInt(respuestas.id)) !== undefined) {
      if (idUsuarioCreador === coleccionRetos.getReto(parseInt(respuestas.id)).GetIdCreador()) {
        coleccionRetos.deleteReto(parseInt(respuestas.id));
        console.log('Reto borrado exitosamente');
      }
      else {
        console.log('No puedes borrar un reto que no has creado');
      }
    }
    else {
      console.log('El reto no existe');
    }
  });
}

/**
 * Muestra los retos
 * @returns {void}
 */
function MostrarRetos() {
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'id',
    message: '¿Cómo quiere ordenar los retos?',
    choices: Object.values(comandosOrdenarRetos)
  }).then((respuestas) => {
    switch(respuestas['id']) {
      case comandosOrdenarRetos.OrdenAlfabeticoAscendente:
        coleccionRetos.ordenarRetosPorNombreAlfabetico(true);
        ImprimirRetos(coleccionRetos);
        break;
      case comandosOrdenarRetos.OrdenAlfabeticoDescendente:
        coleccionRetos.ordenarRetosPorNombreAlfabetico(false);
        ImprimirRetos(coleccionRetos);
        break;
      case comandosOrdenarRetos.PorCantidadDeKmAscendente:
        coleccionRetos.ordenarRetosPorDistanciaRecorrida(true);
        ImprimirRetos(coleccionRetos);
        break;
      case comandosOrdenarRetos.PorCantidadDeKmDescendente:
        coleccionRetos.ordenarRetosPorDistanciaRecorrida(false);
        ImprimirRetos(coleccionRetos);
        break;
      case comandosOrdenarRetos.CantidadDeMiembrosAscendente:
        coleccionRetos.ordenarRetosPorCantidadDeUsuarios(true);
        ImprimirRetos(coleccionRetos);
        break;
      case comandosOrdenarRetos.CantidadDeMiembrosDescendente:
        coleccionRetos.ordenarRetosPorCantidadDeUsuarios(false);
        ImprimirRetos(coleccionRetos);
        break;
    }
  });
}

/**
 * Muestra el inicio de la aplicación
 */
function InicioMain() {
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'comando',
    message: '¿Qué quieres hacer?',
    choices: Object.values(comandosIniciales),
  }).then((respuestas) => {
    switch(respuestas['comando']) {
      case comandosIniciales.Salir:
        break;
      case comandosIniciales.CrearUsuario:
          promptCrearUsuario();
      break;
      case comandosIniciales.IniciarSesion:
        inquirer.prompt({
          type: 'input',
          name: 'id',
          message: 'Introduce el id del usuario',
        }).then((respuestas) => {
          IniciarSesion(parseInt(respuestas.id));
      });
    }
  });
}

/**
 * submenu de rutas
 * @returns {void}
 */
function submenu(): void{
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'comando',
    message: '¿Qué quieres ver?',
    choices: Object.values(comandosSeleccionMostrarInfoRutas),
  }).then((respuestas) => {
    switch(respuestas['comando']) {
      case comandosSeleccionMostrarInfoRutas.MostrarInfoRuta:
        inquirer.prompt({
          type: 'input',
          name: 'id',
          message: 'Introduce el id de la ruta',
        }).then((respuestas) => {
        ImprimirInfoRuta(parseInt(respuestas.id));
      });
        break;
      case comandosSeleccionMostrarInfoRutas.MostrarRutas:
        MostrarRutas();
        break;
      }
    })
}



/**
 * Crea un usuario
 * @returns {void}
 */
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
  });
  //funcion que se queda esperando a que el usuario pulse una tecla para volver al menu principal
}

InicioMain();
