import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

function MessageInput() {
  const [message, setMessage] = useState("");

  const {loading, sendMessage} = useSendMessage();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) {
      return;
    }
    await sendMessage(message);
    setMessage("");
  }
  return (
    <form className="px-4 my-3" onClick={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? <span className="loading loading-spinner"></span> : <BsSend /> }
        </button>
      </div>
    </form>
  );
}

export default MessageInput;

// STARTER CODE
// import {BsSend} from "react-icons/bs";

// function MessageInput() {
//   return (
//     <form className="px-4 my-3">
//       <div className="w-full relative">
//         <input
//           type="text"
//           className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
//           placeholder="Send a Message"
//         />
//         <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
//             <BsSend />
//         </button>
//       </div>
//     </form>
//   );
// }

// export default MessageInput;
