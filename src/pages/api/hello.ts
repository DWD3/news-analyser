// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/services/db/mongodb'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = await clientPromise
  const db = client.db();
  const collection = await db.collection('news-analyser');
  const allItems = await collection.find({}).toArray();
  res.status(200).json({ name: allItems[0].foo })
}
