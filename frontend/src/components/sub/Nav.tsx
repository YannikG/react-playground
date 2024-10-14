import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav className="bg-blue-800 p-4">
            <ul className="flex space-x-6">
                <li>
                    <Link 
                        to="/" 
                        className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Home
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav