import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import Estilos from './Modal.module.css';
import imgClose from '../assets/close.svg';

const Modal = () => {

  const { guardarEstadoModal, datosReceta } = useContext(ModalContext);

  const { strDrink, strInstructions, strDrinkThumb } = datosReceta;

  const ingredientes = [];

  for (let i = 1; i <= 15 ; i++) {
    if(datosReceta[`strIngredient${i}`] !== null) {
      ingredientes.push(datosReceta[`strIngredient${i}`] + " " + datosReceta[`strMeasure${i}`]);
    }
  }

  const handleClick = () => {
    guardarEstadoModal(false);
  }

  return (  
    <div className={Estilos.contenedor}>
      <div className={Estilos.modal}>
        <div className={Estilos.modalHeader}>
          <h3 className={Estilos.titulo}>{strDrink}</h3>
          <img 
            className={Estilos.cerrar} 
            src={imgClose} 
            alt="Cerrar" 
            onClick={handleClick}
          />
        </div>
        <div className={Estilos.modalBody}>
          <p style={{fontWeight: 'bold'}}>Ingredientes: </p>
          <ul>
            {ingredientes.map( (e,i) => {
              return (
                <li key={i}>{i+1}. {e}</li>
              )
            })}
          </ul>
          <p style={{fontWeight: 'bold'}}>Preparación: </p>
          <p className={Estilos.preparacion}>{strInstructions}</p>
          <img className={Estilos.imagen} src={strDrinkThumb} alt={`Imagen de ${strDrink}`} />
        </div>
      </div>
    </div>
  );
}
 
export default Modal;