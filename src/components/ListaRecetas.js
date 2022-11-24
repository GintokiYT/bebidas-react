import { useContext, Fragment } from "react";
import { RecetasContext } from "../context/RecetasContext";
import { ModalContext } from "../context/ModalContext";
import Receta from "./Receta";
import Modal from "./Modal";

import Estilos from './ListaRecetas.module.css';

const ListaRecetas = () => {

  // Extraer las recetas
  const { recetas } = useContext(RecetasContext);
  const { estadoModal } = useContext(ModalContext);

  return (  
    <Fragment>
      <div className={Estilos.contenedor}>
      {recetas.map(receta => {
        const { idDrink: id } = receta;
        return (
          <Receta 
            key={id}
            receta={receta}
          />
        )
      })}
    </div>
    {estadoModal
      ? <Modal />
      : null
    }
    </Fragment>
  );
}
 
export default ListaRecetas;