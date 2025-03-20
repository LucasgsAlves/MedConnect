import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold">Bem-vindo ao Raven!</h1>
        <Link to="/Login" className="text-red-500">Login</Link>
        <Link to="/Register" className="text-red-500">Cadastrar</Link>
        <Link to="/Forbidden" className="text-red-500">Forbidden</Link>
        <Link to="/NotFound" className="text-red-500">NotFound</Link>
        <Link to="/ServerError" className="text-red-500">ServerError</Link>
      </div>
      
    );
  }
  
  export default Home;
  