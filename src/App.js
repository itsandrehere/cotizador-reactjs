import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from './funtions/helper'
import Resumen from './components/resumen/resumen';
import Result from './components/resultado/result';

class App extends Component {

  state = {
    resultado : '',
    datos : {}
  }

  cotizar = (datosForm) => {
      const { marca, plan, year } = datosForm; 
      //agregar base de 2000
        let resultado = 2000;
      //Obtener diferencia de ano, y por cada ano restar el 3%
        const diferencia = obtenerDiferenciaAnio(year);
        resultado -= ((diferencia * 3) * resultado) / 100
      //Amerciano es 15%, asiatico 5% y europeo 30% al valor actual
        resultado = calcularMarca(marca) * resultado;
      // el plan basico aumento el 20% y el completo un 50%
        let incremento = obtenerPlan(plan);
        resultado = parseFloat(incremento * resultado).toFixed(2);
        console.log(resultado)

        const datosAuto ={
          marca: marca,
          plan : plan,
          year : year
        }
        this.setState({
          resultado: resultado,
          datos: datosAuto
        })
}

  render() {
    return (
      <div className="App">
        <Header/>
        <Form PropsCotizar={this.cotizar} />
        <Resumen Datos={this.state.datos} />
        <Result resultado={this.state.resultado}/>
      </div>
    );
  }
}

export default App;
