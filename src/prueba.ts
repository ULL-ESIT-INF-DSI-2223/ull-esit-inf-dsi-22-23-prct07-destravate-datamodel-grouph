import { Usuario, tipo_historico} from './usuario';
import { ColeccionUsuarios } from './coleccionUsuarios';
import {Ruta} from './ruta';
import {Grupo} from './grupo';
import {Reto} from './reto';
import { ColeccionGrupos } from './coleccionGrupos';
import { ColeccionRutas } from './coleccionRutas';
import { ColeccionRetos } from './coleccionRetos';
import { JsonColeccionUsuarios } from './JsonColeccionUsuarios';

const inquirer = require('inquirer');



let coleccionUsuarios: JsonColeccionUsuarios;
let coleccionGrupos: ColeccionGrupos; 
let coleccionRutas: ColeccionRutas;
let coleccionRetos: ColeccionRetos;

coleccionUsuarios = new JsonColeccionUsuarios();
const usuario1 = new Usuario('Usuario1', 1, 0, [2,3], [[1, 2],[1, 3]], [[1, 1, 1],[1, 1, 1],[1, 1, 1]], [1, 2], [1, 2], [['ruta1',1],['ruta2',2]]);
const usuario2 = new Usuario('Usuario2', 2, 2, [1,3], [[1, 2],[1, 3]], [[2, 2, 2],[2, 2, 2],[2, 2, 2]], [1, 2], [1, 2], [['ruta1',1],['ruta2',2]]);
const usuario3 = new Usuario('Usuario3', 3, 0, [1,2], [[1, 2],[1, 3]], [[3, 3, 3],[3, 3, 3],[3, 3, 3]], [1, 2], [1, 2], [['ruta1',1],['ruta2',2]]);
coleccionUsuarios.addUsuario(usuario1);
coleccionUsuarios.addUsuario(usuario2);
coleccionUsuarios.addUsuario(usuario3);

coleccionGrupos = ColeccionGrupos.getInstance();
const grupo1 = new Grupo(1, 'Grupo1', [1,2,3],[[1,1,1],[1,1,1],[1,1,1]], [1,2,3], [1,2,3],[['ruta1', 1],['ruta2',2]]);
const grupo2 = new Grupo(2, 'Grupo2', [1,2,3,4],[[2,2,2],[2,2,2],[2,2,2]], [1,2,3], [1,2,3],[['ruta1', 1],['ruta2',2]]);
coleccionGrupos.addGrupo(grupo1);
coleccionGrupos.addGrupo(grupo2);

coleccionRutas = ColeccionRutas.getInstance();
const ruta1 = new Ruta(1, 'ruta1', [1, 1], [2, 2], 20, 1, [1, 2, 3, 4], 4, 5);
const ruta2 = new Ruta(2, 'ruta2', [1, 1], [2, 2], 30, 1, [1, 2], 5, 6);
coleccionRutas.addRuta(ruta1);
coleccionRutas.addRuta(ruta2);

coleccionRetos = ColeccionRetos.getInstance();
const reto1 = new Reto(1, 'reto1',['ruta1','ruta2'], 0, 1000, [1,2,3]);
const reto2 = new Reto(2, 'reto2',['ruta1','ruta2'], 1, 2000, [1,2,3,4]);
coleccionRetos.addReto(reto1);
coleccionRetos.addReto(reto2);

enum Comandos {
  CrearUsuario = 'Crear usuario',
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
    });
} 

function MostrarUsuarios() {
  console.clear();
  let variable = coleccionUsuarios.getUsuarios();
  variable.forEach((usuario) => {
    console.log(usuario.GetNombre(), usuario.GetId());
  });
}

function BorrarUsuario() {
  console.clear();
  inquirer.prompt({
    type: 'input',
    name: 'id',
    message: 'Introduce el id del usuario que quieres borrar'
  }).then((respuestas) => {
    let variable = coleccionUsuarios.getNumeroUsuarios();
    coleccionUsuarios.deleteUsuario(parseInt(respuestas.id));
    if (variable === coleccionUsuarios.getNumeroUsuarios()) {
      console.log('El usuario no existe');
    }
    else {
      console.log('Usuario borrado exitosamente');
    }
  });
}

function promptCrearRuta() : void {
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
    message: 'Introduce el punto de inicio de la ruta'
  },
  {
    type: 'input',
    name: 'punto_fin',
    message: 'Introduce el punto de fin de la ruta'
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
    message: 'Introduce los usuarios de la ruta'
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
    const nuevaRuta = new Ruta(respuestas.id, respuestas.nombre, respuestas.punto_inicio, respuestas.punto_fin,
      respuestas.distancia, respuestas.desnivel, respuestas.usuarios, respuestas.actividad, respuestas.calificacion);
    coleccionRutas.addRuta(nuevaRuta);
    console.log('Ruta creada exitosamente.');
  });
}

