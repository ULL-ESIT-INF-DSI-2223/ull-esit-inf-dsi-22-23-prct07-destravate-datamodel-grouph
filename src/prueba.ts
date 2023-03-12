import { Usuario, tipo_historico} from './usuario';
import { ColeccionUsuarios } from './coleccionUsuarios'
import inquirer from 'inquirer';


let coleccionUsuarios: ColeccionUsuarios;

coleccionUsuarios = ColeccionUsuarios.getInstance();

enum Comandos {
  CrearUsuario = 'Crear usuario',
  BorrarUsuario = 'Borrar usuario',
  MostrarUsuarios = 'Mostrar usuarios',
  Salir = 'Salir'
}

/*function displayListaUsuarios() {
  const listaUsuarios = coleccionUsuarios.getUsuarios();
  console.log('Lista de usuarios:');
  listaUsuarios.forEach((usuario) => {
    console.log(usuario.GetNombre());
  });
}*/

async function main(): Promise<void> {
  console.clear();
  while(true) {
    const respuesta = await inquirer.prompt({
      type: "list",
      name: 'accion',
      message: '¿Qué quieres hacer?',
      choices: Object.values(Comandos)
    });
    if (respuesta.accion === 'Crear usuario') {
      //Crear el usuario
      console.log('Usuario creado exitosamente.');
    }
    if (respuesta.accion === 'Mostrar usuarios') {
      //displayListaUsuarios();
    }
    else {
      break;
    }
  }
}

main();






    /**if (respuesta.accion === 'Crear usuario') {
      console.log('Usuario creado exitosamente.');
      const respuestasCrear = await inquirer.prompt([
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
          message: 'Introduce los amigos del usuario'
        },
        {
          type : 'input',
          name : 'grupos_amigos',
          message : 'Introduce los grupos de amigos del usuario'
        },
        {
          type: 'input',
          name: 'estadisticas',
          message: 'Introduce las estadisticas del usuario'
        },
        {
          type : 'input',
          name : 'rutas_favoritas',
          message : 'Introduce las rutas favoritas del usuario'
        },
        {
          type : 'input',
          name : 'retos',
          message : 'Introduce los retos del usuario'
        },
        {
          type : 'input',
          name : 'historicos',
          message : 'Introduce los historicos del usuario'
        },
      ]);
      const nuevoUsuario = new Usuario(respuestasCrear.nombre, respuestasCrear.id, respuestasCrear.actividades, respuestasCrear.amigos,
        respuestasCrear.grupos_amigos, respuestasCrear.estadisticas, respuestasCrear.rutas_favoritas, respuestasCrear.retos, respuestasCrear.historicos);
      coleccionUsuarios.addUsuario(nuevoUsuario);
      console.log('Usuario creado exitosamente.');
    }*/
