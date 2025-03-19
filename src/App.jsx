import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles/global.css";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home/Home";

function TitleUpdater() {
  const location = useLocation();

  React.useEffect(() => {
    const titles = {
      "/": "Raven",
      "/Login": "Login - Raven",
    };

    document.title = titles[location.pathname] || "Raven";
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <TitleUpdater />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
