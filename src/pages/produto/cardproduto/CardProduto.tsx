import { Link } from 'react-router-dom';
import { Produto } from '../../../models/Produto';

interface CardProdutoProps {
    produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps ) {
    return (
        
        <div className="bg-white shadow-[0_6px_16px_rgba(0,0,0,0.1)] flex flex-col rounded-2xl overflow-hidden justify-between">
             <div className="flex flex-col items-center justify-center h-full p-8">
                 <p className="text-2xl bg-white font-bold text-[#FF8000] text-center">
                    {produto.nome}
                </p>
                <p className="text-2xl bg-white font-bold text-[#FF8000] text-center">
                    {produto.segmento}
                </p>
                <p className="text-2xl bg-white font-bold text-[#FF8000] text-center">
                    {produto.pontoFocal}
                </p>
                <p className="text-2xl bg-white font-bold text-[#FF8000] text-center">
                    {produto.valorContrato}
                </p>
                <p className="text-2xl bg-white font-bold text-[#FF8000] text-center">
                    {produto.categoria?.descricao}
                </p>
            </div>
            <div className="flex space-x-4 p-4">
                <Link
                    to={`/atualizarproduto/${produto.id}`}
                    className="w-full text-white bg-[#FF8000] flex items-center justify-center py-2 rounded-xl font-semibold"
                >
                    Editar
                </Link>  
            </div>
            <div className="flex space-x-4 p-4">
                <Link
                    to={`/deletarproduto/${produto.id}`}
                    className="w-full text-white bg-[#FF8000] flex items-center justify-center py-2 rounded-xl font-semibold"
                >
                    Deletar
                </Link>  
            </div>
        </div>
    );
}

export default CardProduto;