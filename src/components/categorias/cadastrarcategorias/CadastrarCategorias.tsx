import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Categorias } from "../../../models/Categorias";
import { Hearts, ThreeDots } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { cadastrar } from "../../../services/Service";

function FormCategorias() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState<Categorias>({} as Categorias);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategorias({
            ...categorias,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/categorias"); // garante que vai pra lista!
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!categorias.descricao?.trim()) {
            ToastAlerta("Preencha o nome da categoria!", "warn");
            return;
        }

        setIsLoading(true);

        try {
            await cadastrar(`/categorias`, categorias, setCategorias);
            ToastAlerta("A categoria foi cadastrada com sucesso!", "success");

            setTimeout(() => {
                retornar(); // espera um pouco pra deixar o toast aparecer
            }, 1500);
        } catch (error: any) {
            ToastAlerta("Erro ao cadastrar a categoria.", "error");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex pt-[100px] min-h-screen bg-[#f9f9f9]">
            {/* Coluna do formulário */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-12">
                <h1 className="text-4xl font-bold text-[#FF8000] mb-6 mt-10 text-center">
                    Cadastre a categoria
                </h1>

                <form className="w-full flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao" className="text-[#FF8000] font-bold mb-0 text-lg">
                            Nome da Categoria
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o nome da categoria"
                            name="descricao"
                            className="w-full bg-[#f0f0f0] pl-4 pr-4 py-3 rounded-xl border border-[#FF8000]/50 focus:outline-none focus:ring-2 focus:ring-[#FF8000]"
                            value={categorias.descricao || ""}
                            onChange={atualizarEstado}
                        />
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
                    src="https://ik.imagekit.io/larissamata/Screenshot_18.png?updatedAt=1745373937189"
                    alt="Cadastro de categoria"
                    className="w-full h-screen object-cover"
                />
            </div>
        </div>
    );
}

export default FormCategorias;