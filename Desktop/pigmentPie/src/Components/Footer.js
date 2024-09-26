import githubIcon from "./../Assets/images/github.svg"

const Footer = () =>{
    return (
        
        <footer className="bg-transparent">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <ul className="flex items-between text-sm h-[400px]">
                            <li className="font-semibold  px-8">
                                @2024 Sowrasree Banerjee
                                <p className="font-light px-1">
                                    Allrights reserved
                                </p>           
                            </li>
                        </ul>
                    </div>
                    <div>
                    <ul>
                        <li className="px-8 font-semibold">
                            socials
                            <ul>
                            <li><a className="font-light" href="https://www.linkedin.com/in/sowrasree-banerjee-810ba2131/">LinkedIn</a></li>
                                <li><a className="font-light" href="https://github.com/Shree0310">Github</a></li>
                                <li><a className="font-light" href="https://x.com/sourashreeart">Twitter</a></li>
                            </ul>
                        </li>
                    </ul>        
                    </div>
                    <div>
                    <ul>
                        <li className="px-8 font-semibold">
                            colophon
                        </li> 
                        <li>
                        <p>
                            <img
                                src={githubIcon}
                                className="h-6 w-6 absolute"/>
                            <a className="font-light relative px-6 " href="https://github.com/Shree0310/pigmentPie">
                                View source
                            </a>
                            </p>
                        </li> 
                    </ul>
                    </div>
                    <div>
                    <ul>      
                        <li className="px-8 font-semibold">
                            sign in my news letter
                        </li>
                        <li className="px-8 font-semibold">
                            links        
                        </li>
                        </ul>
                    </div>
                          
                        
                </div>    
            </div>
        </footer>
    )
}

export default Footer;