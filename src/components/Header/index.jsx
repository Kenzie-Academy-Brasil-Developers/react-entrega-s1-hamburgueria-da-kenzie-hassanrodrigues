import { HeaderStyled } from "./styles";
import logo from "../../assets/logo.png";

const Header = ({ setPesquisa }) => {
  return (
    <HeaderStyled>
      <img src={logo} alt="Burguer Kenzie logo" />
      <nav>
        <input
          maxLength={17}
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(e) => setPesquisa(e.target.value)}
        />
        <button>Pesquisar</button>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
