import React, { useEffect, useState } from 'react'
import { useChatContext } from '../context/ChatContext';


const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const { selectedConversation, messages, setMessages } = useChatContext();

    useEffect(()=>{
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${import.meta.env.VITE_CHATS_API}${selectedConversation.id}`);

                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error || 'Something went wrong.');
                }
                setMessages(data.data);
            } catch (error) {
                toast.error(error);
            } finally {
                setLoading(false);
            }
        }
        getMessages();
    },[selectedConversation?.id,setMessages])

    return { loading, messages };
};

export default useGetConversation;
