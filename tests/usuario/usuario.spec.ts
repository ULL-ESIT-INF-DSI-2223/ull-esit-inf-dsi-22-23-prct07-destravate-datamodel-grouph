import 'mocha';
import { expect } from 'chai';
import { Usuario } from '../../src/usuario/usuario';

describe('Se comprueba la clase usuario', () => {
  it('Debería crear un usuario y se comprueba que sea una instancia de usuario', () => {
    const usuario = new Usuario('Jorge', 1234, 0, [1234, 1235], [[1234, 1235], [1234, 1235]], [[1234, 1235], [1234, 1235]], [1234, 1235], [1234, 1235], [["25-12-2021", 1234], ["03-11-2022"]]);
    expect(usuario).to.be.an.instanceof(Usuario);
  });
  it('Debería crear un usuario y se comprueban los getters', () => {
    const usuario = new Usuario('Jorge', 1234, 0, [1234, 1235], [[1234, 1235], [1234, 1235]], [[1234, 1235], [1234, 1235]], [1234, 1235], [1234, 1235], [["25-12-2021", 1234], ["03-11-2022"]]);
    expect(usuario.GetNombre()).to.be.equal('Jorge');
    expect(usuario.GetId()).to.be.equal(1234);
    expect(usuario.GetActividades()).to.be.equal(0);
    expect(usuario.GetAmigos()).to.be.eql([1234, 1235]);
    expect(usuario.GetGruposAmigos()).to.be.eql([[1234, 1235], [1234, 1235]]);
    expect(usuario.GetEstadisticas()).to.be.eql([[1234, 1235], [1234, 1235]]);
    expect(usuario.GetRutasFavoritas()).to.be.eql([1234, 1235]);
    expect(usuario.GetRetos()).to.be.eql([1234, 1235]);
    expect(usuario.GetHistoricos()).to.be.eql([["25-12-2021", 1234], ["03-11-2022"]]);
  });
  it('Se comprueban los métodos aniadirAmigo y eliminarAmigo', () => {
    const usuario = new Usuario('Jorge', 1234, 0, [1234, 1235], [[1234, 1235], [1234, 1235]], [[1234, 1235], [1234, 1235]], [1234, 1235], [1234, 1235], [["25-12-2021", 1234], ["03-11-2022"]]);
    usuario.aniadirAmigo(1236);
    expect(usuario.GetAmigos()).to.be.eql([1234, 1235, 1236]);
    usuario.eliminarAmigo(1235);
    expect(usuario.GetAmigos()).to.be.eql([1234, 1236]);
    });
  });


