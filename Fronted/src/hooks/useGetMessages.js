import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { decryptMessage } from "../utils/crypto.utils";

function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const secretKey = import.meta.env.VITE_CRYPTO_SECRET
  console.log(secretKey, 'secret');

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }

        // Decrypt the messages before setting them in state
        const decryptedMessages = data.map(msg => ({
          ...msg,
          message: decryptMessage(msg.message, secretKey)
        }));

        setMessages(decryptedMessages);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
}

export default useGetMessages;
