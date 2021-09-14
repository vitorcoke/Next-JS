import Navegador from '../components/Navegador'
export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap:'wrap'
        }}>
            <Navegador texto="Estiloso" destino='/estiloso' />
            <Navegador texto="App" destino='/app' cor='#9400d3'/>
            <Navegador texto="Tsx" destino='/tsx' cor='crimson'/>
            <Navegador texto="Navegação" destino='/navegacao/' cor='green'/>
            <Navegador texto='Navegação #02' destino='/cliente/123' cor='blue'/>
            <Navegador texto='Componente com estado' destino='/estado' cor='pink'/>
            <Navegador texto = 'Integração com API #01' destino='/integracao_1' cor='yellow'/>
            <Navegador texto = 'Conteúdo Estatico' destino='/estatico' cor='#fa054a'/>
        </div>
    )
}