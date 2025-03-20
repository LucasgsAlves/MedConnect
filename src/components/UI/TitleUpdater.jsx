import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {

    const titles = {
      "/": "Home - MedConnect",
      "/Login": "Login - MedConnect",
      "/Register": "Cadastro - MedConnect",
      "/About": "Sobre Nós",
      "/Contact": "Contato",
      "/TermsAndConditions": "Termos e Condições",
      "/Forbidden": "Forbidden - 403",
      "/NotFound": "NotFound - 404",
      "/ServerError": "ServerError - 500",
    };

    document.title = titles[location.pathname] || "MedConnect";
  }, [location]);

  return null;
}

export default TitleUpdater;
