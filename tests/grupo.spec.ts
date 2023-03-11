import 'mocha';
import { expect } from 'chai';
import { Grupo } from '../src/grupo';

describe('Se comprueba la clase grupo grupo', () => {
  it('Debería crear un grupo y se comprueba que sea una instancia de grupo', () => {
    const grupo = new Grupo(1234, 'Grupo1', [1234, 1235], [[1234, 1235], [1234, 1235]], [1234, 1235], [1234, 1235], [["25-12-2021", 1234], ["03-11-2022"]]);
    expect(grupo).to.be.an.instanceof(Grupo);
  });
  it('Debería crear un grupo y se comprueban los getters', () => {
    const grupo = new Grupo(1234, 'Grupo1', [1234, 1235], [[1234, 1235], [1234, 1235]], [1234, 1235], [1234, 1235], [["25-12-2021", 1234], ["03-11-2022"]]);
    expect(grupo.GetId()).to.be.equal(1234);
    expect(grupo.GetNombre()).to.be.equal('Grupo1');
    expect(grupo.GetMiembrosGrupo()).to.be.eql([1234, 1235]);
    expect(grupo.GetEstadisticas()).to.be.eql([[1234, 1235], [1234, 1235]]);
    expect(grupo.GetClasificacionUsuarios()).to.be.eql([1234, 1235]);
    expect(grupo.GetRutasFavoritas()).to.be.eql([1234, 1235]);
    expect(grupo.GetHistoricos()).to.be.eql([["25-12-2021", 1234], ["03-11-2022"]]);
  });
});

