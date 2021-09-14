import { useState } from "react"
import Cliente from "../core/Cliente"
import Botao from "./Botao"
import Entrada from "./Entrada"

type FormularioProps = {
    cliente: Cliente 
    cancelado?: () => void
    clienteMudou?:(cliete: Cliente) => void
}



export default function Fomulario(props:FormularioProps){
    const id = props.cliente?.id 
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '')
    return(
        <div>
            {id ? (
                <Entrada texto='Código' valor={id} somenteLeitura className='mb-5'></Entrada>
            ) : false}
            
            <Entrada texto='Nome' valor={nome} valorMudou={setNome} className='mb-5'></Entrada>
            <Entrada texto='Idade' valor={idade} tipo='number' valorMudou={setIdade} ></Entrada>

            <div className='flex justify-end mt-7'>
                <Botao cor='blue' className='mr-2' onClick={()=> props.clienteMudou?.(new Cliente(nome, Number(idade), id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        

        </div>
    
    )
}