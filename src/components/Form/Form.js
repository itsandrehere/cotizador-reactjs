import React, { Component } from "react";
import "./Form.css";

class Form extends Component {

    //refs es para leer los valores de los campos de un formulario

    marcaRef = React.createRef();
    yearRef = React.createRef();
    basicoRef = React.createRef();
    completoRef = React.createRef();

    //funcion para guardar datos de formulario
   CotizarSeguro = (e) => {
        e.preventDefault();
       

        //obtener datos

            // console.log(this.marcaRef.current.value);
            

        //crear el objeto
            const plan =  this.basicoRef.current.checked ? 'basico' : 'completo'
            const infoAuto = {
                marca: this.marcaRef.current.value,
                year: this.yearRef.current.value,
                plan: plan,
            }
           // console.log(infoAuto);
            

        //enviar a props en App.js  
        
        this.props.PropsCotizar(infoAuto);

        //resetear formulario

        e.currentTarget.reset(); // resetear formulario con react

    }
    
  render() {
    return (
      <div className="form-div">
        <form onSubmit={this.CotizarSeguro}>
          <div className="row">
            <div className="col-md 6">
              <div className="form-group">
                <label >Marca</label>
                <select className="form-control" id="marca" ref={this.marcaRef}>
                  <option></option>
                  <option value="americano">Americano</option>
                  <option value="europeo">Europeo</option>
                  <option value="asiatico">Asiatico</option>
                </select>
              </div>
            </div>
            <div className="col-md 6">
              <div className="form-group">
                <label >Año</label>
                 <select className="form-control" id="ano" ref={this.yearRef}>
                  <option></option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                </select>
              </div>
              <div />
            </div>
          </div>
          <div className="row"> 
                <div className="col md-3">
                  <input className="form-check-input" name="plan" type="radio"  value="basico" ref={this.basicoRef} /> Basico
                  
                </div>
                <div className="col md-3">
                    <input className="form-check-input" name="plan" type="radio"  value="completo" ref={this.completoRef} /> Completo
                </div>
          </div>
          <div >
            <button type="submit" className="button-cotizar">Cotizar</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
