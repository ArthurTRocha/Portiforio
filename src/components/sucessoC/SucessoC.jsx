import React from "react";
import "./sucessoc.css"
import sucess from "../../assets/images/sucess.jpg"

function SucessoC () {
    return (
        <div className="sucessoC">
            <img src={sucess} alt="Sucesso" />
            <h1>Contato enviado com sucesso !!!</h1>
        </div>
    )
}
export default SucessoC;