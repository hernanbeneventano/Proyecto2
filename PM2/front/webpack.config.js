const path = require('path');

module.exports = {
  // Define múltiples puntos de entrada
  entry: {
    main: "./scripts/index.js", // El punto de entrada para la página principal
    
  },
  output: {
    path: path.resolve(__dirname, 'public'), // La carpeta de salida para todos los bundles
    filename: '[name].js', // Usar la sustitución de nombre para generar nombres de archivo basados en los nombres de entrada
  },
  watch: true,

};