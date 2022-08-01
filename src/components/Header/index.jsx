import { HeaderStyled } from "./styles";
import logo from "../../assets/logo.png";

const Header = ({ setPesquisa }) => {
  return (
    <HeaderStyled>
      <img src={logo} alt="Burguer Kenzie" />
      <nav>
        <input
          maxLength={15}
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(event) => setPesquisa(event.target.value)}
        />
        <button>Pesquisar</button>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
