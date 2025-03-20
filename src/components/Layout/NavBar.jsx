import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import ravenIcon from "../../assets/ravenIcon.png";

function NavBar() {
  return (
    <nav className=" text-black font-sans shadow-md shadow-black/20">
      <div className="flex flex-wrap justify-between w-full px-6 md:px-20 lg:px-40 items-center p-4">
        <div className="flex flex-wrap gap-4 items-center">
          <img src={ravenIcon} className="w-10" />
        </div>

        <div className="flex gap-5">
          <Link to="/about" className="hover:underline">
            Início
          </Link>
          <Link to="/help" className="hover:underline">
            Consultas
          </Link>
          <Link to="/legal" className="hover:underline">
            Ajuda
          </Link>
          <Link to="/legal" className="hover:underline">
            Ajuda
          </Link>
          <div className="flex gap-8 pl-10">
            <FontAwesomeIcon
              icon={faUser}
              className="text-gray-700 text-2xl cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faBell}
              className="text-gray-700 text-2xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
