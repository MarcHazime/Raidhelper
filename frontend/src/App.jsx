import { Routes, Route } from "react-router-dom";


import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";


import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
