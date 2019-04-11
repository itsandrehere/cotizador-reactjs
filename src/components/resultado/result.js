import React, {Component} from 'react'
import "./result.css";

class result extends Component {
    mostrarResult = () =>{
        const resul = this.props.resultado
        if(!resul || resul!= NaN ) return (
            <label className="result">No hay ninguna cotizacion
            </label>
        )
        return(
            <label className="result">El resultado es:  ${resul}
            </label>
        )
    }
    render(){
        return(
            <div>
                {this.mostrarResult()}
            </div>
        )
    }
}
export default result