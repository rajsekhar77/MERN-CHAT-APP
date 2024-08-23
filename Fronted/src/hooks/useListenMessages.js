import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from '../assets/sound/notification.mp3';
import { decryptMessage } from "../utils/crypto.utils";

function useListenMessages() {
  const { socket } = useSocketContext();
  const { messages, setMessages , selectedConversation} = useConversation();

  const secretKey = 'your-secret-key';

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      if(selectedConversation._id == newMessage.senderId) {
        newMessage.shouldShake = true;
        const sound = new Audio(notificationSound);
        sound.play();
  
        // decrypting the message from server and display to the client
        // Optionally decrypt the message for immediate display (if needed)
        const decryptedMessage = { ...newMessage, message: decryptMessage(newMessage.message, secretKey) };
    
        setMessages([...messages, decryptedMessage]); 
      }
    });
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, setMessages, messages]);
}

export default useListenMessages;
