import 'mocha';
import { expect } from 'chai';
import { ColeccionRetos } from '../src/coleccionRetos';
import { Reto } from '../src/reto';

describe('ColeccionRetos', () => {
  let coleccionRetos: ColeccionRetos;
  let reto: Reto;
  coleccionRetos = ColeccionRetos.getInstance();
  const reto1 = new Reto(1, 'reto1',['ruta1','ruta2'], 0, 1000, [1,2,3]);
  const reto2 = new Reto(2, 'reto2',['ruta1','ruta2'], 1, 2000, [1,2,3,4]);
  it ('La clase ColeccionRetos es un singleton', () => {
    const coleccionRetos2 = ColeccionRetos.getInstance();
    expect(coleccionRetos).to.equal(coleccionRetos2);
  });
  it ('Se puede añadir un reto a la colección', () => {
    coleccionRetos.addReto(reto1);
    expect(coleccionRetos.getReto(1)).to.equal(reto1);
  });
  it ('Se puede eliminar un reto de la colección', () => {
    coleccionRetos.deleteReto(0);
    expect(coleccionRetos.getNumeroRetos()).to.equal(0);
  });
  it ('Se puede obtener un reto de la colección', () => {
    coleccionRetos.addReto(reto1);
    expect(coleccionRetos.getReto(1)).to.equal(reto1);
  });
  it ('Se puede obtener el número de retos de la colección', () => {
    expect(coleccionRetos.getNumeroRetos()).to.equal(1);
  });
  it ('Se puede obtener un reto de la colección por su nombre', () => {
    expect(coleccionRetos.getRetoPorNombre('reto1')).to.eql(reto1);
  });
  it ('Se puede obtener un reto de la colección por su índice', () => {
    expect(coleccionRetos.getRetosPorIndice(0)).to.equal(reto1);
  });
  it ('Se puede ordenar los retos por nombre alfabéticamente', () => {
    coleccionRetos.addReto(reto2);
    coleccionRetos.ordenarRetosPorNombreAlfabetico(true);
    expect(coleccionRetos.getRetos()).to.eql([reto1, reto2]);
    coleccionRetos.ordenarRetosPorNombreAlfabetico(false);
    expect(coleccionRetos.getRetos()).to.eql([reto2, reto1]);
  });
  it ('Se puede ordenar los retos por distancia recorrida', () => {
    coleccionRetos.ordenarRetosPorDistanciaRecorrida(true);
    expect(coleccionRetos.getRetos()).to.eql([reto1, reto2]);
    coleccionRetos.ordenarRetosPorDistanciaRecorrida(false);
    expect(coleccionRetos.getRetos()).to.eql([reto2, reto1]);
  });
  it ('Se puede ordenar los retos por los miembros activos', () => {
    coleccionRetos.ordenarRetosPorCantidadDeUsuarios(true);
    expect(coleccionRetos.getRetos()).to.eql([reto1, reto2]);
    coleccionRetos.ordenarRetosPorCantidadDeUsuarios(false);
    expect(coleccionRetos.getRetos()).to.eql([reto2, reto1]);
  });
});
