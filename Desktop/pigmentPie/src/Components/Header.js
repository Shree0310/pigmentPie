import { Link } from "react-router-dom";
import ColorSchemeToggle from "./ColorSchemeToggle";

const Header = ()=>{
    return (
        <div className="flex items-center justify-between shadow-md h-20">
            <div className="flex items-center mx-6">
                <p className="font-serif ml-2">Sourashree Banerjee</p>
            </div>
            
            <div className="flex items-between">
                <ul className="flex">
                    <li className="px-3 py-1">
                        <ColorSchemeToggle/> 
                    </li>
                    <li className="px-3 py-1">
                        projects
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