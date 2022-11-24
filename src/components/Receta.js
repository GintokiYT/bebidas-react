import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

import Estilos from './Receta.module.css';

const Receta = ({receta}) => {

  const { guardarIdReceta, guardarEstadoModal } = useContext(ModalContext);

  const handleModal = () => {
    setTimeout(() => {
      guardarEstadoModal(true);
    }, 300);
  }

  return (  
    <div className={Estilos.card}>
      <div className={Estilos.receta}>
        <h2>{receta.strDrink}</h2>
        <img src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />
        <button
          onClick={ () => {
            guardarIdReceta(receta.idDrink);
            handleModal();
          }}
        >
          Ver Receta
        </button>
      </div>
    </div>
  );
}
 
export default Receta;