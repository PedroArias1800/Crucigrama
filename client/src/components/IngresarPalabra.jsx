import React from 'react'

function IngresarPalabra() {

  function ValidarPalabra(e){
    const palabra = e.target.value
    console.log(palabra)
  }

  return (
    <div className='fs-4 d-flex justify-content-center mx-auto py-3 my-3 bg-secondary rounded row gap-md-1'>
        <h3>Ingresa una palabra:</h3>
        <input type="text" id="palabra" className='rounded col col-7' placeholder="Palabra" onBlur={ValidarPalabra}/>
        <button className='btn btn-success col col-4'>Validar</button>
    </div>
  )
}

export default IngresarPalabra