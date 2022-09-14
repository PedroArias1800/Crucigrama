import React, { Component } from 'react';
import Columns from './Columns.jsx';


export class Rows extends Component {

    cargarEstructuraSquare=(() => {
        let num = 1
        const columns = [];

        for (num; num <= 25; num++) {
            columns.push(<Columns key={num}/>);
        }

        console.table(columns)
        return columns;
    });

    render() {
        return (
            <div className='row mx-auto justify-content-center m-0 p-0' key={this.props.num}>{this.cargarEstructuraSquare()}</div>
        )
    }
}

export default Rows
