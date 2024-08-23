import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { encryptMessage, decryptMessage } from "../utils/crypto.utils";

function useSendMessage() {
    const [loading, setLoading] = useState(false);

    const {messages, setMessages, selectedConversation} = useConversation();

    const secretKey = 'your-secret-key';

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            // Encrypt the message before sending
            const encryptedMessage = encryptMessage(message, secretKey);
            
            const res = await fetch(`/api/messages/send/${selectedConversation?._id}`, {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({message : encryptedMessage})
            });
            const data = await res.json();

            if(data.error) {
                throw new Error(data.error);
            }

            // Optionally decrypt the message for immediate display (if needed)
            const decryptedMessage = {
                ...data,
                message: decryptMessage(data.message, secretKey),
            };

            setMessages([...messages, decryptedMessage]);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return {loading, sendMessage};
}

export default useSendMessage;
