import { NumericFormat } from 'react-number-format';
import './CadastrarProduto.css'
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Produto } from "../../models/Produto";
// import { Hearts } from "react-loader-spinner";
import { cadastrar } from "../../services/Services";

function CadastrarProduto() {
    const navigate = useNavigate();
    const [produto, setProduto] = useState<Produto.Produto>({} as Produto.Produto);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

        if (!produto.nomeCliente?.trim()) {
            alert("Preencha o nome do cliente!");
            return;
        }

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
    }
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
             
            />
          </div>
          <div className="flex flex-col w-full">
          <label htmlFor="valorContratoCliente" className="text-[#FF8000]">Valor do Contrato</label>
          <NumericFormat
              id="valorContratoCliente"
              name="valorContratoCliente"
              placeholder="Digite o valor do contrato"
              className="rounded-[10px] border border-[#FF800080] bg-[#FF80000A] px-4 py-2"
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
              fixedDecimalScale
            />
          </div>
          <div className="flex flex-col w-full">
          <label htmlFor="temaCliente" className="text-[#FF8000]">Nome</label>
            <input
              type="text"
              id="temaCliente"
              name="temaCliente"
              placeholder="Digite uma categoria dentre as cadastradas"
              className="rounded-[10px] border border-[#FF800080] bg-[#FF80000A] px-4 py-2"
             
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button 
                type='submit'
                className='rounded-[10px] text-white bg-[#FF8000] 
                           hover:bg-[#AD5700] w-1/2 py-2
                           flex justify-center' 
                >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CadastrarProduto;