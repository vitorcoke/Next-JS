
type Teste = {
    titulo:string
}

export default function Cabecalho(props: Teste) {
    
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}