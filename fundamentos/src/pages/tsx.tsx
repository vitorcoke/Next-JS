import Layout from "../components/Layout"

export default function tsx() {
    const titulo = <h1>Tsx é um conceitor central</h1>

    function subtitulo() {
        return <h2>Muito foda</h2>
    }

    return (
        <div>
            <Layout titulo="Entendendo o TSX">
                {titulo}
                {subtitulo()}
            </Layout>

        </div>
    )
}