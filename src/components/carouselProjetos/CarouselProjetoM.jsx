import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselprojetom.css";
import allboro from "../../assets/images/allboro.png";
import fastplay from "../../assets/images/fastplay.png";
import programacao from "../../assets/images/programacao.png";
import portiforio from "../../assets/images/portiforio.png";

function CarouselProjetoM() {
  const projects = [
    {
      title: "All Boro Tours",
      image: allboro,
      description: "Site E-commerce de Vendas de Turismo em Nova Iorque",
    },
    {
      title: "Fast Play",
      image: fastplay,
      description: "Site de divulgação e captação de clientes para uma empresa de marketing",
    },
    {
      title: "Programação",
      image: programacao,
      description: "Site de divulgação de uma empresa de TI",
    },
    {
      title: "Portfólio",
      image: portiforio,
      description: "Projeto Portfólio",
    },
  ];

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Ajuste o tempo desejado em milissegundos (atualmente configurado para 3 segundos)
  };

  return (
    <div className="carouselProjetoM">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="projectSlideM">
            <h1>{project.title}</h1>
            <div className="projectImageM">
              <img src={project.image} alt={project.title} />
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselProjetoM;
