import type { NextPage } from 'next'
import Botao from '../components/Botao'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Fomulario from '../components/Fomularia'
import useClientes from '../hooks/useClientes'




const Home: NextPage = () => {

  const { selecionarCliente, excluirCliente, cliente, clientes, novoCliente, salvatCliente, tabelaVisivel, formularioVisivel,exibirForm, exibirTabela } = useClientes()
 

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r
     from-blue-500 to-purple-500 text-white`}>

      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao cor='green' className='mb-4' onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={cliente} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}></Tabela>
          </>
        ) : (
          <Fomulario cliente={clientes} cancelado={() => exibirTabela()} clienteMudou={salvatCliente}></Fomulario>
        )}


      </Layout>
    </div>
    
  )
  
}

export default Home
