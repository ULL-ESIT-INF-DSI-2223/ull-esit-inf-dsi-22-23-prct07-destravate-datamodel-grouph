"use strict";
exports.__esModule = true;
var usuario_1 = require("./usuario/usuario");
var ruta_1 = require("./ruta/ruta");
var grupo_1 = require("./grupo/grupo");
var reto_1 = require("./reto/reto");
var JsonColeccionUsuarios_1 = require("./usuario/JsonColeccionUsuarios");
var JsonColeccionGrupos_1 = require("./grupo/JsonColeccionGrupos");
var JsonColeccionRutas_1 = require("./ruta/JsonColeccionRutas");
var JsonColeccionRetos_1 = require("./reto/JsonColeccionRetos");
var inquirer = require('inquirer');
var coleccionUsuarios;
var coleccionGrupos;
var coleccionRutas;
var coleccionRetos;
coleccionUsuarios = new JsonColeccionUsuarios_1.JsonColeccionUsuarios();
/*
const usuario1 = new Usuario('Usuario1', 1, 0, [2,3], [[1, 2],[1, 3]], [[1, 1, 1],[1, 1, 1],[1, 1, 1]], [1, 2], [1, 2], [['ruta1',1],['ruta2',2]]);
const usuario2 = new Usuario('Usuario2', 2, 2, [1,3], [[1, 2],[1, 3]], [[2, 2, 2],[2, 2, 2],[2, 2, 2]], [1, 2], [1, 2], [['ruta1',1],['ruta2',2]]);
const usuario3 = new Usuario('Usuario3', 3, 0, [1,2], [[1, 2],[1, 3]], [[3, 3, 3],[3, 3, 3],[3, 3, 3]], [1, 2], [1, 2], [['ruta1',1],['ruta2',2]]);
coleccionUsuarios.addUsuario(usuario1);
coleccionUsuarios.addUsuario(usuario2);
coleccionUsuarios.addUsuario(usuario3);
*/
coleccionGrupos = new JsonColeccionGrupos_1.JsonColeccionGrupos();
/*
const grupo1 = new Grupo(1, 'Grupo1', [1,2,3],[[1,1,1],[1,1,1],[1,1,1]], [1,2,3], [1,2,3],[['ruta1', 1],['ruta2',2]],1);
const grupo2 = new Grupo(2, 'Grupo2', [1,2,3,4],[[2,2,2],[2,2,2],[2,2,2]], [1,2,3], [1,2,3],[['ruta1', 1],['ruta2',2]],2);
coleccionGrupos.addGrupo(grupo1);
coleccionGrupos.addGrupo(grupo2);
*/
coleccionRutas = new JsonColeccionRutas_1.JsonColeccionRutas();
/*
const ruta1 = new Ruta(1, 'ruta1', [1, 1], [2, 2], 20, 1, [1, 2, 3, 4], 4, 5,1);
const ruta2 = new Ruta(2, 'ruta2', [1, 1], [2, 2], 30, 1, [1, 2], 5, 6,2);
coleccionRutas.addRuta(ruta1);
coleccionRutas.addRuta(ruta2);
*/
coleccionRetos = new JsonColeccionRetos_1.JsonColeccionRetos();
/*
const reto1 = new Reto(1, 'reto1',['ruta1','ruta2'], 0, 1000, [1,2,3],1);
const reto2 = new Reto(2, 'reto2',['ruta1','ruta2'], 1, 2000, [1,2,3,4],2);
coleccionRetos.addReto(reto1);
coleccionRetos.addReto(reto2);
*/
/**
 * comandosMenu
 */
var ComandosMenu;
(function (ComandosMenu) {
    ComandosMenu["BorrarUsuario"] = "Borrar usuario";
    ComandosMenu["MostrarUsuarios"] = "Mostrar usuarios";
    ComandosMenu["CrearRuta"] = "Crear ruta";
    ComandosMenu["BorrarRuta"] = "Borrar ruta";
    ComandosMenu["MostrarRutas"] = "Mostrar rutas";
    ComandosMenu["CrearGrupo"] = "Crear grupo";
    ComandosMenu["BorrarGrupo"] = "Borrar grupo";
    ComandosMenu["MostrarGrupos"] = "Mostrar grupos";
    ComandosMenu["CrearReto"] = "Crear reto";
    ComandosMenu["BorrarReto"] = "Borrar reto";
    ComandosMenu["MostrarRetos"] = "Mostrar retos";
    ComandosMenu["Salir"] = "Salir";
})(ComandosMenu || (ComandosMenu = {}));
/**
 * comandosIniciales
 */
var comandosIniciales;
(function (comandosIniciales) {
    comandosIniciales["CrearUsuario"] = "Crear usuario";
    comandosIniciales["IniciarSesion"] = "Iniciar sesi\u00F3n";
    comandosIniciales["Salir"] = "Salir";
})(comandosIniciales || (comandosIniciales = {}));
/**
 * Pregunta al usuario qué comando desea ejecutar
 * y ejecuta el comando correspondiente.
 * @param coleccionUsuarios Colección de usuarios
 */
