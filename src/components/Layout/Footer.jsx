import { Link } from "react-router-dom";
import iconGitHub from "../../assets/github.svg";
import iconLinkedin from "../../assets/linkedin.svg";

function Footer(){
    return(
        <footer className="flex flex-wrap bg-blue-500 text-white py-6 font-sans">
      <div className="flex flex-wrap gap-4 justify-between w-full px-6 md:px-20 lg:px-40 items-center">
        <div className="flex flex-col max-w-full md:max-w-sm p-4">
          <h1 className="text-3xl md:text-4xl font-medium">Raven</h1>
          <p className="text-xs md:text-sm pt-3 md:pt-5">
            © 2025 MedConnect. Todos os direitos reservados. Conectando você à
            saúde com facilidade e segurança.
          </p>
        </div>

        <div className="flex max-w-full md:max-w-sm p-4 justify-center md:justify-start">
          <div className="flex flex-wrap gap-5 md:gap-10">
            <Link to="/about" className="hover:underline text-sm md:text-base">
              About
            </Link>
            <Link to="/help" className="hover:underline text-sm md:text-base">
              Help
            </Link>
            <Link to="/legal" className="hover:underline text-sm md:text-base">
              Legal
            </Link>
          </div>
        </div>

        <div className="flex flex-col max-w-full md:max-w-sm p-4">
          <h1 className="text-2xl md:text-3xl font-medium">Redes</h1>
          <div className="flex gap-3 md:gap-5 mt-3 justify-center md:justify-start">
            <a
              href="https://github.com/LucasgsAlves"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={iconGitHub}
                alt="GitHub"
                className="w-5 h-5 md:w-6 md:h-6 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/lucasgsalves/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={iconLinkedin}
                alt="LinkedIn"
                className="w-5 h-5 md:w-6 md:h-6 hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
    )
}
export default Footer;