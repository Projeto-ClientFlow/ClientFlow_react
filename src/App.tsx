import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreNos from "./pages/sobre_nos/SobreNos";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ListaCategorias from "./components/categorias/listacategorias/ListaCategorias";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/categorias" element={<ListaCategorias />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
