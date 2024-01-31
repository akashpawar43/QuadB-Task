import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full bg-black border-b sticky top-0">
            <div className=" container mx-auto p-4">
                <div className="flex flex-row text-white justify-between">
                    <div>Movie</div>
                    <div>
                        <ul className="flex flex-row gap-4">
                            <Link to="/">
                                <li id="nav1" className="hover:text-cyan-600">Home</li>
                            </Link>
                            <li className="hover:text-cyan-600">About</li>
                            <li className="hover:text-cyan-600">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
