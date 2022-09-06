import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Tabla from './pages/Tabla';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { RespContextProvider } from './context/RespContext';

function App() {

  return (
    <div className='bg-dark'>
      <Navbar />
      <div>
        <RespContextProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tabla" element={<Tabla />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RespContextProvider>
      </div>
    </div>
  )
}

export default App
