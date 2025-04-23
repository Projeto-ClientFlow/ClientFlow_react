import axios from "axios";

const api = axios.create({
    baseURL: 'https://clientflow.onrender.com'
})

export const cadastrar = async <T>(url: string, dados: T, setDados: (resposta: T) => void) => {
    const resposta = await api.post<T>(url, dados);
    setDados(resposta.data);
};

export const atualizar = async <T>(url: string, dados: T, setDados: (resposta: T) => void) => {
    const resposta = await api.put<T>(url, dados);
    setDados(resposta.data);
};

export const listar = async <T>(url: string, setDados: (resposta: T) => void) => {
    const resposta = await api.get<T>(url);
    setDados(resposta.data);
};

export const buscar = async <T>(url: string, setDados: (resposta: T) => void) => {
    const resposta = await api.get<T>(url);
    setDados(resposta.data);
};

export const deletar = async (url: string) => {
    await api.delete(url)

}
  