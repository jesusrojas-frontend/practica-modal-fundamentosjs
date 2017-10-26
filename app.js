 class Modal{
      constructor(modal,tiempo){
        this.modal = modal
        this.tiempo = tiempo
        this.mostrar = this.mostrar.bind(this)
        this.ocultar = this.ocultar.bind(this)
      }
      ocultar() {
        this.modal.style.animation = 'modalOut .8s forwards' // ocultando modal
        $overlay.style.transition = '1.1s ease-out' // para que la transicion sea lenta y se note el overlay
        $overlay.classList.remove('active') // agregando la clase active
        setTimeout(()=> this.modal.classList.remove('active'), 900)// quitando la clase active esto es para que no desaparazca de una vez
        clearInterval(intervalo) // parando el setInterval
      }
      mostrar() {
        let elemento = this.modal //definiendo elemento

        $overlay.classList.add('active') //agregando active al overlay
        this.modal.classList.add('active')// agregando active al modal
        $overlay.style.transition = '.5s ease-out'// haciendo a la transicion mas rapida y se note el modal
        this.modal.style.animation = 'modalIn .8s forwards'// la animacion para el modal

        let contador = elemento == firstModal ? 5: 10 // iniciando el contador dependiendo a que boton orpimio

        intervalo = setInterval(()=>{
          contador-- //restando el contador
          if(contador > 1){// si es mayor que uno
            this.tiempo.textContent = `${contador} segundos` //imprime los segundos
          }
          else if (contador == 1) {// si es igual a uno
            this.tiempo.textContent = `1 segundo`// queda 1 segudno
          }
          else if(contador == 0){// si es igual a sero
            this.tiempo.textContent = `0 segundos`//quedan 0 cegundos
            this.ocultar()//llamando a la funcion ocultar
          }

        }, 1000)
      }
    }
    const $overlay = document.getElementById('overlay') // el contenedor del modal
    const $segundoOverlay = document.getElementById('segundo-overlay') // el contenedor del modal
    let intervalo // definiendo el intervalo para poder acceder a ella desde la funcion ocultar

    const $primerBoton = document.getElementById('primer-boton')// botones para abrir los modales
    const $segundoBoton = document.getElementById('segundo-boton')// botones para abrir los modales
   

    const firstModal = document.getElementById('primer-modal') // modal
    const secondModal = document.getElementById('segundo-modal') // modal
    const cerrarPrimer = document.getElementById('cerrar-primero') // boton para cerrar
    const cerrarSegundo = document.getElementById('cerrar-segundo') // boton para cerrar


    const primerTiempo = document.getElementById('primer-tiempo') // donde va a estar el contador
    const segundoTiempo = document.getElementById('segundo-tiempo') // donde va a estar el contador
    const primerModal = new Modal(firstModal,primerTiempo)// haciendo el primer modal con la claseModal
    const segundoModal = new Modal(secondModal,segundoTiempo)// haciendo el segundo modal con la claseModal

    $primerBoton.addEventListener('click',primerModal.mostrar,)// escucando el primer boton
    $segundoBoton.addEventListener('click',segundoModal.mostrar)// escuchando el segundo boton

    cerrarPrimer.addEventListener('click',primerModal.ocultar)// escuchando el boton de cerrar para el primer modal
    cerrarSegundo.addEventListener('click',segundoModal.ocultar)// escuchando el boton de cerrar para el primer modal