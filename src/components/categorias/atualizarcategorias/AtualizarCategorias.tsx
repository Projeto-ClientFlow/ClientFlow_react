import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Categorias } from "../../../models/Categorias";
import { ThreeDots } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { atualizar, listar } from "../../../services/Service";

function AtualizarCategorias() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState<Categorias>({} as Categorias);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();  // Obtém o id da URL

    // Função para listar a categoria existente
    async function listarCategorias(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategorias);
        } catch (error: any) {
            console.error("Erro ao buscar categoria:", error.response ?? error);
            ToastAlerta("Erro ao buscar a categoria.", "error");
            navigate("/categorias");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            listarCategorias(id);
        }
    }, [id]);

    // Função para atualizar os valores do estado conforme o usuário digita
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategorias({
            ...categorias,
            [e.target.name]: e.target.value,
        });
    }

    // Função para retornar à página de categorias
    function retornar() {
        navigate("/categorias");
    }

    // Função para atualizar a categoria
    async function atualizarCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Envia o id correto da categoria para a API
            await atualizar('/categorias', { ...categorias, id: Number(id) }, setCategorias);
            ToastAlerta("A categoria foi atualizada com sucesso!", "success");
        } catch (error: any) {
            ToastAlerta("Erro ao atualizar a categoria.", "error");
            console.error(error);
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="flex pt-[100px] min-h-screen bg-white">
            <div className="w-1/2 flex flex-col justify-center items-center px-12">
                <h1 className="text-3xl font-bold text-[#FF8000] mb-6 mt-10 text-center">
                    Atualize a categoria
                </h1>

                <form className="w-full flex flex-col gap-4" onSubmit={atualizarCategoria}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao" className="text-[#FF8000] font-semibold mb-2">
                            Nome da Categoria
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o nome da categoria"
                            name="descricao"
                            className="w-full bg-[#f0f0f0] pl-10 pr-4 py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF8000]"
                            value={categorias.descricao}
                            onChange={atualizarEstado}
                        />
                    </div>

                    <button
                        className="text-white bg-[#FF8000] flex items-center justify-center py-2 px-8 rounded-xl shadow-md mt-4 mx-auto"
                        type="submit"
                    >
                        {isLoading ? (
                            <ThreeDots
                                height="30"
                                width="30"
                                radius="9"
                                color="#FFF"
                                ariaLabel="three-dots-loading"
                                visible={true}
                            />
                        ) : (
                            <span>Atualizar</span>
                        )}
                    </button>
                </form>
            </div>

            <div className="w-1/2 hidden md:flex justify-center items-center p-0">
                <img
                    src="https://ik.imagekit.io/willa/pexels-anna-nekrashevich-7552374.jpg?updatedAt=1745179200967"
                    alt="Atualizar categoria"
                    className="w-full h-screen object-cover"
                />
            </div>
        </div>
    );
}

export default AtualizarCategorias;