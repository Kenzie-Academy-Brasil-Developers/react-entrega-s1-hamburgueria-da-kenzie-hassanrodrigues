import { Section, HeaderCart, UlCart, Footer, Li } from "./styles.js";
import { BsFillCartPlusFill } from "react-icons/bs";

const Cart = ({ sale, delet, deletAll }) => {
  const result = sale.reduce((a, b) => b.price + a, 0);

  return (
    <>
      <Section>
        <HeaderCart>
          <h3>Carrinho de compras</h3>
        </HeaderCart>

        <UlCart>
          {sale.length > 0 ? (
            sale.map((item, i) => (
              <Li key={i}>
                <img src={item.img} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.category}</span>
                </div>
                <button onClick={delet}>Remover</button>
              </Li>
            ))
          ) : (
            <>
              <BsFillCartPlusFill
                style={{
                  display: "flex",
                  width: "100px",
                  height: "120px",
                  margin: "48px auto",
                  opacity: 0.3,
                }}
              />
              <p>Sua sacola está vazia</p>
              <p>Adcione Itens</p>
            </>
          )}
        </UlCart>

        <Footer>
          <div>
            <span>Total</span>
            <p>R$ {result.toFixed(2)}</p>
          </div>
          <button onClick={() => deletAll()}>Remover Todos</button>
        </Footer>
      </Section>
    </>
  );
};

export default Cart;
