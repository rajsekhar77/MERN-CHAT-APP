import React from "react";
import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import useConversation from "../../zustand/useConversation.js";

function Siderbar() {
  const { selectedConversation } = useConversation();

  return (
    <div
      className={`border-r border-slate-500 p-4 flex flex-col ${
        selectedConversation ? "hidden md:flex" : "flex"
      }`}
    >
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
}

export default Siderbar;

// STARTER CODE
// function Siderbar() {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//       <SearchInput />
//       <div className="divider px-3"></div>
//       <Conversations />
//       <LogoutButton />
//     </div>
//   );
// }

// export default Siderbar;