import { Link } from "react-router-dom";


import full_random from "../assets/full_random.png"

export default function Navbar() {


  return (

    <nav className="bg-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Full Random</span>
          <img src={full_random} className="object-scale-down h-24 w-24" alt="Logo" />
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link className="text-black border-b block py-2 pr-4 pl-3 md:hover:bg-transparent md:border-0 md:hover:text-orange-700" to="/">
                Accueil
              </Link>        </li>
            <li>
              <Link className="text-black border-b block py-2 pr-4 pl-3 md:hover:bg-transparent md:border-0 md:hover:text-orange-700" to="/users">
                Joueurs
              </Link>        </li>
          </ul>
        </div>
      </div>
    </nav>


  )
};