import Estilos from './Header.module.css';

const Header = () => {
  return (  
    <header className={Estilos.header}>
      <h1 className={Estilos.headerTitulo}>Busca Recetas de Bebidas</h1>
    </header>
  );
}
 
export default Header;