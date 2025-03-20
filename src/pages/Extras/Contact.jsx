import React from "react";
import NavBar from "../../components/Layout/NavBar";
import Button from "../../components/UI/Button";

function Contact() {
  return (
    <main className="pb-10">
      <NavBar />
      <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row items-center justify-between px-6">
        <div className="flex-1 max-w-200 text-left lg:pr-10">
          <h1 className="text-4xl font-bold mb-4 text-blue-500">
            Entre em Contato Conosco
          </h1>
          <p className="text-lg text-gray-700">
            Estamos aqui para ajudar! Preencha o formulário ao lado ou entre em
            contato pelos nossos canais de atendimento. Nossa equipe está pronta
            para atender suas dúvidas e solicitações.
          </p>
        </div>

        <div className="flex-1 w-full max-w-lg bg-white p-6 shadow-lg rounded-lg border">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
            Formulário de Contato
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Digite sua mensagem"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
