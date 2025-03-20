import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TitleUpdater from "./components/UI/TitleUpdater";
import "./styles/global.css";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Register from "./pages/Auth/Register";
import Forbidden from "./pages/Error/Forbidden";
import NotFound from "./pages/Error/NotFound";
import ServerError from "./pages/Error/ServerError";

function App() {
  return (
    <BrowserRouter>
      <TitleUpdater />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forbidden" element={<Forbidden />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="servererror" element={<ServerError />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
