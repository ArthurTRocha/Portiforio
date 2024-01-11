import React from "react";
import "./hometres.css"
import { CgMenuMotion } from "react-icons/cg";
import CarouselProjeto from "../carouselProjetos/CarouselProjeto";
import CarouselProjetoM from "../carouselProjetos/CarouselProjetoM";


function HomeTres () {
    return (
        <div className="homeTres" id="homeTres">
            <div className="homeTresTextos">
                <h1><CgMenuMotion  className="iconHomeDois"/>
                Projetos
                <CgMenuMotion  className="iconHomeDois"/></h1>
            </div>
            <div className="projetosHomeTres">
                <CarouselProjeto/>
            </div>
            <div className="projetosHomeTresM">
                <CarouselProjetoM/>
            </div>
        </div>
    )
}
export default HomeTres;