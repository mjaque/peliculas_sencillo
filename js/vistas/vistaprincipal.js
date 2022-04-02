/**
  Vista principal de la aplicación.
  Incluye subvistas para el menú de navegación (nav) y los paneles de la aplicación.
**/
//Vistas
import {VistaMensaje} from './vistamensaje.js'
import {VistaMenu} from './vistamenu.js'
import {VistaAltaPelicula} from './vistaaltapelicula.js'
//Controladores
import {Pelicula as ControladorPelicula} from '../controladores/pelicula.js'

export class VistaPrincipal{
  /**
    Constructor de la clase.
    @param {Object} controlador Controlador de la vista principal.
    @param {Node} base Nodo al que se añadirá la vista principal.
  **/
  constructor(controlador, base) {
    this.controlador = controlador
    this.base = base
    this.base.classList.add('vistaPrincipal')
    this.iniciar()
  }
  iniciar() {
    //Cogemos referencias a los elementos del interfaz
    this.header = document.getElementsByTagName('header')[0]
    this.nav = document.getElementsByTagName('nav')[0]
    this.main = document.getElementsByTagName('main')[0]
    this.divError = document.getElementById('divError')
    this.divListado = document.getElementById('divListado')
    this.divAlta = document.getElementById('divAlta')
    this.footer = document.getElementsByTagName('footer')[0]

    //Capturamos los eventos

    //Subvistas
    this.vistaMenu = new VistaMenu(this.controlador, this.nav)
    this.vistaMensaje = new VistaMensaje(this.controlador, this.divError)
    this.vistaAltaPelicula = new VistaAltaPelicula(new ControladorPelicula(this.controlador), this.divAlta)

    //Mostramos el div inicial

    //this.limpiarCampos()

  }
  verAlta(){
    this.ocultarPaneles()
    this.vistaAltaPelicula.mostrar()
  }
  ocultarPaneles(){
    this.vistaAltaPelicula.ocultar()
  }
  mostrarError(error){
    this.vistaMensaje.mostrar(error)  //TODO: añadir nivel de error.
  }
}
