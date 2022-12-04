
import { FaRProject } from "react-icons/fa";
import Login from "./components/pages/Login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/pages/Register/register";
import Forget from "./components/pages/Forget/forget";

import Home from "./components/pages/Home/home";
// import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <Router>
      
      <Routes>
      {/* <Route exact path="/" element={<ProtectedRoute></ProtectedRoute>}/> */}
        <Route exact path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forget" element={<Forget />}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  
   
    
  );
}

export default App