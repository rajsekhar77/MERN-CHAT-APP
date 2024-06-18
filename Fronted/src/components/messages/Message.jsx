import React from "react";
import { useAuthContext } from "../../context/AuthContex";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({message}) => {
  const { authUser } = useAuthContext();
  const {selectedConversation} = useConversation();

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-sky-500' : '';
  const fromattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? 'shake' : '';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {fromattedTime}
      </div>
    </div>
  );
}

export default Message;

// STARTER CODE
// function Message() {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind CSS chat bubble component"
//             src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
//           />
//         </div>
//       </div>
//       <div className="chat-bubble text-white bg-blue-500">
//         Hi how are you
//       </div>
//       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">Seen at 12:46</div>
//     </div>
//   );
// }

// export default Message;
