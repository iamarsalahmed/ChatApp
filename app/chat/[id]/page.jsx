'use client'
import React, { useState, useEffect } from 'react'

const chat = () => {

 
  // const [user, setUser] = useState()
  const [message, setMessage] = useState("")
  const [messagestore, setmessageStore] = useState([])

  const handleSend = ()=>{
    setmessageStore( prev => [...prev, message])
  
    setMessage("")
  }
  console.log("Message", messagestore)
  return (<>
 <div className="fixed bottom-0 w-full bg-white p-2">
  <div className="flex flex-col space-y-2 mb-16 px-4">

    <div className="self-start bg-gray-200 text-black p-2 rounded-lg max-w-xs">
      Message from other user
    </div>
    
    <div className="self-end bg-green-500 text-white p-2 rounded-lg max-w-xs">
      Message from me
    </div>

  </div>

  <div className="flex items-center w-full max-w-2xl mx-auto">
    <input 
    value={message}
    onChange={(e)=>{setMessage(e.target.value)}}
      
      type="text" 
      placeholder="Enter Your Message" 
      className="flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
    />
    <button onClick={handleSend} className="ml-2 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full text-sm w-16 h-10 flex items-center justify-center transition duration-300">
      Send
    </button>
  </div>
</div>



    </>
  )
}

export default chat
