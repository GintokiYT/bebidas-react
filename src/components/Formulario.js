import { useContext, useState } from 'react';
import Estilos from './Formulario.module.css';

import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
  
  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

  const [ busqueda, guardarBusqueda ] = useState({
    nombre: '',
    categoria: ''
  }); 

  const handleChange = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    buscarRecetas(busqueda);
    guardarConsultar(true);
  }
 
  return (  
    <form 
      className={Estilos.formulario}
      onSubmit={handleSubmit}
    >
      <h2>Busca bebidas por Categoría o Ingrediente</h2>  
      <div>
        <input 
          name="nombre"
          type="text" 
          placeholder="Buscar por ingrediente" 
          onChange={handleChange}
        />
        <select
          name='categoria'
          onChange={handleChange}
          value={busqueda.categoria}
        >
          <option value='' disabled>-- Seleciona Categoria --</option>
          { categorias.map( categoria => {
            const { strCategory:nombre } = categoria
            return (
              <option value={nombre} key={nombre}>{nombre}</option>
            )
          }) }
        </select>
      </div>
      <input 
        type="submit" 
        value='Buscar Bebidas'
      />
    </form>
  );
}
 
export default Formulario;