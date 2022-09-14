import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar text-light d-flex justify-content-between px-4 py-3 mx-auto'>
        <h2><Link to="/" className='text-decoration-none text-light'>Crucigrama del Módulo #1 - Calidad de Software</Link></h2>
        <h2>Grupo #8 - 1LS141</h2>
    </nav>
  )
}

export default Navbar