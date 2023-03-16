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

const inquirer = require('inquirer');



let coleccionUsuarios: JsonColeccionUsuarios;
let coleccionGrupos: JsonColeccionGrupos;
let coleccionRutas: JsonColeccionRutas;
let coleccionRetos: JsonColeccionRetos;

coleccionUsuarios = new JsonColeccionUsuarios();
const usuario1 = new Usuario('Usuario1', 1, 0, [2,3], [[1, 2],[1, 3]], [[1, 1, 1],[1, 1, 1],[1, 1, 1]], [1, 2], [1, 2], [['ruta1',1],['ruta2',2]]);
const usuario2 = new Usuario('Usuario2', 2, 2, [1,3], [[1, 2],[1, 3]], [[2, 2, 2],[2, 2, 2],[2, 2, 2]], [1, 2], [1, 2], [['ruta1',1],['ruta2',2]]);
const usuario3 = new Usuario('Usuario3', 3, 0, [1,2], [[1, 2],[1, 3]], [[3, 3, 3],[3, 3, 3],[3, 3, 3]], [1, 2], [1, 2], [['ruta1',1],['ruta2',2]]);
coleccionUsuarios.addUsuario(usuario1);
coleccionUsuarios.addUsuario(usuario2);
coleccionUsuarios.addUsuario(usuario3);

coleccionGrupos = new JsonColeccionGrupos();
const grupo1 = new Grupo(1, 'Grupo1', [1,2,3],[[1,1,1],[1,1,1],[1,1,1]], [1,2,3], [1,2,3],[['ruta1', 1],['ruta2',2]],1);
const grupo2 = new Grupo(2, 'Grupo2', [1,2,3,4],[[2,2,2],[2,2,2],[2,2,2]], [1,2,3], [1,2,3],[['ruta1', 1],['ruta2',2]],2);
coleccionGrupos.addGrupo(grupo1);
coleccionGrupos.addGrupo(grupo2);

coleccionRutas = new JsonColeccionRutas();
const ruta1 = new Ruta(1, 'ruta1', [1, 1], [2, 2], 20, 1, [1, 2, 3, 4], 4, 5,1);
const ruta2 = new Ruta(2, 'ruta2', [1, 1], [2, 2], 30, 1, [1, 2], 5, 6,2);
coleccionRutas.addRuta(ruta1);
coleccionRutas.addRuta(ruta2);

coleccionRetos = new JsonColeccionRetos();
const reto1 = new Reto(1, 'reto1',['ruta1','ruta2'], 0, 1000, [1,2,3],1);
const reto2 = new Reto(2, 'reto2',['ruta1','ruta2'], 1, 2000, [1,2,3,4],2);
coleccionRetos.addReto(reto1);
coleccionRetos.addReto(reto2);

/**
 * comandosMenu
 */
