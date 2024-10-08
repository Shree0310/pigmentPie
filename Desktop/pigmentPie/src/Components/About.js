import "./../index.css"
import  "./ColorSchemeToggle.css"

const About = ()=>{
    return (
        <div>
            <h1 className="font-caskadia italic text-[clamp(2rem,4vw,4rem)] tracking-tight mx-10 pt-32 pb-8">
                <span className="sub-text">/</span>about</h1>
            {/* <h3 className="text-2xl font-sans font-light mx-12">I weave web experiences through code and art.</h3> */}
            <p className="font-satoshi mx-16 text-[24px]">Hi! I'm Sourashree, </p>
            <p className="font-satoshi mx-16 text-[16px]">
            an India-based frontend engineer. I write code for a living, currently as a Software Engineer at EPAM SYSTEMS. I primarily use html, tailwind css, React/ Angular.
            My focus is on creating engaging & accessible digital experiences for humans.
            </p>
            <br/>
            <p className="font-satoshi mx-16 text-[16px]">
            Outside of work I like painting, creating artworks inspired by daily life experiences. I graduated from <a className="sub-text">NIT Raipur</a> in metallurigal and material science engineering. Very early on I realised that I am made for building and designing stuff on the web.
            I have previously worked on Service Now via EPAM as well.
            </p>
            <br/>
            <p className="font-satoshi mx-16 text-[16px]">Thanks for stopping by my site, and don't hesitate to <a className="sub-text"> reach out! </a></p>

            <div className="w-full sub-text overflow-hidden pt-10">
            <ul className="flex font-satoshi list-disc text-[40px] animate-move-text">
                <li className="pr-6">Frontend Development </li>
                <li className="pr-6">Web Accessibility </li>
                <li className="pr-4">Tailwind CSS </li>
                <li className="pr-4">Web Design </li>
                <li className="pr-4">Design Systems</li>
            </ul>
            </div>

            
        </div>
    )
}

export default About;
