import Layout from "../components/Layout"

export async function getStaticProps() {

    const req = await fetch('https://viacep.com.br//ws/05763330/json')
    const res = await req.json()
    console.log(res)

    return {
        props: {
            res
        }
    }


}

export default function Estatico(props: any) {
   
    return (
        <Layout titulo='Conteudo Estático'>
            <div>{props.res.logradouro}</div>
        </Layout>
    )
}