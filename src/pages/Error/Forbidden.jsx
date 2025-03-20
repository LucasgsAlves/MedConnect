import React from "react";
import { Link } from "react-router-dom";
import ForbiddenImage from "../../assets/Denied403.svg";
import Button from "../../components/UI/Button";

function Forbidden() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <img
        src={ForbiddenImage}
        alt="Acesso Negado"
        className="w-64 h-64 mb-6"
      />
      <h1 className="text-6xl font-bold text-blue-500">403</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Acesso negado
      </h2>
      <p className="text-gray-600 mt-2 text-center">
        Você não possui permissão para acessar esta página.
      </p>
      <Link to="/" className="mt-6">
        <Button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer
         transition-transform duration-300 hover:scale-110"
        >
          Voltar à Página Inicial
        </Button>
      </Link>
    </div>
  );
}

export default Forbidden;
