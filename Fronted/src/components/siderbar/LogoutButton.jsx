import React from "react";
import { BiLogOut } from "react-icons/bi";
import { IoArrowBackCircle } from "react-icons/io5";
import useLogout from "../../hooks/useLogout";
import useConversation from "../../zustand/useConversation.js";

function LogoutButton() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [loading, logout] = useLogout();

  return (
    <div className="mt-auto pt-4 flex justify-between">
      {!loading ? (
        <>
          <BiLogOut
            className="w-6 h-6 text-white cursor-pointer"
            onClick={logout}
          />
          {selectedConversation && (
            <IoArrowBackCircle
              className="w-7 h-6 text-white cursor-pointer"
              onClick={() => setSelectedConversation(null)}
            />
          )}
        </>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}

export default LogoutButton;

// STARTER CODE
// import { BiLogOut } from "react-icons/bi";

// function LogoutButton() {
//   return (
//     <div className="mt-auto">
//       <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
//     </div>
//   );
// }

// export default LogoutButton;
