import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Categorias } from "../../../models/Categorias";
import { listar, deletar } from "../../../services/Service";

function DeletarCategorias() {
  const [categoria, setCategoria] = useState<Categorias | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      listar(`/categorias/${id}`, setCategoria);
    }
  }, [id]);

  const confirmarExclusao = async () => {
    try {
      await deletar(`/categorias/${id}`);
      toast.success("Categoria deletada com sucesso!", {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/listacategorias");
    } catch (error) {
      toast.error("Erro ao deletar a categoria 😥", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error(error);
    }
  };

  const cancelar = () => {
    navigate("/listacategorias");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f8f9fa] pt-[100px]">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-[#FF8000] mb-4">Tem certeza?</h2>
        <p className="text-gray-700 mb-6">
          Deseja realmente deletar a categoria{" "}
          <span className="font-semibold text-[#0061FF]">
            {categoria?.descricao}
          </span>
          ?
        </p>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={confirmarExclusao}
            className="bg-[#FF6B6B] hover:bg-[#e05555] text-white font-semibold py-2 px-6 rounded-xl shadow-md"
          >
            Confirmar
          </button>
          <button
            onClick={cancelar}
            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-6 rounded-xl shadow-md"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategorias;