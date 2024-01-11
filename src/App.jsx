import React, { useEffect, useState } from "react";
import './App.css'
import Router from "../router/Router"
import LoadingScreen from "../LoadingScreen.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulando um carregamento assíncrono (pode ser uma requisição à API, por exemplo)
    setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Tempo de espera simulado de 2 segundos
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Router />
      )}
    </>
  );
}

export default App;
