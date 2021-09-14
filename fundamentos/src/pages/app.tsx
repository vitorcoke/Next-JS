import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
    return (
        <Layout titulo="Usando componentes">
            <Cabecalho  titulo='Next & React'/>
            <Cabecalho titulo="Fundamentos"/>
        </Layout>
        
    )
}