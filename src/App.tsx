import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreNos from "./pages/sobre_nos/SobreNos";
import { ToastContainer } from "react-toastify";
import ListaCategorias from "./components/categorias/listacategorias/ListaCategorias";
import CadastrarCategorias from "./components/categorias/cadastrarcategorias/CadastrarCategorias";
import AtualizarCategorias from "./components/categorias/atualizarcategorias/AtualizarCategorias";
import DeletarCategorias from "./components/categorias/deletarcategoria/DeletarCategoria";

import "react-toastify/dist/ReactToastify.css";
import CadastrarProduto from "./pages/produto/CadastrarProduto";
import AtualizarProduto from "./pages/produto/AtualizarProduto";
import ListarProduto from "./pages/produto/ListarProduto";


function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[91vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/cadastrarcategorias" element={<CadastrarCategorias />} />
            <Route path="/atualizarcategorias/:id" element={<AtualizarCategorias />} />
            <Route path="/deletarcategorias/:id" element={<DeletarCategorias />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarproduto" element={<CadastrarProduto />} />
            <Route path="/atualizarproduto" element={<AtualizarProduto />} />
            <Route path="/listarprodutos" element={<ListarProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;