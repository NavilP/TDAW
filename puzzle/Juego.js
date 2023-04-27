/*
La clase Juego se define a traves de
- estado: permite conocer en que etapa del juego nos encontramos
- instanteId: es asignado a un segundo de duracion
- instante: esta asociado a un método que se encarga de la actualización del estado del juego
- visualizar: metodo que crea la vista del juego y el estatus del juego
- controlClicCaja: Busca las cajas vecinas y donde sea posible el cambio lo realiza
*/
class Juego {
    constructor(estado) {
        this.estado = estado;
        this.instanteId = null;
        //El uso más simple de bind() es hacer que una función que, sin importar cómo es llamada, 
        //siempre apunte al mismo objeto con la referencia this.
        this.instante = this.instante.bind(this);
        this.visualizar();
        this.controlClicCaja = this.controlClicCaja.bind(this);
    }

    static listo() {
        return new Juego(Estado.listo());
    }

    instante() {
        this.setEstado({ tiempo: this.estado.tiempo + 1 });
    }
    
    /*
    La sintaxis extendida o spread syntax permite a un elemento iterable tal como un arreglo o
     cadena ser expandido en lugares donde cero o más argumentos (para llamadas de función) o 
     elementos son esperados.
  
     Ejemplo:
     function myFunction(x, y, z) { }
     var args = [0, 1, 2];
    myFunction(...args);
    */
    setEstado(nuevoEstado) {
        this.estado = { ...this.estado, ...nuevoEstado };
        this.visualizar();
    }


    controlClicCaja(caja) {
        return function () {
            const cajasVecinas = caja.getCajasVecinas();
            //    El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
            const cajaVacia = cajasVecinas.find(
                cajaVecina => this.estado.matriz[cajaVecina.y][cajaVecina.x] === 0
            );
            if (cajaVacia) {
                const nuevaMatriz = [...this.estado.matriz];
                cambiaCajas(nuevaMatriz, caja, cajaVacia);
                if (estaResuelto(nuevaMatriz)) {
                    clearInterval(this.instanteId);
                    this.setEstado({
                        status: "gano",
                        matriz: nuevaMatriz,
                        movimiento: this.estado.movimiento + 1
                    });
                } else {
                    this.setEstado({
                        matriz: nuevaMatriz,
                        movimiento: this.estado.movimiento + 1
                    });
                }
            }
        }.bind(this);
    }

    visualizar() {
        const { matriz, movimiento, tiempo, status } = this.estado;

        // Visualizar matriz
        const nuevaMatriz = document.createElement("section");
        nuevaMatriz.className = "puzzle";
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                const button = document.createElement("button");
                button.classList.add('number');

                if (status === "jugando") {
                    button.addEventListener("click", this.controlClicCaja(new Caja(j, i)));
                }

                button.textContent = matriz[i][j] === 0 ? "" : matriz[i][j].toString();
                nuevaMatriz.appendChild(button);
            }
        }
        document.querySelector(".puzzle").replaceWith(nuevaMatriz);

        // Visualizar botones
        const nuevoBoton = document.createElement("button");
        if (status === "listo") nuevoBoton.textContent = "Listo";
        if (status === "jugando") nuevoBoton.textContent = "Jugando";
        if (status === "gano") nuevoBoton.textContent = "Jugar";
        nuevoBoton.addEventListener("click", () => {
            /*
            El método setInterval() , ofrecido en las interfaces Window y Worker , llama a una función o ejecuta
            un fragmento de código de forma reiterada, con un retardo de tiempo fijo entre cada llamada.
            Este método devuelve un ID de intervalo que lo identifica de forma única, de ese modo,
             el intervalo puede ser eliminado más tarde llamando a clearInterval() .
            */
            clearInterval(this.instanteId);
            this.instanteId = setInterval(this.instante, 1000);
            this.setEstado(Estado.iniciar());

        });
        document.querySelector(".footer button").replaceWith(nuevoBoton);
        /*
        Con los literales de plantilla, una expresión puede incrustarse en un marcador de posición. 
        Un marcador de posición se representa mediante ${}, y todo lo que se encuentre dentro de las llaves 
        se tratará como JavaScript, mientras que todo lo que quede fuera de las llaves 
        se tratará como una cadena:
        */
        // Visualizar movimiento
        document.getElementById("moves").textContent = `Movimientos: ${movimiento}`;

        // Visualizar tiempo
        document.getElementById("time").textContent = `Tiempo: ${tiempo}`;

        // Visualizar message
        if (status === "gano") {
            document.getElementById("resume").textContent = "Tiempo final: " + movimiento + " movimientos en " + tiempo + " seg";
            const numbers = document.querySelectorAll('.number');
            numbers.forEach((number) =>{
                number.classList.remove('number');
                number.classList.add('win');
            });
        } else {
            document.getElementById("resume").textContent = "";
        }
    }
}