import React from "react";
import "./homecinco.css"
import { FaUser } from "react-icons/fa";
import { CgMenuMotion } from "react-icons/cg";

function HomeCinco () {
    return (
        <div className="homeCinco" id="contato">
            <div className="textoHomeCinco">
                <h1>
                    <CgMenuMotion className="iconHomeDois"/>
                    Contato
                    <CgMenuMotion className="iconHomeDois"/>
                    </h1>
            </div>
            <div className="campoHomeCinco">

<form className="formularioHomeCinco" action="https://formsubmit.co/arthuteixeira30@gmail.com " method="POST" >
<input type="hidden" name="_next" value="https://arthurrocha.site/Sucesso"/> 
<input type="hidden" name="_captcha" value="false"/>
{/* ARRUMAR NAO ESTA ACHANDO A PAGINA */}



<div className="nomeHomeCinco">
    <div className="IconHomeCinco"><FaUser className="InconeCinco" /> <p>Nome</p></div>
    
<input type="text" name="name" 
required 
placeholder='Digite seu nome'
className="inputs"/>
</div>

<div className="emailHomeCinco">
<div className="IconHomeCinco"> <FaUser  className="InconeCinco" /> <p>E-mail</p> </div>
<input type="email" name="email" 
placeholder="Digite seu e-mail"
className="inputs"/>
</div>

<div className="assuntoHomeCinco">
<div className="IconHomeCinco">  <p>Assunto</p> </div>
<input type="text" name="text" 
placeholder="Digite o assunto"
className="inputs"/>
</div>



    <div className="mensagemHomeCinco">
    <div className="IconHomeCinco"><p>Mensagem</p></div>
      <input type="text" name="text"  
      placeholder="Digite a mensagem"
      className="input1"/>
       </div>
{/* ARRUMA AQUI PARA PODE ESCREVER DESDE O INICIO */}
     
       

       <div className="buttonHomeOite">
       <button className="buttonEnvioHomeCinco" type="submit">
                Enviar
            </button>
            </div>
</form>
</div>

            <div className="direitoHomeCinco">
                <h4>© 2023 /  Arthur Teixeira Rocha / Todos os direitos reservados</h4>
            </div>
        </div>
    )
}
export default HomeCinco;
