import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = req.searchParams.url
    const data = await fetch(url)
    const servertime = data.headers.get('Date')?.toString()
    console.log('servertime=' + servertime)
}