function promptBorrarRuta() : void {
  console.clear();
  inquirer.prompt({
    type: 'input',
    name: 'id',
    message: 'Introduce el id de la ruta que quieres borrar'
  }).then((respuestas) => {
    let variable = coleccionRutas.getNumeroRutas();
    coleccionRutas.deleteRuta(parseInt(respuestas.id));
    if (variable === coleccionRutas.getNumeroRutas()) {
      console.log('La ruta no existe');
    }
    else {
      console.log('Ruta borrada exitosamente');
    }
  });
}

function MostrarRutas() {
  console.clear();
  let variable = coleccionRutas.getRutas();
  variable.forEach((ruta) => {
    console.log(ruta.GetNombre(), ruta.GetId());
  });
}

function promptCrearGrupo () : void {
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
    message: 'Introduce los usuarios del grupo'
  },
  {
    type: 'input',
    name: 'estadisticas',
    message: 'Introduce las estadisticas del grupo'
  },
  {
    type: 'input',
    name: 'clasificacion',
    message: 'Introduce la clasificacion'
  },
  {
    type: 'input',
    name: 'rutas',
    message: 'Introduce las rutas favoritas del grupo'
  },
  {
    type: 'input',
    name: 'historicos',
    message: 'Introduce los historicos del grupo'
  }]).then((respuestas) => {
    const nuevoGrupo = new Grupo(respuestas.id,respuestas.nombre, respuestas.miembros, respuestas.estadisticas,
    respuestas.clasificacion, respuestas.rutas, respuestas.historicos);
    coleccionGrupos.addGrupo(nuevoGrupo);
    console.log('Grupo creado exitosamente.');
  });
}

function promptBorrarGrupo () : void {
  console.clear();
  inquirer.prompt({
    type: 'input',
    name: 'id',
    message: 'Introduce el id del grupo que quieres borrar'
  }).then((respuestas) => {
    let variable = coleccionGrupos.getNumeroGrupos();
    coleccionGrupos.deleteGrupo(parseInt(respuestas.id));
    if (variable === coleccionGrupos.getNumeroGrupos()) {
      console.log('El grupo no existe');
    }
    else {
      console.log('Grupo borrado exitosamente');
    }
  });
}

function MostrarGrupos() {
  console.clear();
  let variable = coleccionGrupos.getGrupos();
  variable.forEach((grupo) => {
    console.log(grupo.GetNombre(), grupo.GetId());
  });
}

function promptCrearReto () : void {
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
    message: 'Introduce los rutas del reto'
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
    message: 'Introduce los usuarios del reto'
  }]).then((respuestas) => {
    const nuevoReto = new Reto(respuestas.id, respuestas.nombre, respuestas.rutas, respuestas.tipo,
    respuestas.kilometros, respuestas.usuarios);
    coleccionRetos.addReto(nuevoReto);
    console.log('Reto creado exitosamente.');
  });
}

function promptBorrarReto () : void {
  console.clear();
  inquirer.prompt({
    type: 'input',
    name: 'id',
    message: 'Introduce el id del reto que quieres borrar'
  }).then((respuestas) => {
    let variable = coleccionRetos.getNumeroRetos();
    coleccionRetos.deleteReto(parseInt(respuestas.id));
    if (variable === coleccionRetos.getNumeroRetos()) {
      console.log('El reto no existe');
    }
    else {
      console.log('Reto borrado exitosamente');
    }
  });
}

function MostrarRetos() {
  console.clear();
  let variable = coleccionRetos.getRetos();
  variable.forEach((reto) => {
    console.log(reto.GetNombre(), reto.GetId());
  });
}

function main(): void {
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'comando',
    message: '¿Qué quieres hacer?',
    choices: Object.values(Comandos),
  }).then((respuestas) => {
    switch(respuestas['comando']) {
      case Comandos.Salir:
        break;
      case Comandos.CrearUsuario:
        promptCrearUsuario();
        break;
      case Comandos.MostrarUsuarios:
        MostrarUsuarios();
        break;
      case Comandos.BorrarUsuario:
        BorrarUsuario();
        break;
      case Comandos.CrearRuta:
        promptCrearRuta();
        break;
      case Comandos.MostrarRutas:
        MostrarRutas();
        break;
      case Comandos.BorrarRuta:
        promptBorrarRuta();
        break;
      case Comandos.CrearGrupo:
        promptCrearGrupo();
        break;
      case Comandos.MostrarGrupos:
        MostrarGrupos();
        break;
      case Comandos.BorrarGrupo:
        promptBorrarGrupo();
        break;
      case Comandos.CrearReto:
        promptCrearReto();
        break;
      case Comandos.MostrarRetos:
        MostrarRetos();
        break;
      case Comandos.BorrarReto:
        promptBorrarReto();
        break;
    }
  })
}

main();