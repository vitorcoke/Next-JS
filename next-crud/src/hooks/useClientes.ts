import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import CLienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo: CLienteRepositorio = new ColecaoCliente()

    const {formularioVisivel, tabelaVisivel, exibirForm, exibirTabela} = useTabelaOuForm()
    const [clientes, setClientes] = useState<Cliente>(Cliente.vazio())
    const [cliente, setCliente] = useState<Cliente[]>([])
    

    useEffect(obterTodos, [])



    function obterTodos() {
        repo.obterTodos().then((clientes) => {
            setCliente(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setClientes(cliente)
        exibirForm()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente(cliente: Cliente) {
        setClientes(Cliente.vazio())
        exibirForm()
    }

    async function salvatCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        salvatCliente,
        novoCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        cliente,
        clientes,
        tabelaVisivel,
        formularioVisivel,
        exibirForm,
        exibirTabela
    }
}