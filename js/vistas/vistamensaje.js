/**
  Vista de mensajes de la aplicación.
  Muestra los mensajes de la aplicación.
**/

export class VistaMensaje{
  /**
    Constructor de la clase.
    @param {Object} controlador Controlador de la vista principal.
    @param {Node} base Nodo al que se añadirá la vista principal.
  **/
  constructor(controlador, base) {
    this.controlador = controlador
    this.base = base
    this.base.classList.add('vistaMensaje')
    this.iniciar()
  }
  iniciar(){
    //Cogemos referencias a los elementos del interfaz
    this.btnCerrar = document.getElementsByTagName('span')[0]
    this.spanMensaje = document.getElementsByTagName('span')[1]

    //Asociamos eventos
    this.btnCerrar.onclick = this.cerrar.bind(this)
  }
  cerrar(){
    this.base.style.display = 'none'
  }
  mostrar(mensaje){
    this.spanMensaje.textContent = mensaje
    this.base.style.display = 'block'
  }
}
