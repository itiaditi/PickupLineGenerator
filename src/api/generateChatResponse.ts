// pages/api/generateChatResponse.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { generateChatResponse } from '@/utils/openaiUtils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { messages } = req.body;

    try {
      const response = await generateChatResponse(messages);
      res.status(200).json({ response });
    } catch (error) {
      console.error('Error generating chat response:', error);
      res.status(500).json({ error: 'Failed to generate response' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
