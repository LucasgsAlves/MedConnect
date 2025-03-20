import { useState } from "react";
import { Link } from "react-router-dom";
import ravenIcon from "../../assets/ravenIcon.png";

function Register() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="w-full min-h-screen flex overflow-y-auto">
        <div className="flex-1 min-h-screen flex flex-col justify-center items-center p-6">
          <div className="container-form-login w-full max-w-md">
            <div className="content-img pb-10 flex items-center justify-center">
              <img src={ravenIcon} className="w-20" alt="Yandex Logo" />
            </div>
            <div className="text-container-top pb-10 text-center ">
              <h4 className="text-3xl sm:text-4xl font-bold items-center ">
                Crie sua conta!
              </h4>
              <p className="text-base sm:text-1xl">
                Seja Bem-vindo ao Raven, por favor insira suas informações
              </p>
            </div>
            <form className="w-full max-h-screen">
              <div className="flex flex-col pb-4">
                <label className="text-base font-bold pb-2" htmlFor="fullname">
                  Nome
                </label>
                <input
                  type="fullname"
                  id="fullname"
                  className="w-full border border-black p-2 text-sm sm:text-lg rounded-xs focus:outline-none 
                  focus:ring-1"
                  placeholder="Nome"
                  required
                />
              </div>

              <div className="flex flex-col pb-4">
                <label className="text-base font-bold pb-2" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-black p-2 text-sm sm:text-lg rounded-xs focus:outline-none 
                  focus:ring-1"
                  placeholder="@exemplo.com"
                  required
                />
              </div>

              <div className="flex flex-col pb-4">
                <label className="text-base font-bold pb-2" htmlFor="password">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-black p-2 text-sm sm:text-lg rounded-xs focus:outline-none 
                  focus:ring-1"
                  placeholder="*********"
                  required
                />
              </div>

              <div className="flex flex-col pb-4">
                <label className="text-base font-bold pb-2" htmlFor="confirm-password">
                  Confirmar Senha
                </label>
                <input
                  type="confirm-password"
                  id="confirm-password"
                  className="w-full border border-black p-2 text-sm sm:text-lg rounded-xs focus:outline-none 
                  focus:ring-1"
                  placeholder="*********"
                  required
                />
              </div>

              <div className="flex flex-col pb-4">
                <label className="text-base font-bold pb-2" htmlFor="adress">
                  Endereço
                </label>
                <input
                  type="adress"
                  id="adress"
                  className="w-full border border-black p-2 text-sm sm:text-lg rounded-xs focus:outline-none 
                  focus:ring-1"
                  placeholder="Endereço"
                  required
                />
              </div>

              <div className="form-login-button flex justify-center items-center pt-5">
                <button
                  id="login-btn"
                  type="button"
                  className="p-2 w-full font-bold cursor-pointer bg-blue-400 hover:bg-blue-600 text-white rounded-md
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Criar Conta
                </button>
              </div>

              <div className="create-account pt-5">
                <p>
                  Já possui uma conta?{" "}
                  <Link
                    to="/Login"
                    className="text-blue-500 font-bold relative cursor-pointer transition-all duration-300 
                    hover:underline"
                  >
                    Clique aqui
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;