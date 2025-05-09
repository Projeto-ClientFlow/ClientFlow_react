import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';

interface CardProdutoProps {
    produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps ) {
    return (
        
        <div className="bg-white shadow-[0_6px_16px_rgba(0,0,0,0.1)] flex flex-col rounded-2xl overflow-hidden justify-between p-2">
             <div className="flex flex-col items-center justify-center h-full p-2">
                <div className="mt-4">
                    {produto.valorContrato > 10000 ? (
                    <img src="https://ik.imagekit.io/willa/coroa.png?updatedAt=1745427272458" alt="Coroa" className="w-10 h-10" />
                    ) : (
                    <img src="https://ik.imagekit.io/willa/simbolo-de-diamante%20(1).png?updatedAt=1745427272315" alt="Ícone padrão" className="w-10 h-10" />
                    )}
                </div>
                 <p className="text-2xl bg-white font-bold text-[#FF8000] text-center p-6">
                    Cliente {produto.nome}
                </p>
                <div className="text-1xl bg-white text-[#858690] text-center">
                    <span className="font-bold"> Segmento: </span>
                    <span>
                    {produto.segmento}
                    </span>
                </div>
                <div className="text-1xl bg-white text-[#858690] text-center">
                    <span className="font-bold"> Ponto Focal: </span>
                    <span>
                    {produto.pontoFocal}
                    </span>
                </div>
                <div className="text-1xl bg-white text-[#858690] text-center">
                    <span className="font-bold">Valor do Contrato: </span>
                    <span>
                    R$ {produto.valorContrato},00
                    </span>
                </div>
                <div className="text-1xl bg-white text-[#858690] text-center">
                    <span className="font-bold">Categoria: </span>
                    <span>
                    {produto.categoria?.descricao}
                    </span>
                </div>
            </div>
            <div className="flex flex-col 1-col">
                <div className="flex space-x-4 p-4">
                    <Link
                        to={`/atualizarproduto/${produto.id}`}
                        className="w-full text-white bg-[#FF8000] flex items-center justify-center py-2 rounded-xl font-semibold cursor-pointer hover:bg-[#ff7000]  transition-colors duration-200 font-rubik"
                    >
                        Editar
                    </Link>  
                    <Link
                        to={`/deletarproduto/${produto.id}`}
                        className="w-full text-white bg-[#5e5f66] flex items-center justify-center py-2 rounded-xl font-semibold cursor-pointer hover:bg-[#4d4c4c] transition-colors duration-200 font-rubik"
                    >
                        Deletar
                    </Link> 
                </div>
            </div>
        </div>
    );
}

export default CardProduto;