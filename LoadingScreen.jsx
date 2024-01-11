import React from 'react';
import "./styles/loadingscree.css"
import Carregando from "./src/components/carregando/Carregando"

const LoadingScreen = () => {
  return (
    <div className='loadingScreen'>
        <Carregando/>
    </div>
  );
};

export default LoadingScreen;