function promptCrearUsuario() {
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
            filter: function (input) {
                // Convertir la entrada en un array de enteros
                return input.split(',').map(function (numero) { return parseInt(numero); });
            }
        },
        {
            type: 'input',
            name: 'grupos_amigos',
            message: 'Introduce los grupos de amigos del usuario',
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
            filter: function (input) {
                // Convertir la entrada en un array de arrays de enteros
                var grupos = input.split('.');
                return grupos.map(function (grupo) { return grupo.split(',').map(function (numero) { return parseInt(numero); }); });
            }
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
            filter: function (input) {
                // Convertir la entrada en un array de arrays de enteros
                var grupos = input.split('.');
                return grupos.map(function (grupo) { return grupo.split(',').map(function (numero) { return parseInt(numero); }); });
            }
        },
        {
            type: 'input',
            name: 'rutas_favoritas',
            message: 'Introduce las rutas favoritas del usuario',
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
            filter: function (input) {
                // Convertir la entrada en un array de enteros
                return input.split(',').map(function (numero) { return parseInt(numero); });
            }
        },
        {
            type: 'input',
            name: 'retos',
            message: 'Introduce los retos del usuario',
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
            filter: function (input) {
                // Convertir la entrada en un array de enteros
                return input.split(',').map(function (numero) { return parseInt(numero); });
            }
        },
        {
            type: 'input',
            name: 'historicos',
            message: 'Introduce los historicos del usuario',
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
            filter: function (input) {
                // Convertir la entrada en un array de arrays con elementos de cadena y número
                var arrays = input.split('.');
                var result = [];
                for (var i = 0; i < arrays.length; i++) {
                    var elementos = arrays[i].split(',');
                    var texto = elementos[0];
                    var numero = parseInt(elementos[1]);
                    result.push([texto, numero]);
                }
                return result;
            }
        },
    ]).then(function (respuestas) {
        var nuevoUsuario = new usuario_1.Usuario(respuestas.nombre, parseInt(respuestas.id), parseInt(respuestas.actividades), respuestas.amigos, respuestas.grupos_amigos, respuestas.estadisticas, respuestas.rutas_favoritas, respuestas.retos, respuestas.historicos);
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
    var variable = coleccionUsuarios.getUsuarios();
    variable.forEach(function (usuario) {
        console.log(usuario.GetNombre(), usuario.GetId());
    });
}
/**
 * funcion que comprueba si un usuario existe y retorna su id
 * @return number
 * @param id
 */
function IniciarSesion(id) {
    var variable = coleccionUsuarios.getUsuarios();
    var i = 0;
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
function BorrarUsuario(idUsuarioCreador) {
    var variable = coleccionUsuarios.getNumeroUsuarios();
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
function promptCrearRuta(idUsuarioCreador) {
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
            filter: function (input) {
                // Convertir la entrada en un array de enteros
                return input.split(',').map(function (numero) { return parseInt(numero); });
            }
        },
        {
            type: 'input',
            name: 'punto_fin',
            message: 'Introduce el punto de fin de la ruta',
            filter: function (input) {
                // Convertir la entrada en un array de enteros
                return input.split(',').map(function (numero) { return parseInt(numero); });
            }
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
            filter: function (input) {
                // Convertir la entrada en un array de enteros
                return input.split(',').map(function (numero) { return parseInt(numero); });
            }
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
        }
    ]).then(function (respuestas) {
        var nuevaRuta = new ruta_1.Ruta(parseInt(respuestas.id), respuestas.nombre, respuestas.punto_inicio, respuestas.punto_fin, parseInt(respuestas.distancia), parseInt(respuestas.desnivel), respuestas.usuarios, parseInt(respuestas.actividad), parseInt(respuestas.calificacion), idUsuarioCreador);
        coleccionRutas.addRuta(nuevaRuta);
        console.log('Ruta creada exitosamente.');
    });
}
/**
 * Borra una ruta
 * @returns {void}
 */
