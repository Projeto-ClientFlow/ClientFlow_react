import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listar, deletar } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { RotatingLines } from "react-loader-spinner";
import Produto from "../../models/Produto";

function DeletarProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [isLoading, setIsLoading] = useState(false);

  async function buscarPorId(id: string) {
    try {
      await listar(`/produtos/${id}`, setProduto);
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  }

  async function deletarProduto() {
    setIsLoading(true);
    try {
      await deletar(`/produtos/${id}`);
      ToastAlerta("Produto apagado com sucesso", "sucesso");
    } catch (error) {
      ToastAlerta("Erro ao deletar o produto", "erro");
    }
    setIsLoading(false);
    navigate("/clientes");
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  return (
    <div className="container w-1/3 mx-auto pt-24">
      <h1 className="text-4xl text-center my-4 text-[#FF8000] font-bold">Deletar produto</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o produto a seguir?
      </p>

      <div className="bg-white shadow-[0_6px_16px_rgba(0,0,0,0.1)] flex flex-col rounded-2xl overflow-hidden justify-between p-2">
        <div className="flex flex-col items-center justify-center h-full p-2">
          <div className="mt-4">
            {produto.valorContrato > 10000 ? (
              <img
                src="https://ik.imagekit.io/willa/coroa.png?updatedAt=1745427272458"
                alt="Coroa"
                className="w-10 h-10"
              />
            ) : (
              <img
                src="https://ik.imagekit.io/willa/simbolo-de-diamante%20(1).png?updatedAt=1745427272315"
                alt="Ícone padrão"
                className="w-10 h-10"
              />
            )}
          </div>
          <p className="text-2xl bg-white font-bold text-[#FF8000] text-center p-6">
            Cliente {produto.nome}
          </p>
          <div className="text-1xl bg-white text-[#858690] text-center">
            <span className="font-bold"> Segmento: </span>
            <span>{produto.segmento}</span>
          </div>
          <div className="text-1xl bg-white text-[#858690] text-center">
            <span className="font-bold"> Ponto Focal: </span>
            <span>{produto.pontoFocal}</span>
          </div>
          <div className="text-1xl bg-white text-[#858690] text-center">
            <span className="font-bold">Valor do Contrato: </span>
            <span>R$ {produto.valorContrato},00</span>
          </div>
          <div className="text-1xl bg-white text-[#858690] text-center">
            <span className="font-bold">Categoria: </span>
            <span>{produto.categoria?.descricao}</span>
          </div>
        </div>

        <div className="flex space-x-4 p-4">
          <button
            onClick={() => navigate("/clientes")}
            className="w-full text-white bg-[#f29d4b] flex items-center justify-center py-2 rounded-xl font-semibold"
          >
            Não
          </button>

          <button
            onClick={deletarProduto}
            className="w-full text-white bg-[#8C8E98] flex items-center justify-center py-2 rounded-xl font-semibold"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
