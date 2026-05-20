import { Link } from "react-router"

const Nav = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-lg font-bold">MyApp</div>
            <ul className="flex space-x-4">
                <li>
                    <Link to="/mensajes" className="hover:text-gray-200">
                    Mensajes
                    </Link>
                </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Nav