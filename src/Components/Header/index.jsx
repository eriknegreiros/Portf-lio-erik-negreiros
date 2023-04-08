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
       <a href="#home"><li>Home</li></a> 
     <a href="#techs"> <li>Tecnologias</li></a>  
       <a href="#projects"><li>Projetos</li></a> 
      <a href="#talk"><li>Contato</li></a>
      </ul>
    </Header>
  );
};

export default HeaderMenu;
