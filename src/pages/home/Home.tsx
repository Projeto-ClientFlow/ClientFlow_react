function Home() {
    return (
        <div className="min-h-screen flex flex-col">
        <div className="relative w-full flex-grow">
            {/* Imagem de fundo */}
            <img
            src="https://ik.imagekit.io/larissamata/pexels-fauxels-3184405.jpg?updatedAt=1745345320460"
            alt="Imagem Página Home"
            className="w-full h-[110vh] object-cover"
            />

            {/* Título na imagem */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-6">
            <div className="bg-[#FF8000]/60  p-6 rounded-3xl  shadow-lg max-w-4xl border-4 border-[#FF8000]">
                <h1 className="text-white text-4xl md:text-5xl font-bold cursor-default">
                Gerencie clientes com o ClientFlow
                </h1>
            </div>

            {/* Subtítulo */}
            <div className="text-white text-2xl md:text-3xl tracking-wider transform hover:scale-105 transition-all duration-300 cursor-default">
                E destaque seus contratos prioritários, <br />
                
                <span className="font-bold"> categorizando-os como VIPs </span>
            </div>
            </div>
        </div>

        {/* Conteúdo abaixo da imagem */}
        <div className="bg-white text-[#73747e] py-16 px-4">
            <div className="max-w-8xl mx-auto ">
            <p className="text-lg md:text-md leading-relaxed mb-8">
                O <span className="text-[#FF8000] font-bold">ClientFlow</span> é um
                sistema de gerenciamento de clientes desenvolvido para simplificar a
                rotina de atendimento e organização comercial da sua empresa. Com
                uma interface prática e recursos inteligentes, ele permite controlar
                contratos, registrar interações e identificar seus clientes mais
                importantes com facilidade.
            </p>

            <h3 className="text-md font-semibold mb-4">
                Principais funcionalidades:
            </h3>
            <ul className="list-disc pl-6 text-lg md:text-md leading-relaxed mb-8">
                <li>
                Gestão completa de clientes: Armazene e consulte informações
                essenciais de cada cliente em um só lugar, como dados de contato,
                valor do contrato, segmento de operação, dentre outros;
                </li>
                <li>
                Destaque contratos prioritários com a categoria VIP: Classifique
                os contratos mais estratégicos como VIP e visualize rapidamente o
                que merece mais atenção e cuidado no seu dia a dia;
                </li>
                <li>
                Acompanhamento de relacionamento: Registre atendimentos,
                negociações e observações para garantir um relacionamento próximo
                e personalizado com seus clientes.
                </li>
            </ul>

            <h3 className="text-md font-semibold mb-4">
                Por que escolher o ClientFlow?
            </h3>
            <ul className="list-disc pl-6 text-lg md:text-md leading-relaxed mb-8">
                <li>Interface simples e intuitiva;</li>
                <li>Priorização de clientes estratégicos com marcação VIP;</li>
                <li>Acesso seguro e centralizado às informações;</li>
                <li>Redução de retrabalho e perdas de dados;</li>
                <li>
                Perfeito para pequenas e médias empresas que buscam organização e
                crescimento.
                </li>
            </ul>
            </div>
            <span className="text-xl font-medium font-rubik text-[#2E2E2E] bg-[#D28246]/20 border-l-4 border-[#FF8000] px-6 py-4 mt-6 mb-8 rounded-md shadow-sm text-center leading-relaxed inline-block">
            Com o<span className="text-[#FF8000] font-bold"> ClientFlow</span>,
            sua empresa ganha controle, agilidade e visão estratégica sobre sua
            base de clientes. Valorize quem faz seu negócio crescer e leve sua
            gestão para o próximo nível!
            </span>
        </div>
        </div>
    );
    }

    export default Home;