import githubIcon from "./../Assets/images/github.svg"

const Footer = () =>{
    return (
        <div className="flex justify-center">
            <ul className="flex items-between pt-96  text-sm">
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