'use client'
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import {useSession} from 'next-auth/react'
import {collection,deleteDoc,doc} from 'firebase/firestore'
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../firebase"

type Props={
    id:string
}

function ChatRow({id}:Props) {
   const [active,setActive]= useState<Boolean>()
   const pathName = usePathname()
   const router = useRouter()
   const{data:session}= useSession()
  
  
  const [messages]= useCollection(
    collection(db,'users',session?.user?.email!,'chats', id,'messages')
  )

  useEffect(()=>{
    if(!pathName)return

    setActive(pathName.includes(id))
  },[pathName])

  const removeChat = async ()=>{
  await deleteDoc(doc(db,'users',session?.user?.email!,'chats',id))
  router.replace('/')
  }

  return (
    <Link  href={`/chat/${id}`}
    className={`chatRow justify-center ${
        active&& 'bg-gray-700/50'
    }`}
    > {/*truncate does ... if text gots too big*/}
        <ChatBubbleLeftIcon className="w-5 h-5"/>
        <p className="flex-1 hidden md:inline-flex truncate">{messages?.docs[messages?.docs.length-1]?.data().text ||'New Chat'}</p>
        <TrashIcon onClick={()=>removeChat()}
        className="w-5 h-5 text-gray-700 hover:text-red-700"/>

    </Link>
  )
}

export default ChatRow