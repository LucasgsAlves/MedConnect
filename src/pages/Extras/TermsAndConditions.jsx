import React from "react";
import NavBar from "../../components/Layout/NavBar";

function TermsAndConditions() {
  return (
    <main className="">
      <NavBar/>
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">
        Termos e Condições
      </h1>
      <div className="max-w-4xl mx-auto text-gray-700">
        <p className="mb-4">
          Ao acessar este site, você concorda com os seguintes termos e condições...
        </p>
        <h2 className="text-2xl font-bold mt-6">1. Uso do Site</h2>
        <p className="mt-2">
          O uso deste site é permitido apenas para fins pessoais e não comerciais...
        </p>
        <h2 className="text-2xl font-bold mt-6">2. Privacidade</h2>
        <p className="mt-2">
          Respeitamos sua privacidade e garantimos que seus dados serão tratados de forma segura...
        </p>
      </div>
    </div>
    </main>
  );
}

export default TermsAndConditions;