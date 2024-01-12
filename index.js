const siquesi = document.querySelector('#si')

siquesi.addEventListener('click', function (){
    Swal.fire('Sabia que querías jaja, ¿a que hora voy?')
})

const noqueno = document.querySelector('#no')

noqueno.addEventListener('mouseover', function(){
    const movimientoX = parseInt(Math.random()*100)
    const movimientoY = parseInt(Math.random()*100)
    noqueno.style.setProperty('top', movimientoX+'%')
    noqueno.style.setProperty('left', movimientoY+'%')
    noqueno.style.setProperty('transform', `traslate(-${movimientoX}%, -${movimientoY}`)
})