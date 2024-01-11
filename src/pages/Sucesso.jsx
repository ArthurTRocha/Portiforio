import React from "react";
import "../../styles/sucesso.css"
import Header from '../components/header/Header';
import HeaderMobile from "../components/headerMobile/HeaderMobile"
import SucessoC from "../components/sucessoC/SucessoC";

function Sucesso () {
    return (
        <div className="sucesso">
            <div className="headerMobileee"><HeaderMobile/></div>
            <div className="headerrr"><Header/></div>
            <SucessoC/>
        </div>
    )
}
export default Sucesso;