import React from "react";
import { Link } from "react-router-dom";
import ServerErrorImage from "../../assets/ServerError.svg";
import Button from "../../components/UI/Button";

function ServerError() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <img
        src={ServerErrorImage}
        alt="Erro no Servidor"
        className="w-64 h-64 mb-6"
      />
      <h1 className="text-6xl font-bold text-blue-500">500</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Erro no Servidor
      </h2>
      <p className="text-gray-600 mt-2 text-center">
        Ocorreu um erro inesperado no servidor. Por favor, tente novamente mais
        tarde.
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

export default ServerError;
