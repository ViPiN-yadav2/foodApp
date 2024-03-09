import "./App.css";
import Home from "./screen/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import { CartProvider } from "./components/ContextReducer";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/creatuser" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
