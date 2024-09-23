import githubIcon from "./../Assets/images/github.svg"

const Footer = () =>{
    return (
        
        <div className="flex justify-center">
            <ul className="flex items-between text-sm h-[400px]">
                <li className="font-semibold  px-8">
                    @ Sowrasree Banerjee
                    <p className="font-light px-1">
                        Allrights reserved
                    </p>           
                </li>
                <li className="px-8 font-semibold">
                    powered by
                </li>
                <li className="px-8 font-semibold">
                    socials
                    <ul>
                       <li><a className="font-light" href="https://www.linkedin.com/in/sowrasree-banerjee-810ba2131/">LinkedIn</a></li>
                        <li><a className="font-light" href="https://github.com/Shree0310">Github</a></li>
                        <li><a className="font-light" href="https://x.com/sourashreeart">Twitter</a></li>
                    </ul>
                </li>
                <li className="px-8 font-semibold">
                    colophon
                    <p>
                        <img
                        src={githubIcon}
                        className="h-6 w-6 absolute"/>
                    <a className="font-light relative px-6 " href="https://github.com/Shree0310/pigmentPie">
                        View source
                    </a>
                    </p>
                </li>
                <li className="px-8 font-semibold">
                    sign in my news letter
                </li>
                <li className="px-8 font-semibold">
                    links        
                </li>
            </ul>

        </div>
    )
}

export default Footer;