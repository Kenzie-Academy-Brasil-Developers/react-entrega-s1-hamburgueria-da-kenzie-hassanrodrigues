import { Global } from "./global/global";
import { useState, useEffect } from "react";
import "./App.css";
import { ToastContainer, toast, Flip } from "react-toastify";
import Header from "./components/Header/index";
import "react-toastify/dist/ReactToastify.css";
import ProductsList from "./components/ProductsList/index";

function App() {
  const [products, setProducts] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        const filter = res.filter((item) =>
          item.name.toLowerCase().includes(pesquisa.toLowerCase())
        );
        pesquisa.trim() === "" ? setProducts(res) : setProducts(filter);
      });
  }, [pesquisa]);

  function sucess(nome) {
    toast.success(`${nome} adicionado!`);
  }
  return (
    <>
      <Header setPesquisa={setPesquisa} />
      <ProductsList
        setProducts={setProducts}
        products={products}
        toast={toast}
        sucess={sucess}
      />
      <ToastContainer
        theme="colored"
        autoClose="1000"
        position="top-center"
        transition={Flip}
      />

      <Global />
    </>
  );
}

export default App;
