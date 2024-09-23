import './../App.css'


const Projects = () =>{
    return (
        <div>
            <h1 className="font-caskadia italic text-[clamp(2rem,4vw,4rem)] tracking-tight mx-10 pt-32 pb-8">
            <span className="sub-text">/</span>selected-works
            </h1>
            <ul className="font-satoshi mx-16 text-[24px]">A non-chronological list of select projects covering front-end development works.</ul>
            <li className="list-none mx-16 text-[80px] pt-16">
                <a  className="font-agentOrange" href="https://foodie.sourashreeart.com/">FOODIE</a>
            </li>

            <li className='list-none mx-16 text-[80px]'>
                <a href="" className='font-agentOrange'>Movies GPT</a>
            </li>
        </div>
    );
};

export default Projects;