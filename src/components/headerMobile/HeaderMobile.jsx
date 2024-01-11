import { useEffect, useRef, useState } from "react";
import React from "react";
import "./headermobile.css";
import { RiMenu2Line } from "react-icons/ri";
import logo from "../../assets/images/ATR.png"
import { Link } from "react-router-dom";

function HeaderMobile() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false); // corrigido aqui
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuRef]);


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
    <div className="headerMobile" >
      <div className="menuIcon" onClick={toggleMenu} ref={menuRef}>
        <RiMenu2Line className="IconMenuHeaderMobile" />
      </div>

      {menuVisible && (
        <div className="mobileMenu">
        {/* <RiMenu2Line className="IconMenuHeaderMobile" /> */}
          <ul>
            <li>
              <Link className='homeMobileButton'to="/home">Início</Link>
            </li>
            <li>
            <span onClick={scrollTosobremim}>Sobre mim</span>
            </li>
            <li>
            <span onClick={scrollToprojetos}>Projetos</span>
            </li>
            <li>
            <span onClick={scrollTohabilidades}>Habilidades</span>
            </li>
          </ul>
          <div className="logoHeaderMobile">
            <img src={logo} alt="Logo" />
          </div>
        </div>
      )}

    </div>
  );
}

export default HeaderMobile;
