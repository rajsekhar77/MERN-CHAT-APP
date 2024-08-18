import React, { memo } from "react";
import Conversation from "./Conversation.jsx";
import useGetConversations from "../../hooks/useGetConversations.js";
import { getRandomEmojis } from "../../utils/emojis.js";

const Conversations = memo(() => {
  const { loading, conversations } = useGetConversations();
  console.log("hello world", conversations);
  return (
    <div className={`py-2 flex flex-col overflow-auto`}>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmojis()}
          lastIndex={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
})

export default Conversations;

// STARTER CODE
// function Conversations() {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//     </div>
//   )
// }

// export default Conversations;
