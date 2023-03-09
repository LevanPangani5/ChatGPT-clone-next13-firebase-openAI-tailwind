'use client'
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline"
import { collection, orderBy, query } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../firebase"
import Message from "./Message"

type Props={ 
    chatId:string
}


function Chat({chatId}:Props) {
  const {data:session} = useSession()
  
  const [messages]= useCollection(session&&query(
    collection(db,'users',session?.user?.email!,'chats',chatId,'messages'),
    orderBy('createdAt','asc')
  ))
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {messages?.empty &&(
        <>
        <p className="mt-10 text-center text-white">
          Type a prompt in below to get started!
        </p>
        <div className="flex justify-center">
        <ArrowDownCircleIcon className='h-10 w-10 max-auto mt-5
        text-white animate-bounce '/>
        </div>
       
        </>
      )}

      {messages?.docs.map((message)=>(
        <Message  message={message.data()}/>
      ))}
    </div>
  )
}

export default Chat