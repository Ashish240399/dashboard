import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/Forgotpassword/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgot_password" element={<ForgotPassword />}></Route>
      </Routes>
    </div>
  );
}

export default App;
