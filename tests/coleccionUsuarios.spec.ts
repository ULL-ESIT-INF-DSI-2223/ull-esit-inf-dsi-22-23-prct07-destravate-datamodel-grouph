import 'mocha';
import { expect } from 'chai';
import { ColeccionUsuarios } from '../src/coleccionUsuarios';
import { Usuario } from '../src/usuario';

describe('ColeccionUsuarios', () => {
  let coleccionUsuarios: ColeccionUsuarios;
  let usuario: Usuario;
  coleccionUsuarios = ColeccionUsuarios.getInstance();
  const usuario1 = new Usuario('Usuario1', 1, 0, [2,3], [[1, 2],[1, 3]], [[1, 1, 1],[1, 1, 1],[1, 1, 1]], [1, 2], [1, 2], [['ruta1',1],['ruta2',2]]);
  const usuario2 = new Usuario('Usuario2', 2, 2, [1,3], [[1, 2],[1, 3]], [[2, 2, 2],[2, 2, 2],[2, 2, 2]], [1, 2], [1, 2], [['ruta1',1],['ruta2',2]]);
  const usuario3 = new Usuario('Usuario3', 3, 0, [1,2], [[1, 2],[1, 3]], [[3, 3, 3],[3, 3, 3],[3, 3, 3]], [1, 2], [1, 2], [['ruta1',1],['ruta2',2]]);
  it('La clase ColeccionUsuarios es un singleton', () => {
    const coleccionUsuarios2 = ColeccionUsuarios.getInstance();
    expect(coleccionUsuarios).to.equal(coleccionUsuarios2);
  });
  it('Se puede añadir un usuario a la colección', () => {
    coleccionUsuarios.addUsuario(usuario1);
    expect(coleccionUsuarios.getUsuario(1)).to.equal(usuario1);
    expect(coleccionUsuarios.addUsuario(usuario1)).to.equal(undefined);
  });
  it('Se puede eliminar un usuario de la colección', () => {
    coleccionUsuarios.addUsuario(usuario2);
    coleccionUsuarios.deleteUsuario(1);
    expect(coleccionUsuarios.getNumeroUsuarios()).to.equal(1);
    coleccionUsuarios.deleteUsuario(-4);
    expect(coleccionUsuarios.getNumeroUsuarios()).to.equal(1);
  });
  it('Se puede obtener un usuario de la colección', () => {
    coleccionUsuarios.addUsuario(usuario2);
    expect(coleccionUsuarios.getUsuario(1)).to.eql(usuario1);
    expect(coleccionUsuarios.getUsuario(2)).to.eql(usuario2);
  });
  it('Se puede obtener el número de usuarios de la colección', () => {
    coleccionUsuarios.addUsuario(usuario3);
    expect(coleccionUsuarios.getNumeroUsuarios()).to.equal(3);
  });
  it('Se puede obtener un usuario dado un nombre', () => {
    expect(coleccionUsuarios.getUsuarioPorNombre('Usuario1')).to.eql(usuario1);
    expect(coleccionUsuarios.getUsuarioPorNombre('Usuario2')).to.eql(usuario2);
    expect(coleccionUsuarios.getUsuarioPorNombre('Usuario3')).to.eql(usuario3);
  });
  it('Se puede obtener un usuario dado un indice', () => {
    expect(coleccionUsuarios.getItem(0)).to.eql(usuario1);
    expect(coleccionUsuarios.getItem(1)).to.eql(usuario2);
    expect(coleccionUsuarios.getItem(-4)).to.equal(undefined);
  });
  it('Se puede ordenar la colección de usuarios alfabeticamente', () => {
    coleccionUsuarios.ordenarUsuariosPorNombreAlfabetico(true);
    expect(coleccionUsuarios.getUsuarios()).to.eql([usuario1, usuario2, usuario3]);
    coleccionUsuarios.ordenarUsuariosPorNombreAlfabetico(false);
    expect(coleccionUsuarios.getUsuarios()).to.eql([usuario3, usuario2, usuario1]);
  });
  it('Se puede ordenar a los usuarios por los Km que han recorrido', () => {
    coleccionUsuarios.ordenarUsuariosPorDistanciaRecorrida(true,0);
    expect(coleccionUsuarios.getUsuarios()).to.eql([usuario3, usuario2, usuario1]);
    coleccionUsuarios.ordenarUsuariosPorDistanciaRecorrida(false,0);
    expect(coleccionUsuarios.getUsuarios()).to.eql([usuario1, usuario2, usuario3]);
    coleccionUsuarios.ordenarUsuariosPorDistanciaRecorrida(true,1);
    expect(coleccionUsuarios.getUsuarios()).to.eql([usuario3, usuario2, usuario1]);
    coleccionUsuarios.ordenarUsuariosPorDistanciaRecorrida(false,1);
    expect(coleccionUsuarios.getUsuarios()).to.eql([usuario1, usuario2, usuario3]);
    coleccionUsuarios.ordenarUsuariosPorDistanciaRecorrida(true,2);
    expect(coleccionUsuarios.getUsuarios()).to.eql([usuario3, usuario2, usuario1]);
    coleccionUsuarios.ordenarUsuariosPorDistanciaRecorrida(false,2);
    expect(coleccionUsuarios.getUsuarios()).to.eql([usuario1, usuario2, usuario3]);
  });
});


