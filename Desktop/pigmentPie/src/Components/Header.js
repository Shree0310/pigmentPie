import { Link } from "react-router-dom";
import ColorSchemeToggle from "./ColorSchemeToggle";

const Header = ()=>{
    return (
        <nav>
        <div className="h-3 shadow-md">
        <div className="flex items-center justify-between py-4">
            <div className="flex items-center mx-6">
            <div className="font-bold text-xl text-gray-800 tracking-wide" style={{ fontFamily: "'Cormorant SC', serif" }}>Sourashree Banerjee</div>
            </div>
            
            <div className="flex items-between">
                <ul className="flex">
                    <li className="px-3 py-1">
                        <ColorSchemeToggle/> 
                    </li>
                    <li className="px-3 py-3">
                        <Link to="/projects">
                            projects
                        </Link>
                    </li>
                    <li className="px-3 py-3">
                        posts
                    </li>
                    <li className="px-3 py-3">
                        <Link to="/about">
                            about
                        </Link>
                        
                    </li>
                    <li className="px-3 py-3">
                        uses
                    </li>
                    <li className="px-3 py-3 mx-1">
                        say hi
                    </li>
                </ul>

            </div>
              
        </div>
        </div>
        </nav>
    )
}

export default Header;