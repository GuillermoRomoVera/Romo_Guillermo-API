
import * as chai from 'chai';
import test from 'node:test';
import * as area from '../src/calcularArea.js';

test('Calcular área de un triángulo con base 10 y altura 5', () => {
    let resultado = area.calcularArea(10, 5);
    chai.assert.equal(resultado, 25);
});










