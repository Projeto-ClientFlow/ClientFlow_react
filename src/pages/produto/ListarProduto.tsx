import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Search } from "lucide-react";
import { listar } from "../../services/Service";
import CardProduto from "./cardproduto/CardProduto";
import Produto from "../../models/Produto";

function ListarProdutos() {

    const [produto, setProdutos] = useState<Produto[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [busca, setBusca] = useState<string>(""); 
    const [produtoFiltrado, setProdutoFiltrado] = useState<Produto[]>([]);

    const listarProduto = async () => {
        setIsLoading(true);
        try {
            await listar("/produtos", setProdutos);
        } catch (error: any) {
            console.error("Erro ao listar categorias:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
          listarProduto();
          setIsLoading(false);
        }, 800); // Tempo em ms pra ver o spinner (3 segundos)
      }, []);

      const filtrarProduto = () => {
        const produtoFiltrado = produto.filter((produto) =>
            produto.nome.toLowerCase().includes(busca.toLowerCase())
        );
        setProdutoFiltrado(produtoFiltrado);
    };

    useEffect(() => {
        setProdutoFiltrado(produto);
    }, [produto]);

    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center min-h-screen">
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#FF8000"  // Cor do spinner
                    ariaLabel="three-dots-loading"
                    visible={true}
                />
            </div>
            ) : (
                <div className="flex w-auto pt-[100px] min-h-screen">
                    <div className="flex-1 px-8">

                        {/* Título centralizado */}
                        <h1 className="text-3xl px-6 py-3 mt-8 font-bold text-[#FF8000] mb-6 text-center">
                            Busque seus clientes
                        </h1>

                        {/* Barra de pesquisa e botão */}
                        <div className="flex space-x-4 items-center mb-15 max-w-xl mx-auto w-full">
                            {/* Barra de pesquisa do lado esquerdo */}
                            <div className="relative w-full">
                                <Search
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
                                    size={20}
                                />
                                <input
                                    type="text"
                                    placeholder="Filtre sua busca"
                                    className="w-full bg-[#f0f0f0] pl-10 pr-4 py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF8000]"
                                    value={busca}
                                    onChange={(e) => setBusca(e.target.value)}
                                />
                            </div>

                            {/* Botão de buscar */}
                            <button
                                className="text-white bg-[#FF8000] flex items-center justify-center py-3 px-6 rounded-xl shadow-md hover:bg-[#ff7000] cursor-pointer"
                                onClick={filtrarProduto}
                            >
                                <span className="font-semibold">Buscar</span>
                            </button>
                        </div>

                        {/* Lista de cards */}
                        <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4 pb-4">
                            {produtoFiltrado.map((produto) => (
                                <CardProduto
                                    key={produto.id}
                                    produto={produto}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ListarProdutos;