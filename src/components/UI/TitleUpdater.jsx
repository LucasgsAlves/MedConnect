import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {

    const titles = {
      "/": "Home - MedConnect",
      "/Login": "Login - MedConnect",
      "/Register": "Cadastro - MedConnect",
      "/TestComponents": "TestComponents - MedConnect",
    };

    document.title = titles[location.pathname] || "MedConnect";
  }, [location]);

  return null;
}

export default TitleUpdater;
