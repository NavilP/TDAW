/*
La clase Estado se define a traves de la matriz, movimiento, tiempo y estatus

- el estado listo que resetea los datos de la clase
- el estado iniciar fija los valores de arranque para el juego

*/
class Estado {
    constructor(matriz, movimiento, tiempo, status) {
      this.matriz = matriz;
      this.movimiento = movimiento;
      this.tiempo = tiempo;
      this.status = status;
    }
  
    static listo() {
      //Este es el estado inicial
      return new Estado(
        [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        0,
        0,
        "listo"
      );
    }
  
    static iniciar() {
      return new Estado(getMatrizRandom(), 0, 0, "jugando");
    }
  }