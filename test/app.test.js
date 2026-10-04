const test = require('node:test');
const assert = require('node:assert');
const { sumar, saludar } = require('../app.js');

test('sumar suma dos numeros', () => {
  assert.strictEqual(sumar(2, 3), 5);
});

test('sumar maneja negativos', () => {
  assert.strictEqual(sumar(-1, 1), 0);
});

test('saludar devuelve el saludo correcto', () => {
  assert.strictEqual(saludar('Karen'), 'Hola, Karen');
});
