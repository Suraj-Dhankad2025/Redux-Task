import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./pages/Cart";
function App() {  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
