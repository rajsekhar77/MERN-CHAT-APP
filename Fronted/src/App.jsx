import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContex.jsx";

function App() {
  // These are the protected Routes with the help of 'authUser'
  const {authUser} = useAuthContext();
  
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={ authUser ? <Home /> : <Navigate to={"/login"} /> } />
        <Route path="/login" element={ authUser ? <Navigate to={"/"} /> :<Login />} />
        <Route path="/signup" element={ authUser ? <Navigate to={"/"} /> : <SignUp />} />
      </Routes>
      <Toaster></Toaster>
    </div> 
  );
}

export default App;
