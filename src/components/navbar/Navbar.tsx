import { Link } from "react-router-dom";

function Navbar() {
return (
    <>
    <div className="w-full flex justify-center font-rubik py-4 px-4 bg-[#FFF9F8] text-white fixed border-b border-[#FF8000] z-50">
        <div className="container flex justify-between text-lg">
            <Link
                to="/home"
                className="text-4xl text-[#FF8000] py-3 px-8 rounded-lg font-bold cursor-pointer"
            >
                ClientFlow
            </Link>

        <div className="flex gap-6 text-[#FF8000] py-4 px-4 font-rubik font-bold">
            <div className="flex gap-6 items-center cursor-pointer">
                <Link
                    to="/sobre-nos"
                    className="text-1xl font-semibold text-[#FF8000] cursor-pointer"
                >
                    Sobre nós
                </Link>
                <Link
                    to="/clientes"
                    className="text-1xl font-semibold text-[#FF8000] cursor-pointer"
                >
                    Listar clientes
                </Link>
                <Link
                    to="/cadastrarproduto"
                    className="text-1xl font-semibold text-[#FF8000] cursor-pointer"
                >
                    Cadastrar clientes
                </Link>
                <Link
                    to="/categorias"
                    className="text-1xl font-semibold text-[#FF8000] cursor-pointer"
                >
                    Listar categorias
                </Link>
                <Link
                    to="/cadastrarcategorias"
                    className="text-1xl font-semibold text-[#FF8000] cursor-pointer"
                >
                    Cadastrar categorias
                </Link>
            </div>

        </div>
        </div>
    </div>
    </>
);
}

export default Navbar;