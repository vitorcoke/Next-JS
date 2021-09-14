import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req:NextApiRequest, res: NextApiResponse){
    const codigo= req.query.codigos
    console.log(req)
    res.status(200).json({
        id: codigo,
        nome: `vitor ${codigo}`,
        email: `vitorcoke${codigo}@gmail.com`
    }) 
}
