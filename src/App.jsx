import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./login/login";
import Home from "./home/home";
import { useEffect } from "react";

function App() {

  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  useEffect(() => {
    if(token){
      navigate("/home")
    }else{
      navigate("/")
    }
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
