import 'mocha';
import { expect } from 'chai';
import { Reto } from '../src/reto';

describe('Se comprueba la clase reto', () => {
  it('Debería crear un reto y se comprueba que sea una instancia de reto', () => {
    const reto = new Reto(1, 'reto1', ['ruta1', 'ruta2'], 2, 1, [1, 2]);
    expect(reto).to.be.an.instanceOf(Reto);
  });
  it('Debería crear un reto y se comprueban los getters', () => {
    const reto = new Reto(1, 'reto1', ['ruta1', 'ruta2'], 2, 1, [1, 2]);
    expect(reto.GetId()).to.be.equal(1);
    expect(reto.GetNombre()).to.be.equal('reto1');
    expect(reto.GetRutasFormantes()).to.be.eql(['ruta1', 'ruta2']);
    expect(reto.GetTipo()).to.be.equal(2);
    expect(reto.GetKmTotales()).to.be.equal(1);
    expect(reto.GetUsuariosActivos()).to.be.eql([1, 2]);
  });
});
