import CardProduto from './cardproduto/CardProduto'; 

function ListarProduto() {
    return (
        <div className="flex h-screen bg-[#FFF7F2]">
            
            {/* Conteúdo principal */}
            <div className="flex-1 p-10">
                {/* Título e barra de busca */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-orange-500 mb-4">Filtre seus resultados</h1>

                    <div className="flex justify-center gap-2">
                        <input
                            type="text"
                            placeholder="Filtre sua busca"
                            className="px-4 py-2 w-80 rounded-lg border border-gray-300"
                        />
                        <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold">
                            Buscar
                        </button>
                    </div>
                </div>

                {/* Filtros */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {['Casa e Decoração', 'Tecnologia da Informação', 'Educação', 'Agronegócio', 'Moda e Beleza'].map((cat, index) => (
                        <button
                            key={index}
                            className="border border-orange-400 text-orange-500 px-4 py-2 rounded-full text-sm hover:bg-orange-100"
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid de Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    {/* pode repetir ou mapear dados */}
                </div>
            </div>

            {/* Menu lateral direito */}
            <aside className="w-64 bg-[#FFF3E6] p-8 border-l border-orange-100">
                <h2 className="text-2xl font-bold text-orange-500 mb-6">Clientes</h2>
                <ul className="flex flex-col gap-4 text-orange-500 font-medium">
                    <li><a href="#">Cadastro</a></li>
                    <li><a href="#">Atualização</a></li>
                    <li><a href="#">Exclusão</a></li>
                    <li><a href="#">Clientes VIPs</a></li>
                </ul>
            </aside>
        </div>
    );
}

export default ListarProduto;
