import { Li, DivImg, DivInfo, H1 } from "./styles";

const Product = ({ products, add, toast }) => {
  return (
    <>
      {products.length > 0 ? (
        products.map((product) => (
          <Li key={product.id}>
            <DivImg>
              <img src={product.img} alt={product.name} />
            </DivImg>
            <DivInfo>
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <span>R$ {product.price.toFixed(2)}</span>
              <button id={product.id} onClick={(event) => add(event.target.id)}>
                Adicionar
              </button>
            </DivInfo>
          </Li>
        ))
      ) : (
        <H1>Nenhum item foi encontrado.</H1>
      )}
    </>
  );
};

export default Product;
