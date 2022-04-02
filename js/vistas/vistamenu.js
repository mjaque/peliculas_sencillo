/**
  Vista del menú principal de la aplicación.
  Muestra el menú de la aplicación.
**/

export class VistaMenu{
  /**
    Constructor de la clase.
    @param {Object} controlador Controlador de la vista.
    @param {Node} base Nodo al que se añadirá la vista.
  **/
  constructor(controlador, base) {
    this.controlador = controlador
    this.base = base
    this.base.classList.add('vistaMenu')
    this.iniciar()
  }
  iniciar(){
    //Cogemos referencias a los elementos del interfaz

    //Asociamos eventos
    document.getElementsByTagName('li')[0].onclick = this.controlador.verAlta.bind(this.controlador)
  }
}
