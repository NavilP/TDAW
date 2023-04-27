//Esta funcion recibe una amatriz e intercambia las posiciones de la caja 1 y la caja 2]
const cambiaCajas = (matriz, caja1, caja2) => {
  const temp = matriz[caja1.y][caja1.x];
  matriz[caja1.y][caja1.x] = matriz[caja2.y][caja2.x];
  matriz[caja2.y][caja2.x] = temp;
};


/*funcion que verifica el estado de la matriz
Para comparar dos matrices se usa la función stringify de la clase JSON
dado que los arreglos tienen tipo objeto no se pueden comparar directamente
*/
const estaResuelto = matriz => {
  let matrizObjetivo = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
  let resultado = JSON.stringify(matriz) === JSON.stringify(matrizObjetivo);
  return resultado;
};

/*Ordena de forma aleatoria el arreglo inicial intercambiando posiciones de las cajas vecinas
1. Generar una caja vacia
2. Obtener de forma aleatoria una caja vecina
3. Intercambiar las cajas
4. la caja vacia ahora es la caja vecina
5. repetir el paso 2 n cantidad de veces

6. Si la matriz resultante es la matriz objetivo, generar una nueva matriz random
7. regresar la matriz aleatoria
*/
const getMatrizRandom = () => {
  let matriz = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];

  let cajaVacia = new Caja(3, 3);
  for (let i = 0; i < 10; i++) {
    const cajaVecinaRandom = cajaVacia.getCajaVecinaRandom();
    cambiaCajas(matriz, cajaVacia, cajaVecinaRandom);
    cajaVacia = cajaVecinaRandom;
  }

  if (estaResuelto(matriz)) return getMatrizRandom();
  return matriz;
};

const JUEGO = Juego.listo();