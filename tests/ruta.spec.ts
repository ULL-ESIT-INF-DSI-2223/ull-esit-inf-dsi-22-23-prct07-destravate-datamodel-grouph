import 'mocha';
import { expect } from 'chai';
import { Ruta } from '../src/ruta';


describe('Se comprueba la clase ruta', () => {
  it('Debería crear una ruta y se comprueba que sea una instancia de ruta', () => {
    const ruta = new Ruta(1, 'ruta1', [1, 1], [2, 2], 1, 1, [1, 2], true, 1);
    expect(ruta).to.be.an.instanceOf(Ruta);
  });
  it('Debería crear una ruta y se comprueban los getters', () => {
    const ruta = new Ruta(1, 'ruta1', [1, 1], [2, 2], 1, 1, [1, 2], true, 1);
    expect(ruta.GetId()).to.be.equal(1);
    expect(ruta.GetNombre()).to.be.equal('ruta1');
    expect(ruta.GetGeoIni()).to.be.eql([1, 1]);
    expect(ruta.GetGeoFin()).to.be.eql([2, 2]);
    expect(ruta.GetLongitud()).to.be.equal(1);
    expect(ruta.GetDesnivel()).to.be.equal(1);
    expect(ruta.GetUsuarios()).to.be.eql([1, 2]);
    expect(ruta.GetActividad()).to.be.equal(true);
    expect(ruta.GetCalificacion()).to.be.equal(1);
  });
});
