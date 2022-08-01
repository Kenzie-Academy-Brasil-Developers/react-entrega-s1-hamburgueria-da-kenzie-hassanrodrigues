import Product from "../Product/index";
import { Ul, Main } from "./styles";
import { useState } from "react";
import Cart from "../Cart/index";
function ProductList({ products, toast, sucess }) {
  const [CurrentSale, setCurrentSale] = useState([]);

  function deletAll() {
    toast.info("Carrinho vazio!");
    setCurrentSale([]);
  }
  function delet(ev) {
    let produto = ev.target.parentNode.children[1].children[0].textContent;
    toast.info(`${produto} Removido!`);
    let filtrados = CurrentSale.filter((item) => item.name !== produto);
    setCurrentSale(filtrados);
  }
  function add(ev) {
    let produto = {
      id: parseInt(ev),
      produt: this.products.find((item) => this.product.id === this.id),
      nome: this.product.name,
      find: CurrentSale.find((item) => this.name === item.name),
    };
    if (CurrentSale.length > 0) {
      if (produto.find === undefined) {
        sucess(produto.nome);
        setCurrentSale((old) => [...old, produto.product]);
      } else {
        toast.error(`${produto.nome} já foi inserido !`);
      }
    } else {
      sucess(produto.nome);
      setCurrentSale((old) => [...old, produto.product]);
    }
  }

  return (
    <Main>
      <div>
        <Ul>{<Product products={products} add={add} toast={toast} />}</Ul>
      </div>
      {
        <Cart
          currentSale={CurrentSale}
          setCart
          remove={delet}
          removeAll={deletAll}
        />
      }
    </Main>
  );
}

export default ProductList;
