import { Link } from 'react-router-dom';

function CardProduto() {
    return (
        <div className='bg-white shadow-lg rounded-2xl w-80 h-96 flex flex-col justify-between border border-gray-200'>
            <div className="flex justify-center pt-4">
                <div className="w-4 h-4 bg-gray-400 rotate-45"></div>
            </div>

            {/* Conteúdo principal */}
            <div className="px-6 flex flex-col gap-1 text-center">
                <h2 className="text-orange-500 font-bold text-lg">Cliente La Mesita</h2>

                <p><span className="font-semibold">Segmento:</span> Mesa posta</p>
                <p><span className="font-semibold">Valor do contrato:</span> R$ 9.000,00</p>
                <p><span className="font-semibold">Ponto focal:</span> Guilherme Fiqueira</p>
                <p><span className="font-semibold">Categoria:</span> Casa e Decoração</p>
            </div>

            {/* Botões */}
            <div className="flex gap-4 px-6 py-4">
                <Link to='' className='w-full'>
                    <button className='w-full bg-orange-400 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold'>
                        Editar
                    </button>
                </Link>

                <Link to='' className='w-full'>
                    <button className='w-full bg-gray-400 hover:bg-gray-600 text-white py-2 rounded-lg font-semibold'>
                        Deletar
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default CardProduto;
