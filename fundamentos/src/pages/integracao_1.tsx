/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"
import Layout from "../components/Layout"

type Cliente = {
    id?: string
    nome?: string
    email?: string

}

export default function integracao() {

   
    const [cliente, setCliente] = useState<Cliente>({})
    const [codigo, setCodigo] = useState(1)

    function obterCliente() {
        fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then((resp: any) => resp.json())
            .then(dados => setCliente(dados))

    }


    return (
        <Layout>
            <input type="number" value={codigo} onChange = {e => setCodigo(Number(e.target.value))}/>
            <button onClick={obterCliente}>Obter Cliente</button>
            <ul>
                <li>Codigo:{cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>email:{cliente.email}</li>
            </ul>
        </Layout>
    )
}