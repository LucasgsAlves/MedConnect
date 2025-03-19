import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
