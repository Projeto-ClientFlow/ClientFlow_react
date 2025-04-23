// ListaCategorias.tsx
import { useEffect, useState } from "react";
import { Hearts } from "react-loader-spinner";
import { Categorias } from "../../../models/Categorias";
import CardCategorias from "../cardcategorias/CardCategorias";
import { listar, deletar } from "../../../services/Service";  // Importando deletar
import { Search } from "lucide-react";
import MenuFixo from "../../menu/Menu";

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categorias[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [busca, setBusca] = useState<string>("");
    const [categoriasFiltradas, setCategoriasFiltradas] = useState<Categorias[]>([]);

    const listarCategorias = async () => {
        setIsLoading(true);
        try {
            await listar("/categorias", setCategorias);
        } catch (error: any) {
            console.error("Erro ao listar categorias:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        listarCategorias();
    }, []);

    const filtrarCategorias = () => {
        const categoriasFiltradas = categorias.filter((categoria) =>
            categoria.descricao.toLowerCase().includes(busca.toLowerCase())
        );
        setCategoriasFiltradas(categoriasFiltradas);
    };

    useEffect(() => {
        setCategoriasFiltradas(categorias);
    }, [categorias]);

    const handleDelete = async (id: string) => {
        try {
            // Chamando a função deletar
            await deletar(`/categorias/${id}`);
            // Após deletar, re-carregar a lista
            setCategorias(categorias.filter(categoria => categoria.id !== Number(id)));
            setCategoriasFiltradas(categoriasFiltradas.filter(categoria => categoria.id !== Number(id)));
        } catch (error) {
            console.error("Erro ao deletar categoria:", error);
        }
    };

    return (
        <>
            {isLoading ? (
                <Hearts
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="hearts-loading"
                    wrapperClass="hearts-wrapper mx-auto"
                />
            ) : (
                <div className="flex w-auto pt-[100px] min-h-screen">
                    <div className="flex-1 px-8">
                        <h1 className="text-3xl font-bold text-[#FF8000] mb-6 mt-10 text-center">
                            Busque suas categorias
                        </h1>

                        {/* Barra de pesquisa + botão */}
                        <div className="flex space-x-4 mb-15 max-w-xl mx-auto w-full">
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

                            <button
                                className="text-white bg-[#FF8000] flex items-center justify-center py-3 px-6 rounded-xl shadow-md"
                                onClick={filtrarCategorias}
                            >
                                <span className="font-semibold">Buscar</span>
                            </button>
                        </div>

                        {/* Lista de cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4 pb-4">
                            {categoriasFiltradas.map((categoria) => (
                                <CardCategorias
                                    key={categoria.id}
                                    categorias={categoria}
                                    onDelete={handleDelete}  // Passando handleDelete para o CardCategorias
                                />
                            ))}
                        </div>
                    </div>

                    <MenuFixo />
                </div>
            )}
        </>
    );
}

export default ListaCategorias;