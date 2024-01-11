import React from "react";
import "./homedois.css"
import tecnologia from "../../assets/images/homedois.json"
import Lottie from 'lottie-react';
import { CgMenuMotion } from "react-icons/cg";



function HomeDois (){

    const optionsHD = {
        loop: true,
        autoplay: true,
        animationData: tecnologia, 
      };

    return (
        <div className="homeDois" id="homeDois">
             <h1><CgMenuMotion  className="iconHomeDois"/>Sobre mim<CgMenuMotion className="iconHomeDois"/></h1>
            <div className="posicionamentoHomeDois">
            <div className="textoHomeDois">
                <p className="phomeDois">Me chamo Arthur Teixeira Rocha, sou apaixonado por 
                tecnologia e escolhi a programação como minha trilha profissional. 
                Trabalhei em projetos envolvendo e-commerce, integração de API's e banco de dados. 
                Estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir 
                para o avanço tecnológico.</p>

                <p className="pdoisHomeDois">
                Atualmente estou cursando análise e desenvolvimento de sistemas (ADS) e
                focando no desenvolvimento FullStack.</p>
            </div>
            <div className="animacaoHomeDois">
            <Lottie {...optionsHD} />
            </div>
            </div>

            <div className="animacaoHomeDoisMM">
            <div className="animacaoHomeDoisM">
            <Lottie {...optionsHD} />
            </div>
            </div>
        </div>
    )
}
export default HomeDois;