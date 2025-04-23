    import { Link } from "react-router-dom";
    
    const MenuFixo = () => {
        return (
        <div className="w-[300px] bg-[#FFF9F8] text-[#FF8000] p-20 shadow-lg flex flex-col items-center border-b border-l border-[#FF8000]">
            <h1 className="font-bold text-center text-2xl mb-6 tracking-wide">
            Categorias
            </h1>
            <ul className="mt-6 font-semibold text-center space-y-4">

    <li className="mb-2">
        <Link to="/cadastrarcategorias" className="text-[#FF8000]">
        Cadastrar
        </Link>
        </li>


    </ul>

        </div>
        );
    };
    
    export default MenuFixo;
    