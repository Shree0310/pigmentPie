import { Link } from "react-router-dom";
import ColorSchemeToggle from "./ColorSchemeToggle";

const Header = ()=>{
    return (
        <div className="flex items-center justify-between shadow-md h-20">
            <div className="flex items-center mx-6">
            <div className="font-bold text-xl text-gray-800 tracking-wide" style={{ fontFamily: "'Cormorant SC', serif" }}>Sourashree Banerjee</div>
            </div>
            
            <div className="flex items-between">
                <ul className="flex">
                    <li className="px-3 py-1">
                        <ColorSchemeToggle/> 
                    </li>
                    <li className="px-3 py-1">
                        <Link to="/projects">
                            projects
                        </Link>
                    </li>
                    <li className="px-3 py-1">
                        posts
                    </li>
                    <li className="px-3 py-1">
                        <Link to="/about">
                            about
                        </Link>
                        
                    </li>
                    <li className="px-3 py-1">
                        uses
                    </li>
                    <li className="px-3 py-1 mx-4">
                        say hi
                    </li>
                </ul>

            </div>
              
        </div>
    )
}

export default Header;