import { Header } from "./style";

const HeaderMenu = () => {
  return (
    <Header>
      <div>
        <h1>Negreiros</h1>
      </div>
    
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" for="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>Home</li>
        <li>Tecnologias</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>
    </Header>
  );
};

export default HeaderMenu;
