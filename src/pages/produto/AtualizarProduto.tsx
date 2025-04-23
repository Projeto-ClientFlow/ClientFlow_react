import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Produto from "../../models/Produto";
import { atualizar, buscar, listar } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { Categorias } from "../../models/Categorias";


function AtualizarProduto() {
    const navigate = useNavigate();
    const [produto, setProduto] = useState<Produto>({} as Produto);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();  
    const [categorias, setCategorias] = useState<Categorias[]>([]);

    
    async function listarProduto(id: string) {
        try {
            await listar(`/produtos/${id}`, setProduto);
        } catch (error: any) {
            console.error("Erro ao buscar produto:", error.response ?? error);
            ToastAlerta("Erro ao buscar o produto.", "error");
            navigate("/produtos");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            listarProduto(id);
        }
    }, [id]);


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/clientes");
    }

    
    async function atualizarProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
          
            await atualizar('/produtos', { ...produto, id: Number(id) }, setProduto);
            ToastAlerta("O produto foi atualizada com sucesso!", "success");
        } catch (error: any) {
            ToastAlerta("Erro ao atualizar o produto.", "error");
            console.error(error);
        }

        setIsLoading(false);
        retornar();
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
        <div className="flex pt-[100px] min-h-screen bg-white">
            <div className="w-1/2 flex flex-col justify-center items-center px-12">
                <h1 className="text-3xl font-bold text-[#FF8000] mb-6 mt-10 text-center">
                    Atualize o produto
                </h1>

                <form className="w-full flex flex-col gap-4" onSubmit={atualizarProduto}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao" className="text-[#FF8000] font-semibold mb-2">
                            Nome do Produto
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o nome do produto"
                            name="nome"
                            className="w-full bg-[#f0f0f0] pl-10 pr-4 py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF8000]"
                            value={produto.nome}
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
                            <span>Atualizar</span>
                        )}
                    </button>
                </form>
            </div>
      
            <div className="w-1/2 hidden md:flex justify-center items-center p-0">
                <img
                    src="https://ik.imagekit.io/willa/pexels-olly-3756679.jpg?updatedAt=1745179200767 "
                    alt="Atualizar produto"
                    className="w-full h-screen object-cover"
                />
            </div>
        </div>
    );
}

export default AtualizarProduto;