// CardCategorias.tsx
import { Link } from "react-router-dom";
import { Categorias } from "../../../models/Categorias";

interface CardCategoriasProps {
    categorias: Categorias;
    onDelete: (id: string) => void;  // Função de exclusão
}

function CardCategorias({ categorias, onDelete }: CardCategoriasProps) {
    return (
        <div className="bg-white shadow-[0_6px_16px_rgba(0,0,0,0.1)] flex flex-col rounded-2xl overflow-hidden justify-between">
            <div className="flex items-center justify-center h-full p-8">
                <p className="text-2xl bg-white font-bold text-[#FF8000] text-center">
                    {categorias.descricao}
                </p>
            </div>

            <div className="flex space-x-4 p-4">
                <Link
                    to={`/atualizarcategorias/${categorias.id}`}
                    className="w-full text-white bg-[#FF8000] flex items-center justify-center py-2 rounded-xl font-semibold"
                >
                    Editar
                </Link>

                <button
                    onClick={() => onDelete(String(categorias.id))}  // Chama a função de exclusão
                    className="w-full text-white bg-[#8c8e98] flex items-center justify-center py-2 rounded-xl font-semibold"
                >
                    Deletar
                </button>
            </div>
        </div>
    );
}

export default CardCategorias;