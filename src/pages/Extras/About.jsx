import React from "react";
import AboutImage from "../../assets/AboutImage.jpg";
import CosultaMedicaImage from "../../assets/ConsultaMedica.jpg";
import ExameLaboritorialImage from "../../assets/ExameLaboritorial.jpg";
import AtendimentoOnlineImage from "../../assets/AtendimentoOnline.jpg";
import Card from "../../components/UI/Card";
import NavBar from "../../components/Layout/NavBar";

function About() {
  return (
    <main className="pb-10">
      <NavBar />
      <div className="min-h-screen bg-gray-100">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-left p-40">
            <h1 className="text-4xl font-bold mb-4 text-gray-700">
              Bem-vindo à Nossa Clínica
            </h1>
            <p className="text-lg text-gray-700">
              Oferecemos serviços médicos de alta qualidade com uma equipe de
              profissionais dedicados. Nosso objetivo é cuidar da sua saúde com
              excelência e tecnologia, proporcionando um atendimento humanizado
              e eficiente.
            </p>
          </div>

          <div className="flex-1">
            <img
              src={AboutImage}
              alt="Nossa Clínica"
              className="w-full h-96 object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12 px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            O QUE OFEREÇEMOS?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            <Card className="transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
              title="Consultas Médicas"
              description="Agende consultas com nossos especialistas em diversas áreas da saúde."
              image={CosultaMedicaImage}
            />
            <Card className="transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
              title="Exames Laboratoriais"
              description="Realize exames laboratoriais com resultados rápidos e precisos."
              image={ExameLaboritorialImage}
            />
            <Card className="transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
              title="Atendimento Online"
              description="Consulte-se com nossos médicos sem sair de casa, através de nossa plataforma online."
              image={AtendimentoOnlineImage}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
