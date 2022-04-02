/**
  Vista del alta de películas.
  Muestra el formulario para dar de alta una película.
**/
import {Pelicula} from '../modelos/pelicula.js'

export class VistaAltaPelicula{
  /**
    Constructor de la clase.
    @param {Object} controlador Controlador de la vista.
    @param {Node} base Nodo al que se añadirá la vista.
  **/
  constructor(controlador, base) {
    this.controlador = controlador
    this.base = base
    this.base.classList.add('vistaAltaPelicula')
    this.iniciar()
  }
  iniciar(){
    //Cogemos referencias a los elementos del interfaz
    this.iTitulo = document.getElementsByTagName('input')[0]
    this.taDescripcion = document.getElementsByTagName('textarea')[0]
    this.btnAlta = document.getElementsByTagName('button')[0]

    //Asociamos eventos
    this.btnAlta.onclick = this.alta.bind(this)
  }
  mostrar(){
    this.base.style.display = 'block'
    this.iTitulo.focus()
  }
  ocultar(){
    this.base.style.display = 'none'
  }
  alta(){
    const titulo = this.iTitulo.value
    const descripcion = this.taDescripcion.value
    const pelicula = new Pelicula(titulo, descripcion)
    this.controlador.altaPelicula(pelicula)
  }
}
