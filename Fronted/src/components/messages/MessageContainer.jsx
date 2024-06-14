import React, { useEffect } from "react";
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation.js";
import { useAuthContext } from "../../context/AuthContex.jsx";

function MessageContainer() {
  const { selectedConversation, setSelectedConversation} = useConversation();
  const { authUser } = useAuthContext();

  useEffect(() => {
    // cleanup function => unmountes component
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* HEADER */}
          <div className="bg-slate-500 px-4 py-2 mb-2 flex justify-between">
            <div>
              <span className="label-text">To:</span>{" "}
              <span className="text-gray-900 font-bold">
                {selectedConversation.fullName}
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-900 font-bold">
                {authUser.fullName}
              </span>
              <div className="chat-image avatar">
                <div className="w-7 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src={authUser.profilePic}
                  />
                </div>
              </div>
            </div>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

function NoChatSelected() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👏 John Doe 🤵</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
}

export default MessageContainer;

// STARTER CODE
// import { TiMessages } from "react-icons/ti";
// function MessageContainer() {
//   const noChatSelected = false;
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       {noChatSelected ? (
//         <NoChatSelected />
//       ) : (
//         <>
//           {/* HEADER */}
//           <div className="bg-slate-500 px-4 py-2 mb-2">
//             <span className="label-text">To:</span>{" "}
//             <span className="text-gray-900 font-bold">John Doe</span>
//           </div>
//           <Messages />
//           <MessageInput />
//         </>
//       )}
//     </div>
//   );
// }

// function NoChatSelected() {
//   return (
//     <div className="flex items-center justify-center w-full h-full">
//       <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
//         <p>Welcome 👏 John Doe 🤵</p>
//         <p>Select a chat to start messaging</p>
//         <TiMessages className="text-3xl md:text-6xl text-center" />
//       </div>
//     </div>
//   );
// }

// export default MessageContainer;
