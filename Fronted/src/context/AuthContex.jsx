import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
  // Providing context values to children
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children} { /* children here is <App /> */}
    </AuthContext.Provider>
  );
};
