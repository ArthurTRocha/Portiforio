import React from "react";
import "./homeum.css"
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import frontEnd from "../../assets/images/frontEnd.json"
import Lottie from 'lottie-react';
import { FaReact } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";






function HomeUm () {

    function scrollTocontato() {
        const servicos = document.getElementById('contato');
        if (servicos) {
          servicos.scrollIntoView({ behavior: 'smooth' });
        }
      }

    const options = {
        loop: true,
        autoplay: true,
        animationData: frontEnd, 
      };

    return (
        <div className="homeUm">
          <div className="posicionamentoHomeUm">
            <div className="textosHomeUm">
            <h1>Arthur Teixeira Rocha <FaReact/></h1>
            <h3>Desenvolvedor WEB e Aplicativos !</h3>
            <div className="redesociaisHomeUm">
                {/* <a href="" target="blank"><FaWhatsapp/></a> */}
                <a href="https://www.instagram.com/arthurrocha.teixeira/" target="blank"><FaInstagram className="iconHomeUm"/></a>
                <a href="https://github.com/ArthurTRocha" target="blank"><FaGithub className="iconHomeUm"/></a>
                <a href="https://www.linkedin.com/in/arthur-teixeira-rocha-7672a9281/" target="blank"><FaLinkedin className="iconHomeUm"/></a>
                <div className="homeUmbutton">
                <button onClick={scrollTocontato}>Contato</button>
                </div>
            </div>
            </div>
            <div className="animacaoHomeUm">
            <Lottie {...options} />
            </div>
            </div>
            <div className="animacaoHomeUmMM">
            <div className="animacaoHomeUmM">
            <Lottie {...options} />
            </div>
            </div>
          
        </div>
    )
}
export default HomeUm;