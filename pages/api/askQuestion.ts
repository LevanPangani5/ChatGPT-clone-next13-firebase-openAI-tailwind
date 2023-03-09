// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../lib/queryApi'
import admin from 'firebase-admin'
import { adminDb } from '../../firebaseAdmin'

type Data = {
    answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const {prompt,chatId,session,model} =req.body 

  if(!prompt){
    res.status(400).json({answer:'Please provide a prompt!'})
    return
  }
  if(!chatId){
    res.status(400).json({answer:'Please provide a prompt!'})
    return
  }

  const response = await query(prompt,model)

  const message:Message={
    text:response||'ChatGPT was unable to find response for that!',
    createdAt:admin.firestore.Timestamp.now(),
    user:{
      _id:'ChatGPT',
      name:'ChatGPT',
      avatar:'https://links.papareact.com/89k'
    },

  }
  //firebase admin still uses v8 approach from firebase sdk
  await adminDb.collection('user')
  .doc(session?.use?.email)
  .collection('chats')
  .doc(chatId)
  .collection('messages')
  .add(message)

  res.status(200).json({ answer: message.text })
}
