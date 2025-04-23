import { useState, useContext, useEffect, ChangeEvent } from "react";
import './CadastrarProduto.css'
import { useNavigate, useParams } from "react-router-dom";
import Produto from "../../models/Produto";
import { Hearts } from "react-loader-spinner";
import { listar, cadastrar } from "../../services/Service";
import { Categorias } from "../../models/Categorias";

function CadastrarProduto() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categorias, setCategorias] = useState<Categorias[]>([])

  const [categorias, setCategorias] = useState<Categorias>({ id: 0, descricao: '', })
  const [produto, setProduto] = useState<Produto>({} as Produto)

  const { id } = useParams<{ id: string }>()


  async function buscarProdutoPorId(id: string) {
      try {
          await listar(`/produto/${id}`, setProduto) 
      } catch (error: any) {
          if (error.toString().includes('403')) {
          }
      }
  }

  async function buscarCategoriasPorId(id: string) {
      try {
          await listar(`/categorias/${id}`, setCategorias)
      } catch (error: any) {
          if (error.toString().includes('403')) {

          }
      }
  }

  async function buscarCategorias() {
      try {
          await listar('/categorias', setCategorias)
      } catch (error: any) {
          if (error.toString().includes('403')) {
          }
      }
  }

  useEffect(() => {
      buscarCategorias()

      if (id !== undefined) {
          buscarProdutoPorId(id)
      }
  }, [id])

  useEffect(() => {
      setProduto({
          ...produto,
          categorias: categorias,
      })
  }, [categorias])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/listarProduto");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);

    try {
      await cadastrar(`/cadastrarproduto`, produto, setProduto);
      alert("O produto foi cadastrado com sucesso!");

      setTimeout(() => {
        retornar();
      }, 1500);
    } catch (error: any) {
      alert("Erro ao cadastrar o produto.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false)
    retornar()
  }

  const carregandoCategorias = Categorias.descricao === '';
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold">
        <div className="fundoCadastrarProduto hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3' >
          <h2 className="font-inter font-bold text-[48px] mt-[58px]" style={{ color: '#FF8000' }}>Cadastre seu cliente</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nomeCliente" className="text-[#FF8000]">Nome</label>
            <input
              type="text"
              id="nomeCliente"
              name="nomeCliente"
              placeholder="Digite o nome do cliente"
              className=" rounded-[10px] border border-[#FF800080] bg-[#FF80000A] px-4 py-2"
              required
              value={produto.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="segmentoCliente" className="text-[#FF8000]">Segmento</label>
            <input
              type="text"
              id="segmentoCliente"
              name="segmentoCliente"
              placeholder="Digite o segmento do seu cliente"
              className=" rounded-[10px] border border-[#FF800080] bg-[#FF80000A] px-4 py-2"
              required
              value={produto.segmento}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="pontoFocalCliente" className="text-[#FF8000]">Ponto Focal</label>
            <input
              type="text"
              id="pontoFocalCliente"
              name="pontoFocalCliente"
              placeholder="Digite o ponto focal do seu cliente"
              className=" rounded-[10px] border border-[#FF800080] bg-[#FF80000A] px-4 py-2"
              required
              value={produto.pontoFocal}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="valorContratoCliente" className="text-[#FF8000]">Valor do Contrato</label>
            <input
              type='number'
              id="valorContratoCliente"
              name="valorContratoCliente"
              placeholder="Digite o valor do contrato"
              className="rounded-[10px] border border-[#FF800080] bg-[#FF80000A] px-4 py-2"
              required
              value={produto.valorContrato}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="categoriaCliente" className="text-[#FF8000]">Categoria</label>
            <select name="categoria" id="categoria" className='rounded-[10px] border border-[#FF800080] bg-[#FF80000A] px-4 py-2' >
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                        <option value="" selected disabled>Selecione um Tema</option>

                        {categorias.map((categoria) => (
                            <>
                                <option value={categorias.id} >{categorias.descricao}</option>
                            </>
                        ))}

                    </select>
          </div>
          <div className="flex justify-around w-full gap-8">
            <button
              type='submit'
              className='rounded-[10px] text-white bg-[#FF8000] 
                           hover:bg-[#AD5700] w-1/2 py-2
                           flex justify-center'
              disabled={carregandoCategorias}
            >
             {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>'Cadastrar'</span>
                    }
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CadastrarProduto;