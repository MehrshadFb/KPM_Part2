import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Components/LoginPage.jsx";
import Welcome from "./Components/Welcome.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // return (
  //   <div>
  //     <LoginPage />
  //   </div>
  // );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
