import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='text-light text-center py-5 mx-auto cuerpo fs-4'>
        <h2>Página No Encontrada</h2>
        <div>
            <p>Lo sentimos, no fuimos capaces de encontrar la página solicitada</p>
            <img src="./triste.png" className='w-25 d-block mx-auto' alt='Cara Triste'/>
            <Link to="/" className='btn btn-success my-4 fs-4' >Volver al inicio</Link>
        </div>
    </div>
  )
}

export default NotFound