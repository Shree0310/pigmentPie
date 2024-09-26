import { Link } from "react-router-dom";
import ColorSchemeToggle from "./ColorSchemeToggle";
import './ColorSchemeToggle.css'

const Header = ()=>{
    return (
        
        <nav>
        <div className="h-3 shadow-md">
        <div className="flex items-center justify-between py-4 pb-28">
            <div className="flex items-center mx-6">
            <div className="font-sans sub-text font-bold text-xl text-gray-800 tracking-wide">
                Sourashree banerjee
            </div>
            </div>
            
            <div className="flex items-between">
                <ul className="flex">
                    <li className="px-3 py-1">
                        <ColorSchemeToggle/> 
                    </li>
                    <li className="px-7 py-3 leading-tight border-dashed hover:border-4 hover:border-current transition">
                        <Link to="/projects">
                            projects
                        </Link>
                    </li>
                    <li className="px-7 py-3 leading-tight border-dashed hover:border-4 hover:border-current transition">
                        posts
                    </li>
                    <li className="px-7 py-3 leading-tight border-dashed hover:border-4 hover:border-current transition">
                        <Link to="/about">
                            about
                        </Link>
                        
                    </li>
                    <li className="px-7 py-3 leading-tight border-dashed hover:border-4 hover:border-current transition">
                        uses
                    </li>
                    <li className="px-7 py-3 leading-tight border-dashed hover:border-4 hover:border-current transition">
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