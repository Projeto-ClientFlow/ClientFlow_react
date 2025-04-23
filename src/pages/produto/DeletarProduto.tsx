import { useState, useEffect } from "react"
import { RotatingLines } from "react-loader-spinner"
import Produto from "../../models/Produto"
import { deletar, listar } from "../../services/Service"
import { ToastAlerta } from "../../utils/ToastAlerta"
import { useNavigate, useParams } from "react-router-dom"




function DeletarProduto() {

    const navigate = useNavigate()

    const [produto, setProduto] = useState<Produto>({} as Produto)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await listar(⁠ /produto/${id} ⁠, setProduto)
        } catch (error: any) {
            
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarproduto() {
        setIsLoading(true)

        try {
            await deletar(⁠ /produto/${id} ⁠)
            ToastAlerta('Produto apagado com sucesso', 'sucesso')

        } catch (error: any) {
            ToastAlerta('Erro ao deletar a produto', 'erro')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/produto")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar produto</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o produto a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-red-800 text-white font-bold text-2xl'>
                    Produto
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{produto.nome}</p>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{produto.segmento}</p>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{produto.pontoFocal}</p>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{produto.valorContrato}</p>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{produto.categoria}</p>

                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                         hover:bg-indigo-600 flex items-center justify-center'
                        onClick={deletarproduto}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarProduto;