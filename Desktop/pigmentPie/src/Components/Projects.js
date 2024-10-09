import { Link, Outlet } from 'react-router-dom';
import FoodieImage1 from './../Assets/images/FoodieImage1.png'
import MoviesGPT1 from './../Assets/images/MoviesGPT1.png';
import Streamify1 from './../Assets/images/Streamify1.png';

const Projects = () =>{
    return (
        <div>
            <h1 className="font-caskadia italic text-[clamp(2rem,4vw,4rem)] tracking-tight mx-10 pt-32 pb-8">
            <span className="sub-text">/</span>selected-works
            </h1>
            <h4 className="font-satoshi mx-16 text-[24px]">A non-chronological list of select projects covering front-end development works.</h4>
                <div className='flex mx-20'>
                    <div className='flex h-[470px] m-6 p-4 w-[400px]'>
                        <div className='container'>
                            <Link to="/foodie">
                                <img
                                src={FoodieImage1}         
                                className='flex justify-center w-[400px] h-60 rounded-2xl shadow-xl cursor-pointer transition-transform hover:rotate-2 ease-in-out hover:scale-105'/>
                                <p  className="font-agentOrange text-[30px] py-4 font-semibold" >FOODIE</p>

                                <p className='font-sans text-lg sub-text pb-2'>An online food delivery website where users can log in, select a restaurant, choose from its menu, add items to a cart, and check out. Built with ReactJS and Tailwind CSS.
                                </p>
                            </Link>
                            <button className='border font-bold text-lg dark:border-gray-400 border-gray-900 text-gray-900 dark:text-gray-200 sub-text rounded-md'>
                                    <a href='https://foodie.sourashreeart.com/'>
                                        Live site
                                    </a>
                                </button>
                        </div>
                        
                    </div>    
                {/* <button className='bg-gray-50 border-black size-[5px]'>Live site</button> */}
                    <div className='flex h-[370px] m-6 p-4 w-[400px] '>
                        <div className='container'>
                        <Link to="/streamify">
                            <img
                            src={Streamify1}
                            className='flex justify-center w-[400px] h-60 rounded-xl shadow-2xl cursor-pointer transition-transform hover:rotate-2 ease-in-out hover:scale-105'/>
                            <p className="font-agentOrange text-[30px] py-4 font-semibold">Streamify</p>
                            <p className='font-sans text-lg sub-text pb-2'>A Dashboard that displays various data, some chart implementations and a table with filtering & sorting. </p> 
                        </Link>
                        <button className='border font-bold text-lg dark:border-gray-400 border-gray-900 text-gray-900 dark:text-gray-200 sub-text rounded-md'>
                            <a href='https://streamify.sourashreeart.com/'>
                                Live site
                            </a>
                        </button>
                        </div>  
                    </div>

                    <div className='flex h-[370px] m-6 p-4 w-[400px] '>
                        <div className='container'>
                            <Link to="/moviesGPT">
                                <img
                                src={MoviesGPT1}
                                className='flex justify-center w-[400px] h-60 rounded-xl shadow-2xl cursor-pointer transition-transform hover:rotate-2 ease-in-out hover:scale-105'/>
                                <p className="font-agentOrange text-[30px] py-4 font-semibold">Movies GPT</p>
                                <p className='font-sans text-lg sub-text pb-2'>A Netflix clone with GPT-3 integration. Integrated AI for an enhanced user experience.
                                </p> 
                            </Link>
                            <button className='border font-bold text-lg dark:border-gray-400 border-gray-900 text-gray-900 dark:text-gray-200 sub-text rounded-md'>
                            <a href='https://moviesgpt.sourashreeart.com/'>
                                Live site
                            </a>
                        </button>                       
                        </div>  
                    </div>
                </div>
            </div>
    );
};

export default Projects;