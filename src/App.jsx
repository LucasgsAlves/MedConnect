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
import About from "./pages/Extras/About";
import Contact from "./pages/Extras/Contact";
import TermsAndConditions from "./pages/Extras/TermsAndConditions";

function App() {
  return (
    <BrowserRouter>
      <TitleUpdater />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forbidden" element={<Forbidden />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="servererror" element={<ServerError />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="termsandconditions" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
