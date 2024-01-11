import React from "react";
import "./header.css"
import logo from "../../assets/images/ATR.png"
import { Link } from "react-router-dom";

function Header (){

    function scrollTosobremim() {
        const servicos = document.getElementById('homeDois');
        if (servicos) {
          servicos.scrollIntoView({ behavior: 'smooth' });
        }
      }

      function scrollToprojetos() {
        const servicos = document.getElementById('homeTres');
        if (servicos) {
          servicos.scrollIntoView({ behavior: 'smooth' });
        }
      }  
      
      function scrollTohabilidades() {
        const servicos = document.getElementById('HomeQuatro');
        if (servicos) {
          servicos.scrollIntoView({ behavior: 'smooth' });
        }
      }

    return (
        <div className="header">
            <header className="headerr">
                <div className="logo">
                    <img src={logo} alt="ATR" />
                </div>
                <div className="opcoesMenuHeader">
                    <Link to="/home">Início</Link>
                    <span onClick={scrollTosobremim}>Sobre mim</span>
                    <span onClick={scrollToprojetos}>Projetos</span>
                    <span onClick={scrollTohabilidades}>Habilidades</span>
                </div>
            </header>
        </div>
    )
}
export default Header;