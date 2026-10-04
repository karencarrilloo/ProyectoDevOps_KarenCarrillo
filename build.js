// "Compilacion" sencilla: valida que el modulo carga y copia el resultado a dist/
const fs = require('fs');
require('./app.js');

fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('app.js', 'dist/app.js');
console.log('Build completado: dist/app.js generado');
