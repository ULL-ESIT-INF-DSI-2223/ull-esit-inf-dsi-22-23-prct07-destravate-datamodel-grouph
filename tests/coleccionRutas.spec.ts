import 'mocha';
import { expect } from 'chai';
import { ColeccionRutas } from '../src/coleccionRutas';
import { Ruta } from '../src/ruta';

describe('ColeccionRutas', () => {
  let coleccionRutas: ColeccionRutas;
  coleccionRutas = ColeccionRutas.getInstance();
  const ruta1 = new Ruta(1, 'ruta1', [1, 1], [2, 2], 20, 1, [1, 2, 3, 4], 4, 5);
  const ruta2 = new Ruta(2, 'ruta2', [1, 1], [2, 2], 30, 1, [1, 2], 5, 6);
  it('La clase ColeccionRutas es un singleton', () => {
    const coleccionRutas2 = ColeccionRutas.getInstance();
    expect(coleccionRutas).to.equal(coleccionRutas2);
  });
  it('Se puede añadir una ruta a la colección', () => {
    coleccionRutas.addRuta(ruta1);
    expect(coleccionRutas.getRuta(1)).to.equal(ruta1);
  });
  it('Se puede eliminar una ruta de la colección', () => {
    coleccionRutas.addRuta(ruta2);
    coleccionRutas.deleteRuta(1);
    expect(coleccionRutas.getNumeroRutas()).to.equal(1);
  });
  it('Se puede obtener una ruta de la colección', () => {
    expect(coleccionRutas.getRuta(1)).to.eql(ruta1);
  });
  it('Se puede obtener todas las rutas de la colección', () => {
    coleccionRutas.addRuta(ruta2);
    expect(coleccionRutas.getRutas()).to.eql([ruta1, ruta2]);
  });
  it('Se puede obtener el número de rutas de la colección', () => {
    expect(coleccionRutas.getNumeroRutas()).to.equal(2);
  });
  it('Se puede obtener una ruta dado el nombre', () => {
    expect(coleccionRutas.getRutaPorNombre('ruta1')).to.eql(ruta1);
  });
  it('Se puede obtener una ruta dado el indice', () => {
    expect(coleccionRutas.getItem(0)).to.eql(ruta1);
  });
  it('Se puede ordenar las rutas alfabeticamente', () => {
    coleccionRutas.ordenarRutasPorNombreAlfabetico(true);
    expect(coleccionRutas.getRutas()).to.eql([ruta1, ruta2]);
    coleccionRutas.ordenarRutasPorNombreAlfabetico(false);
    expect(coleccionRutas.getRutas()).to.eql([ruta2, ruta1]);
  });
  it('Se puede ordenar las rutas por distancia', () => {
    coleccionRutas.ordenarRutasPorDistancia(true);
    expect(coleccionRutas.getRutas()).to.eql([ruta1, ruta2]);
    coleccionRutas.ordenarRutasPorDistancia(false);
    expect(coleccionRutas.getRutas()).to.eql([ruta2, ruta1]);
  });
  it('Se puede ordenar las rutas por cantidad de usuarios', () => {
    coleccionRutas.ordenarRutasPorCantidadUsuarios(true);
    expect(coleccionRutas.getRutas()).to.eql([ruta2, ruta1]);
    coleccionRutas.ordenarRutasPorCantidadUsuarios(false);
    expect(coleccionRutas.getRutas()).to.eql([ruta1, ruta2]);
  });
  it('Se puede ordenar las rutas por calificacion media', () => {
    coleccionRutas.ordenarRutasPorCalificacionMedia(true);
    expect(coleccionRutas.getRutas()).to.eql([ruta1, ruta2]);
    coleccionRutas.ordenarRutasPorCalificacionMedia(false);
    expect(coleccionRutas.getRutas()).to.eql([ruta2, ruta1]);
    
  });
  it('Se puede ordenar las rutas por actividad', () => {
    coleccionRutas.ordenarRutasPorActividad(true);
    expect(coleccionRutas.getRutas()).to.eql([ruta1, ruta2]);
    coleccionRutas.ordenarRutasPorActividad(false);
    expect(coleccionRutas.getRutas()).to.eql([ruta2, ruta1]);
  });
});

