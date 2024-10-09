import MoviesGPT1 from './../Assets/images/MoviesGPT1.png';
import MoviesGPT4 from './../Assets/images/MoviesGPT4.png';
import MoviesGPT3 from './../Assets/images/MoviesGPT3.png';
import MoviesGPT5 from './../Assets/images/MoviesGPT5.png';
import { useEffect, useState } from "react";


const MoviesGPT = ()=>{

    const [move, setMove] = useState(false);

        //Trigger the animation when the component mounts (page loads)
        useEffect(()=>{
            setMove(true);
        },[]);


    return (
        <div>
            <div>
                <div className="flex justify-center pt-36">   
                    <div className="inline-block pl-24">    
                        <h1 className="text-3xl font-semibold">
                            MOVIESGPT: A Netflix Clone with GPT integration.
                        </h1>
                        <p className="pt-2 sub-text">ReactJS, Tailwind CSS, GPT integration</p>  
                    </div>           
                </div>
                <div className="flex justify-center pt-16 pr-32">
                    <img
                    src={MoviesGPT1}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-28' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>
                
                <div className="flex justify-center pt-16 pl-24">   
                    <div className="inline-block w-[768px] h-[180px] py-8 rounded-2xl border border-spacing-1 border-gray-300 px-12">
                        <h1 className="text-2xl sub-text font-semibold py-1">About this project</h1>
                        <p className="text-lg">A Netflix clone with GPT-3 integration. Integrated AI for an enhanced user experience.
                        </p>
                    </div>
                </div> 

                <div className="flex justify-center pt-16 pr-32">
                    <img
                    src={MoviesGPT3}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-28' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>

                <div className="flex justify-center pt-16 pr-32">
                    <img
                    src={MoviesGPT4}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-28' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>
        
            </div>
        </div>
    )
}

export default MoviesGPT;