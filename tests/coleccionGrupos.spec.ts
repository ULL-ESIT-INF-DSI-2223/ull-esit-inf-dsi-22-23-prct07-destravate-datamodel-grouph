import 'mocha';
import { expect } from 'chai';
import { ColeccionGrupos } from '../src/coleccionGrupos';
import { Grupo } from '../src/grupo';

describe('ColeccionGrupos', () => {
  let coleccionGrupos: ColeccionGrupos;
  let grupo: Grupo;
  coleccionGrupos = ColeccionGrupos.getInstance();
  const grupo1 = new Grupo(1, 'Grupo1', [1,2,3],[[1,1,1],[1,1,1],[1,1,1]], [1,2,3], [1,2,3],[['ruta1', 1],['ruta2',2]]);
  const grupo2 = new Grupo(2, 'Grupo2', [1,2,3,4],[[2,2,2],[2,2,2],[2,2,2]], [1,2,3], [1,2,3],[['ruta1', 1],['ruta2',2]]);
  it ('La clase ColeccionGrupos es un singleton', () => {
    const coleccionGrupos2 = ColeccionGrupos.getInstance();
    expect(coleccionGrupos).to.equal(coleccionGrupos2);
  });
  it ('Se puede añadir un grupo a la colección', () => {
    coleccionGrupos.addGrupo(grupo1);
    expect(coleccionGrupos.getGrupo(1)).to.equal(grupo1);
  });
  it ('Se puede eliminar un grupo de la colección', () => {
    coleccionGrupos.deleteGrupo(grupo1);
    expect(coleccionGrupos.getNumeroGrupos()).to.equal(0);
  });
  it ('Se puede obtener un grupo de la colección', () => {
    coleccionGrupos.addGrupo(grupo1);
    expect(coleccionGrupos.getGrupo(1)).to.equal(grupo1);
  });
  it ('Se puede obtener el número de grupos de la colección', () => {
    expect(coleccionGrupos.getNumeroGrupos()).to.equal(1);
  });
  it ('Se puede obtener un grupo de la colección por su nombre', () => {
    expect(coleccionGrupos.getGrupoPorNombre('Grupo1')).to.eql(grupo1);
  });
  it ('Se puede obtener un grupo de la colección por su índice', () => {
    expect(coleccionGrupos.getItem(0)).to.equal(grupo1);
  });
  it ('Se puede ordenar la colección de grupos por nombre alfabéticamente', () => {
    coleccionGrupos.addGrupo(grupo2);
    coleccionGrupos.ordenarGruposPorNombreAlfabetico(true);
    expect(coleccionGrupos.getItem(0)).to.eql(grupo1);
    expect(coleccionGrupos.getItem(1)).to.eql(grupo2);
  });
  it ('Se puede ordenar la colección de grupos por distancia recorrida', () => {
    coleccionGrupos.ordenarGruposPorDistanciaRecorrida(true, 0);
    expect(coleccionGrupos.getGrupos()).to.eql([grupo2, grupo1]);
    coleccionGrupos.ordenarGruposPorDistanciaRecorrida(false, 0);
    expect(coleccionGrupos.getGrupos()).to.eql([grupo1, grupo2]);
  });
  it ('Se puede ordenar la colección de grupos por integrantes', () => {
    coleccionGrupos.ordenarGruposPorCantidadDeIntegrantes(true);
    expect(coleccionGrupos.getGrupos()).to.eql([grupo1, grupo2]);
    coleccionGrupos.ordenarGruposPorCantidadDeIntegrantes(false);
    expect(coleccionGrupos.getGrupos()).to.eql([grupo2, grupo1]);
  });
});

