import React from "react";
import "./homequatro.css"
import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

import { FaReact } from "react-icons/fa";

import { FaNodeJs } from "react-icons/fa";

import { FaPython } from "react-icons/fa";

import { CgMenuMotion } from "react-icons/cg";



function HomeQuatro (){
    return (
        <div className="HomeQuatro" id="HomeQuatro">
            <div className="textoHomeQuatro">
            <h1>
            <CgMenuMotion className="iconHomeDois"/> 
            Habilidades 
            <CgMenuMotion className="iconHomeDois"/>
            </h1>
            </div>
            <div className="habilidadeHomeQuatro">
                <div className="htmlCssJs">
                    <div className="textoshtmlcssjs">
                <h1>HTML CSS JavaScript</h1>
                <p>HTML, CSS e JavaScript são tecnologias fundamentais para o 
                    desenvolvimento web. O HTML organiza o conteúdo da página com tags, 
                    o CSS estiliza e define a aparência visual, enquanto o JavaScript
                    adiciona interatividade, possibilitando que as páginas se tornem 
                    dinâmicas e responsivas. Essas três tecnologias trabalham em conjunto 
                    para criar experiências envolventes e funcionais na web.</p>
                    </div>
                    <div className="iconehtmlcssjs">
                        <IoLogoCss3 className="css"/>
                        <FaHtml5 className="html"/>
                        <IoLogoJavascript className="js"/>
                        </div>
                    </div>
                    <div className="reactJSNative">
                        <div className="textosreact">
                        <h1>React JS e React Native </h1>
                        <p>
                        React JS e React Native são extensões da biblioteca React, destinadas, 
                        respectivamente, ao desenvolvimento de interfaces web e aplicativos móveis nativos.
                        Ambas compartilham a filosofia de componentes reativos, promovendo eficiência e 
                        reutilização de código. O React JS foca em aplicações web, enquanto o React Native 
                        estende esses princípios para criar aplicativos móveis para iOS e Android de forma 
                        eficaz.</p>
                        </div>
                        <div className="iconehtmlcssjs">
                        <FaReact className="react"/>
                        </div>
                        
                    </div>
                    {/* <div className="iconenode">
                        <div className="textosnode">
                        <h1>Node JS</h1>
                        <p>
                            Node.js é um ambiente de execução JavaScript no lado do servidor, permitindo 
                            que os desenvolvedores usem JavaScript para criar aplicações escaláveis,
                            assíncronas e eficientes, com um vasto ecossistema de módulos e uma comunidade 
                            ativa.</p>
                            </div>
                            <div className="iconehtmlcssjs"><FaNodeJs className="node"/></div>
                            
                    </div>
                    <div className="iconepython">
                        <h1>Python</h1>
                        <p>
                        Python é uma linguagem de programação versátil e de fácil leitura, 
                        amplamente usada em diversos domínios, como desenvolvimento web e análise de 
                        dados, devido à sua sintaxe clara e comunidade ativa.</p>
                        <div className="iconehtmlcssjs"><FaPython className="python"/></div>
                    </div> */}
            </div>
        </div>
    )
}
export default HomeQuatro;