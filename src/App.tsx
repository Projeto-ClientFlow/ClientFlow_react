
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CadastrarProduto from './pages/produto/CadastrarProduto'
import AtualizarProduto from './pages/produto/AtualizarProduto'
import ListarProdutos from './pages/produto/ListarProduto'

function App() {
  return (
    <>
       <BrowserRouter>
         
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastrarproduto" element={<CadastrarProduto />} />
              <Route path="/atualizarproduto" element={<AtualizarProduto />} />
              <Route path="/listarprodutos" element={<ListarProdutos />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
