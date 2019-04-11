import React, {Component} from 'react'
import "./resumen.css";
import { primeraMayuscula } from '../../funtions/helper';

class Resumen extends Component{
   
    mostrarResumen = () =>{
        const {year, marca, plan} = this.props.Datos
        if(!year || !marca || !plan ) return (
            <div className="Resumen">
                <label>Cotiza segun tus valores</label>
            </div>
        )

        return(
                <div className="Resumen">
                    <label>Resumen de tu cotizacion</label>
                    <ul>
                        <li>Marca: { primeraMayuscula(marca)}</li>
                        <li>Año: {primeraMayuscula(year)}</li>
                        <li>Plan: {primeraMayuscula(plan)}</li> 
                    </ul>
                </div>
        )
    }
    render(){
        //const {resultado} = this.props.Datos.resultado;
        return (
            <div >
                {this.mostrarResumen()}
            </div>
        )
    }
}
export default Resumen