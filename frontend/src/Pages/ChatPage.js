import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ChatPage = () => {
  const [chats, setChats] = useState([])
  const fetchChats = async () => {
      const {data} = await axios.get('/api/chat');
      setChats(chats)
  }
  useEffect(()=>{
      fetchChats()
  },[])
  return (
    <div>
      Chat Page
    </div>
  )
}

export default ChatPage
