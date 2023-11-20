import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const ChatPage = () => {
    const [chats , setChats] = useState([]);

    const fetchChats = async () => {
        const {data} = await axios.get("/api/users");

        setChats(data);
    }

    useEffect(() => {
        fetchChats();
    } , []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat.id}>{chat.full_name}</div>
      ))}
    </div>
  );
};

export default ChatPage

//Axios is a popular javascript library used for create http get and post requests