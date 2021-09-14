import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'GET') {
        handleGet(req, res)
    } else {
        res.status(405).send('')
    }

}

function handleGet(req:any, res:any) {
    res.status(200).json({
        id: 3,
        nome: 'Vitor Mazzo Coke',
        idade: 19
    })
}