enum ComandosMenu {
  BorrarUsuario = 'Borrar usuario',
  MostrarUsuarios = 'Mostrar usuarios',
  CrearRuta = 'Crear ruta',
  BorrarRuta = 'Borrar ruta',
  MostrarRutas = 'Mostrar rutas',
  CrearGrupo = 'Crear grupo',
  BorrarGrupo = 'Borrar grupo',
  MostrarGrupos = 'Mostrar grupos',
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
      /**validate: function(input: string) {
        // Validar que la entrada es una lista separada por comas de números enteros
        const numeros = input.split(',');
        for (const numero of numeros) {
          if (!/^\d+$/.test(numero)) {
            return 'Debes ingresar una lista separada por comas de números enteros.';
          }
        }
        return true;
      },*/
      filter: function(input: string) {
        // Convertir la entrada en un array de enteros
        return input.split(',').map(numero => parseInt(numero));
      },
    },
    {
      type : 'input',
      name : 'grupos_amigos',
      message : 'Introduce los grupos de amigos del usuario',
      /**validate: function(input: string) {
        // Validar que la entrada es una lista separada por puntos de listas separadas por comas de números enteros
        const grupos = input.split('.');
        fComprobarUsuarioor (const grupo of grupos) {
          const numeros = grupo.split(',');
          for (const numero of numeros) {
            if (!/^\d+$/.test(numero)) {
              return 'Debes ingresar una lista separada por puntos de listas separadas por comas de números enteros.';
            }
          }
        }
        return true;
      },*/
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
      /**validate: function(input: string) {
        // Validar que la entrada es una lista separada por puntos de listas separadas por comas de números enteros
        const grupos = input.split('.');
        for (const grupo of grupos) {
          const numeros = grupo.split(',');
          for (const numero of numeros) {
            if (!/^\d+$/.test(numero)) {
              return 'Debes ingresar una lista separada por puntos de listas separadas por comas de números enteros.';
            }
          }
        }
        return true;
      },*/
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
      /**validate: function(input: string) {
        // Validar que la entrada es una lista separada por comas de números enteros
        const numeros = input.split(',');
        for (const numero of numeros) {
          if (!/^\d+$/.test(numero)) {
            return 'Debes ingresar una lista separada por comas de números enteros.';
          }
        }
        return true;
      },*/
      filter: function(input) {
        // Convertir la entrada en un array de enteros
        return input.split(',').map(numero => parseInt(numero));
      },
    },
    {
      type : 'input',
      name : 'retos',
      message : 'Introduce los retos del usuario',
      /**validate: function(input:string) {
        // Validar que la entrada es una lista separada por comas de números enteros
        const numeros = input.split(',');
        for (const numero of numeros) {
          if (!/^\d+$/.test(numero)) {
            return 'Debes ingresar una lista separada por comas de números enteros.';
          }
        }
        return true;
      },*/
      filter: function(input) {
        // Convertir la entrada en un array de enteros
        return input.split(',').map(numero => parseInt(numero));
      },
    },
    {
      type : 'input',
      name : 'historicos',
      message : 'Introduce los historicos del usuario',
      /**validate: function(input:string) {
        // Validar que la entrada es una lista separada por puntos de listas separadas por comas de números enteros
        const grupos = input.split('.');
        for (const grupo of grupos) {
          const numeros = grupo.split(',');
          for (const numero of numeros) {
            if (!/^\d+$/.test(numero)) {
              return 'Debes ingresar una lista separada por puntos de listas separadas por comas de números enteros.';
            }
          }
        }
        return true;
      },*/
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
function MostrarUsuarios() {
  console.clear();
  let variable = coleccionUsuarios.getUsuarios();
  variable.forEach((usuario) => {
    console.log(usuario.GetNombre(), usuario.GetId());
  });
}

/**
 * funcion que comprueba si un usuario existe y retorna su id
 * @return number
 * @param id
 */
function promptIniciarSesion(id: number) : number {
  let variable = coleccionUsuarios.getUsuarios();
  let i = 0;
  for (i = 0; i < variable.length; i++) {
    if (variable[i].GetId() === id) {
      main(id);
      //return id;
    }
  }
  console.log('El usuario no existe');
  return 0;
}


/**
 * Borra un usuario
 * @returns {void}
 */
function BorrarUsuario(idUsuarioCreador:number) {
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
    let variable = coleccionRutas.getNumeroRutas();
    if (idUsuarioCreador === coleccionRutas.getRuta(parseInt(respuestas.id)).GetIdCreador()) {
      coleccionRutas.deleteRuta(parseInt(respuestas.id));
      coleccionRutas.deleteRuta(parseInt(respuestas.id));
      if (variable === coleccionRutas.getNumeroRutas()) {
        console.log('La ruta no existe');
      }
      else {
        console.log('Ruta borrada exitosamente');
      }
    }
    else {
      console.log('No puedes borrar una ruta que no has creado');
    }
  });
}

/**
 * Muestra las rutas
 * @returns {void}
 */
function MostrarRutas() {
  console.clear();
  let variable = coleccionRutas.getRutas();
  variable.forEach((ruta) => {
    console.log(ruta.GetNombre(), ruta.GetId());
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
    let variable = coleccionGrupos.getNumeroGrupos();
    if (idUsuarioCreador === coleccionGrupos.getGrupo(parseInt(respuestas.id)).GetIdCreador()) {
      coleccionGrupos.deleteGrupo(parseInt(respuestas.id));
      coleccionGrupos.deleteGrupo(parseInt(respuestas.id));
      if (variable === coleccionGrupos.getNumeroGrupos()) {
        console.log('El grupo no existe');
      }
      else {
        console.log('Grupo borrado exitosamente');
      }
    }
    else {
      console.log('No puedes borrar un grupo que no has creado');
    }
  });
}

/**
 * Muestra los grupos
 * @returns {void}
 */
function MostrarGrupos() {
  console.clear();
  let variable = coleccionGrupos.getGrupos();
  variable.forEach((grupo) => {
    console.log(grupo.GetNombre(), grupo.GetId());
  });
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
    let variable = coleccionRetos.getNumeroRetos();
    if (idUsuarioCreador === coleccionRetos.getReto(parseInt(respuestas.id)).GetIdCreador()) {
      coleccionRetos.deleteReto(parseInt(respuestas.id));
      coleccionRetos.deleteReto(parseInt(respuestas.id));
      if (variable === coleccionRetos.getNumeroRetos()) {
        console.log('El reto no existe');
      }
      else {
        console.log('Reto borrado exitosamente');
      }
    }
    else {
      console.log('No puedes borrar un Reto que no has creado');
    }
  });
}

/**
 * Muestra los retos
 * @returns {void}
 */
function MostrarRetos() {
  console.clear();
  let variable = coleccionRetos.getRetos();
  variable.forEach((reto) => {
    console.log(reto.GetNombre(), reto.GetId());
  });
}


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
          promptIniciarSesion(parseInt(respuestas.id));
      });
    }
  });
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
      case ComandosMenu.MostrarUsuarios:
        MostrarUsuarios();
        break;
      case ComandosMenu.BorrarUsuario:
        BorrarUsuario(idUsuarioCreador);
        break;
      case ComandosMenu.CrearRuta:
        promptCrearRuta(idUsuarioCreador);
        break;
      case ComandosMenu.MostrarRutas:
        MostrarRutas();
        break;
      case ComandosMenu.BorrarRuta:
        promptBorrarRuta(idUsuarioCreador);
        break;
      case ComandosMenu.CrearGrupo:
        promptCrearGrupo(idUsuarioCreador);
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

InicioMain();
