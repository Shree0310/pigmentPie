import { Link } from "react-router-dom";
import ColorSchemeToggle from "./ColorSchemeToggle";
import './ColorSchemeToggle.css'
import { useState } from "react";

const Header = ()=>{

    const [isOpen, setIsOpen] = useState(false);

    const isToggle = ()=>{
        return setIsOpen(!isOpen);
    }

    return (
        
        <nav>
        <div className="h-3 shadow-md">
        <div className="flex items-center justify-between py-4 pb-28">
            <div className="flex items-center mx-6">
            <div className="font-sans sub-text font-bold text-xl text-gray-800 tracking-wide">
                Sourashree banerjee
            </div>
            </div>
            <div className="">
            <div className="flex items-between">                
                <div className="lg:px-3 lg:py-1">
                    <ColorSchemeToggle/> 
                </div>
                    <ul className="hidden lg:flex">
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
            {/* Hamburger toggle menu visible on small screens headers */}
            <div className="flex lg:hidden">
                <button
                    onClick={isToggle}
                    className="text-orange-500 focus:outline-none pt-1 mr-4"
                    >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>  
            </div>
               

            {/* Drop down menu visible on small screens */} 
           
                <div className={`${isOpen ? 'block' : 'hidden' } lg:hidden absolute top-16 w-full h-full z-50 sub-text bag-color `}>
                    <ul className="text-center pt-32 font-medium text-4xl">
                        <li href="" className="block pb-8"> 
                            <Link to='/projects' onClick={isToggle}>
                                projects
                            </Link>
                        </li>
                        <li href="" className="block pb-8"> 
                            <Link to='' >
                                posts
                            </Link>
                        </li>
                        <li href="" className="block pb-8">
                            <Link to='/about' onClick={isToggle}>
                                about
                            </Link>
                        </li>
                        <li href="" className="block pb-8">say hi</li>
                    </ul>

                </div>
       
        </div>
        </div>
        </nav>
    )
}

export default Header;