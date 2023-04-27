class Caja {
  /* Esta clase recibe dos parametros X,Y correspondientes a la posición dentro del arreglo
  los metodos permiten obtener los vecinos a partir d las cooredenadas X,Y
  */
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    getCajaSuperior() {
      if (this.y === 0) return null;
      return new Caja(this.x, this.y - 1);
    }
  
    getCajaDerecha() {
      if (this.x === 3) return null;
      return new Caja(this.x + 1, this.y);
    }
  
    getCajaInferior() {
      if (this.y === 3) return null;
      return new Caja(this.x, this.y + 1);
    }
  
    getCajaIzquierda() {
      if (this.x === 0) return null;
      return new Caja(this.x - 1, this.y);
    }
  
    /*
    El método filter() crea un nuevo array con todos los elementos que cumplan
    la condición implementada por la función dada.
    Regresa un arreglo de cajas diferentes de nulo
    */
    getCajasVecinas() {
      return [
        this.getCajaSuperior(),
        this.getCajaDerecha(),
        this.getCajaInferior(),
        this.getCajaIzquierda()
      ].filter(Caja => Caja !== null);
    }
  //Obtiene un arreglo de cajas vecinas, regresa de forma aleatoria alguna de las cajas del arreglo
    getCajaVecinaRandom() {
      const cajasVecinas = this.getCajasVecinas();
      return cajasVecinas[Math.floor(Math.random() * cajasVecinas.length)];
    }
  }