import React, { Component } from 'react'
import Rows from './Rows.jsx';
import Preguntas from './Preguntas.jsx'

export class CuadroCrucigrama extends Component {

  cargarEstructura=(() => {
    let num = this.props.num;
    const rows = [];

    for (num; num <= 25; num++) {
      rows.push(<Rows key={num}/>);
    }

    return  <div className='col col-7 center crossword rounded bg-dark d-block h-25' id="crossword">{rows}</div>

  })

  render() {
    return (
      <div className='d-flex justify-content-center mx-auto px-3 py-3 row'>
        {this.cargarEstructura()}
        <Preguntas />
      </div>
    )
  }
}

export default CuadroCrucigrama
