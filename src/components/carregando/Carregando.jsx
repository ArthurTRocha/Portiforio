import React from "react";
import "./carregando.css"
import logo from "../../assets/images/ATR.png"


function Carregando (){
    return (
        <div className="carregando">
          <img src={logo} alt="Logo"  className="logoCarregando"/>
      <h1>Bem Vindo ao meu portfolio...</h1>
      <p>Arthur Teixeira Rocha</p>
        </div>
    )
}
export default Carregando;