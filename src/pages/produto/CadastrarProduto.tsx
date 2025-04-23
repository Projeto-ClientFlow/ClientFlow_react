import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Categorias } from "../../models/Categorias";
import { ThreeDots } from "react-loader-spinner";
import { cadastrar, buscar } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";
import Produto from "../../models/Produto";

function CadastrarProduto() {
    const navigate = useNavigate();
    const [produto, setProduto] = useState<Produto>({} as Produto);
    const [categorias, setCategorias] = useState<Categorias[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/clientes"); // garante que vai pra lista!
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!produto.nome?.trim()) {
            ToastAlerta("Preencha o nome do produto!", "warn");
            return;
        }

        setIsLoading(true);

        try {
            await cadastrar(`/produtos`, produto, setProduto);
            ToastAlerta("O produto foi cadastrado com sucesso!", "success");

            setTimeout(() => {
                retornar(); // espera um pouco pra deixar o toast aparecer
            }, 1500);
        } catch (error: any) {
            ToastAlerta("Erro ao cadastrar o produto.", "error");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
      async function carregarCategorias() {
          try {
              await buscar("/categorias", setCategorias);
          } catch (error) {
              ToastAlerta("Erro ao buscar categorias!", "error");
          }
      }

      carregarCategorias();
    }, []);


    return (
        <div className="flex pt-[100px] min-h-screen bg-[#f9f9f9]">
            {/* Coluna do formulário */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-12">
                <h1 className="text-4xl font-bold text-[#FF8000] mb-6 mt-10 text-center">
                    Cadastre o seu cliente
                </h1>

                <form className="w-full flex flex-col gap-4" onSubmit={gerarNovoProduto}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao" className="text-[#FF8000] font-bold mb-0 text-lg">
                            Nome
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o nome do cliente"
                            name="nome"
                            className="w-full bg-[#f0f0f0] pl-4 pr-4 py-3 rounded-xl border border-[#FF8000]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8000]"
                            value={produto.nome || ""}
                            onChange={atualizarEstado}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="segmento" className="text-[#FF8000] font-bold mb-0 text-lg">
                            Segmento
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o segmento do cliente"
                            name="segmento"
                            className="w-full bg-[#f0f0f0] pl-4 pr-4 py-3 rounded-xl border border-[#FF8000]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8000]"
                            value={produto.segmento || ""}
                            onChange={atualizarEstado}
                        /> 
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="segmento" className="text-[#FF8000] font-bold mb-0 text-lg">
                            Ponto focal
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o nome do ponto focal do cliente"
                            name="pontoFocal"
                            className="w-full bg-[#f0f0f0] pl-4 pr-4 py-3 rounded-xl border border-[#FF8000]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8000]"
                            value={produto.pontoFocal || ""}
                            onChange={atualizarEstado}
                        /> 
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="segmento" className="text-[#FF8000] font-bold mb-0 text-lg">
                            Valor do contrato
                        </label>
                        <input
                            type="number"
                            placeholder="Digite o valor do contrato"
                            name="valorContrato"
                            className="w-full bg-[#f0f0f0] pl-4 pr-4 py-3 rounded-xl border border-[#FF8000]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8000]"
                            value={produto.valorContrato || ""}
                            onChange={atualizarEstado}
                        /> 
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="categoria" className="text-[#FF8000] font-bold mb-0 text-lg">
                            Categoria
                        </label>
                        <select
                            name="categoria"
                            className="w-full bg-[#f0f0f0] pl-4 pr-4 py-3 rounded-xl border border-[#FF8000]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8000]"
                            value={produto.categoria?.id || ""}
                            onChange={(e) => {
                                const categoriaSelecionada = categorias.find(cat => cat.id === Number(e.target.value));
                                setProduto({ ...produto, categoria: categoriaSelecionada });
                            }}
                        >
                            <option value="" disabled>Selecione uma categoria</option>
                            {categorias.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.descricao}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        className="text-white bg-[#FF8000] flex items-center justify-center py-2 px-8 rounded-xl shadow-md mt-4 mx-auto min-w-[150px]"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ThreeDots color="white" width="30" visible={true} />
                        ) : (
                            <span>Cadastrar</span>
                        )}
                    </button>
                </form>
            </div>

            {/* Coluna da imagem */}
            <div className="w-1/2 hidden md:flex justify-center items-center p-0">
                <img
                    src="https://ik.imagekit.io/willa/pexels-fauxels-3184416.jpg?updatedAt=1745179200931"
                    alt="Cadastro do Produto"
                    className="w-full h-screen object-cover"
                />
            </div>
        </div>
    );
}

export default CadastrarProduto;