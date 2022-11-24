import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {

  const [ idReceta, guardarIdReceta ] = useState(null);
  const [ datosReceta, guardarDatosReceta ] = useState({});

  const [ estadoModal, guardarEstadoModal] = useState(false);

  useEffect(() => {
    const obtenerReceta = async () => {
      if(idReceta === null) {
        return;
      }
      else {
        try {
          const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
          const resultado = await axios.get(url);
          guardarDatosReceta(resultado.data.drinks[0]);
        } 
        catch (error) {
          console.log(error.message);
        }
      }
    }
    obtenerReceta();  
  }, [idReceta])

  return (
    <ModalContext.Provider
      value={{
        datosReceta,
        estadoModal,
        guardarIdReceta,
        guardarEstadoModal,
        guardarDatosReceta
      }}
    >
      { props.children }
    </ModalContext.Provider>
  )
}

export default ModalProvider;