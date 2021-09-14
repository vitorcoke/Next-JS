import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {

    const [number, setNumber] = useState(0)


    return (
        <Layout titulo='Componente com Estado'>
            <div>{number}</div>
            <button onClick={() => setNumber(number + 1)}>Incrementar</button>
        </Layout>
    )
}