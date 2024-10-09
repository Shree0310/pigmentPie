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
                <h1 className=" "></h1>
                <div className="flex justify-center pt-36 pr-32">
                    <img
                    src={MoviesGPT1}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-28' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>

                <div className="flex justify-center pt-36 pr-32">
                    <img
                    src={MoviesGPT3}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-28' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>

                <div className="flex justify-center pt-28 pr-32">
                    <img
                    src={MoviesGPT4}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-28' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>

                <div className="flex justify-center pt-28 pr-32">
                    <img
                    src={MoviesGPT5}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-20' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>         
            </div>
        </div>
    )
}

export default MoviesGPT;