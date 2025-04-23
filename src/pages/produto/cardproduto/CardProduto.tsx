import { Link } from 'react-router-dom';
import { Produto } from '../../../models/Produto';

interface CardProdutoProps {
    produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps ) {
    return (
        
        <div className="bg-white shadow-[0_6px_16px_rgba(0,0,0,0.1)] flex flex-col rounded-2xl overflow-hidden justify-between">
             <div className="flex items-center justify-center h-full p-8">
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
                    {produto.categoria?.descricao ?? 'Categoria não informada'}
                </p>
                <p className="text-2xl bg-white font-bold text-[#FF8000] text-center">
                    {produto.usuario}
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

        // <div className='bg-white shadow-lg rounded-2xl w-80 h-96 flex flex-col justify-between border border-gray-200'>
        //     <div className="flex justify-center pt-4">
        //         <div className="w-4 h-4 bg-gray-400 rotate-45"></div>
        //     </div>

        //     {/* Conteúdo principal */}
        //     <div className="px-6 flex flex-col gap-1 text-center">
        //         <h2 className="text-orange-500 font-bold text-lg">Cliente La Mesita</h2>

        //         <p><span className="font-semibold">Segmento:</span> Mesa posta</p>
        //         <p><span className="font-semibold">Valor do contrato:</span> R$ 9.000,00</p>
        //         <p><span className="font-semibold">Ponto focal:</span> Guilherme Fiqueira</p>
        //         <p><span className="font-semibold">Categoria:</span> Casa e Decoração</p>
        //     </div>

        //     {/* Botões */}
        //     <div className="flex gap-4 px-6 py-4">
        //         <Link to='' className='w-full'>
        //             <button className='w-full bg-orange-400 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold'>
        //                 Editar
        //             </button>
        //         </Link>

        //         <Link to='' className='w-full'>
        //             <button className='w-full bg-gray-400 hover:bg-gray-600 text-white py-2 rounded-lg font-semibold'>
        //                 Deletar
        //             </button>
        //         </Link>
        //     </div>
        // </div>
    );
}

export default CardProduto;