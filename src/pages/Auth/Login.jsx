import { useState } from "react";
import { Link } from "react-router-dom";
import ravenLogin from "../../assets/ravenIcon.png";
import loginBackground from "../../assets/loginBackground.jpg";

function Login() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row overflow-y-auto">
      <div className="hidden lg:flex w-2/5 min-h-screen bg-blue-500 justify-center items-center">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${loginBackground})` }}
        ></div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-6">
        <div className="container-form-login w-full max-w-md">
          <div className="content-img pb-6 flex justify-center">
            <img src={ravenLogin} className="w-16 md:w-20" alt="Yandex Logo" />
          </div>

          <div className="text-container-top pb-6 text-center">
            <h4 className="text-2xl md:text-4xl font-bold">Olá novamente!</h4>
            <p className="text-sm md:text-xl">Seja Bem-vindo ao Raven!</p>
          </div>

          <form className="w-full">
            <div className="flex flex-col pb-4">
              <label
                className="text-sm md:text-base font-bold pb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 p-2 text-sm md:text-lg rounded-md focus:outline-none focus:ring-2"
                placeholder="@exemplo.com"
                required
              />
            </div>

            <div className="flex flex-col pb-4">
              <label
                className="text-sm md:text-base font-bold pb-2"
                htmlFor="password"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 p-2 text-sm md:text-lg rounded-md focus:outline-none focus:ring-2"
                placeholder="*********"
                required
              />
            </div>

            <div className="flex justify-between pt-4 text-sm md:text-base">
              <label className="flex items-center">
                <input type="checkbox" />
                <span className="pl-2">Lembrar-me</span>
              </label>
              <Link
                to="#"
                className="text-blue-500 font-bold transition-all hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>

            <div className="form-login-button flex justify-center items-center pt-5">
              <button
                type="submit"
                className="p-2 w-full font-bold bg-blue-400 hover:bg-blue-600 text-white rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Login
              </button>
            </div>

            <div className="create-account pt-5 text-center">
              <p>
                Não possui uma conta?{" "}
                <Link
                  to="/Register"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Clique aqui
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