function promptBorrarRuta(idUsuarioCreador) {
    console.clear();
    inquirer.prompt({
        type: 'input',
        name: 'id',
        message: 'Introduce el id de la ruta que quieres borrar'
    }).then(function (respuestas) {
        var variable = coleccionRutas.getNumeroRutas();
        if (idUsuarioCreador === coleccionRutas.getRuta(parseInt(respuestas.id)).GetIdCreador()) {
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
    var variable = coleccionRutas.getRutas();
    variable.forEach(function (ruta) {
        console.log(ruta.GetNombre(), ruta.GetId());
    });
}
/**
 * Crea un grupo
 * @returns {void}
 */
function promptCrearGrupo(idUsuarioCreador) {
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
            filter: function (input) {
                // Convertir la entrada en un array de enteros
                return input.split(',').map(function (numero) { return parseInt(numero); });
            }
        },
        {
            type: 'input',
            name: 'estadisticas',
            message: 'Introduce las estadisticas del grupo',
            filter: function (input) {
                // Convertir la entrada en un array de arrays de enteros
                var grupos = input.split('.');
                return grupos.map(function (grupo) { return grupo.split(',').map(function (numero) { return parseInt(numero); }); });
            }
        },
        {
            type: 'input',
            name: 'clasificacion',
            message: 'Introduce la clasificacion',
            filter: function (input) {
                // Convertir la entrada en un array de enteros
                return input.split(',').map(function (numero) { return parseInt(numero); });
            }
        },
        {
            type: 'input',
            name: 'rutas',
            message: 'Introduce las rutas favoritas del grupo',
            filter: function (input) {
                // Convertir la entrada en un array de enteros
                return input.split(',').map(function (numero) { return parseInt(numero); });
            }
        },
        {
            type: 'input',
            name: 'historicos',
            message: 'Introduce los historicos del grupo',
            filter: function (input) {
                // Convertir la entrada en un array de arrays con elementos de cadena y número
                var arrays = input.split('.');
                var result = [];
                for (var i = 0; i < arrays.length; i++) {
                    var elementos = arrays[i].split(',');
                    var texto = elementos[0];
                    var numero = parseInt(elementos[1]);
                    result.push([texto, numero]);
                }
                return result;
            }
        }
    ]).then(function (respuestas) {
        var nuevoGrupo = new grupo_1.Grupo(parseInt(respuestas.id), respuestas.nombre, respuestas.miembros, respuestas.estadisticas, respuestas.clasificacion, respuestas.rutas, respuestas.historicos, idUsuarioCreador);
        coleccionGrupos.addGrupo(nuevoGrupo);
        console.log('Grupo creado exitosamente.');
    });
}
/**
 * Borra un grupo
 * @returns {void}
 */
function promptBorrarGrupo(idUsuarioCreador) {
    console.clear();
    inquirer.prompt({
        type: 'input',
        name: 'id',
        message: 'Introduce el id del grupo que quieres borrar'
    }).then(function (respuestas) {
        var variable = coleccionGrupos.getNumeroGrupos();
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
    var variable = coleccionGrupos.getGrupos();
    variable.forEach(function (grupo) {
        console.log(grupo.GetNombre(), grupo.GetId());
    });
}
/**
 * Crea un reto
 * @returns {void}
 */
function promptCrearReto(idUsuarioCreador) {
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
            filter: function (input) {
                // Convertir la entrada en un array de enteros
                return input.split(',').map(function (palabra) { return palabra; });
            }
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
            filter: function (input) {
                // Convertir la entrada en un array de enteros
                return input.split(',').map(function (numero) { return parseInt(numero); });
            }
        }
    ]).then(function (respuestas) {
        var nuevoReto = new reto_1.Reto(parseInt(respuestas.id), respuestas.nombre, respuestas.rutas, parseInt(respuestas.tipo), parseInt(respuestas.kilometros), respuestas.usuarios, idUsuarioCreador);
        coleccionRetos.addReto(nuevoReto);
        console.log('Reto creado exitosamente.');
    });
}
/**
 * Borra un reto
 * @returns {void}
 */
function promptBorrarReto(idUsuarioCreador) {
    console.clear();
    inquirer.prompt({
        type: 'input',
        name: 'id',
        message: 'Introduce el id del reto que quieres borrar'
    }).then(function (respuestas) {
        var variable = coleccionRetos.getNumeroRetos();
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
    var variable = coleccionRetos.getRetos();
    variable.forEach(function (reto) {
        console.log(reto.GetNombre(), reto.GetId());
    });
}
function InicioMain() {
    console.clear();
    inquirer.prompt({
        type: 'list',
        name: 'comando',
        message: '¿Qué quieres hacer?',
        choices: Object.values(comandosIniciales)
    }).then(function (respuestas) {
        switch (respuestas['comando']) {
            case comandosIniciales.Salir:
                break;
            case comandosIniciales.CrearUsuario:
                promptCrearUsuario();
                break;
            case comandosIniciales.IniciarSesion:
                inquirer.prompt({
                    type: 'input',
                    name: 'id',
                    message: 'Introduce el id del usuario'
                }).then(function (respuestas) {
                    IniciarSesion(parseInt(respuestas.id));
                });
        }
    });
}
/**
 * Crea un usuario
 * @returns {void}
 */
function main(idUsuarioCreador) {
    console.clear();
    inquirer.prompt({
        type: 'list',
        name: 'comando',
        message: '¿Qué quieres hacer?',
        choices: Object.values(ComandosMenu)
    }).then(function (respuestas) {
        switch (respuestas['comando']) {
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
    });
}
InicioMain();
