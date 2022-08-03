import Product from "../Product/index";
import { Ul, Main } from "./styles";
import { useState } from "react";
import Cart from "../Cart/index";
function ProductList({ products, toast, sucess }) {
  const [sale, setSale] = useState([]);

  function deletAll() {
    toast.info("Carrinho vazio!");
    setSale([]);
  }
  function delet(e) {
    let produto = e.target.parentNode.children[1].children[0].textContent;
    toast.info(`${produto} Removido!`);
    let filtrados = sale.filter((item) => item.name !== produto);
    setSale(filtrados);
  }
  function add(e) {
    let id = parseInt(e);
    let produto = products.find((item) => item.id === id);
    let nome = produto.name;
    let pes = sale.find((item) => nome === item.name);

    if (sale.length > 0) {
      if (pes === undefined) {
        sucess(nome);
        setSale((old) => [...old, produto]);
      } else {
        toast.error(`${nome} já foi inserido !`);
      }
    } else {
      sucess(nome);
      setSale((old) => [...old, produto]);
    }
  }

  return (
    <Main>
      <div>
        <Ul>{<Product products={products} add={add} toast={toast} />}</Ul>
      </div>
      {<Cart sale={sale} delet={delet} deletAll={deletAll} />}
    </Main>
  );
}

export default ProductList;
