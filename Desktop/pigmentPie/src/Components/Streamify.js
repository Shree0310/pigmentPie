import Streamify1 from './../Assets/images/Streamify1.png';
import Streamify2 from './../Assets/images/Streamify2.png';
import Streamify3 from './../Assets/images/Streamify3.png';
import Streamify4 from './../Assets/images/Streamify4.png';
import { useEffect, useState } from "react";


const Streamify = () =>{
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
                            STREAMIFY: A Dashboard.
                        </h1>
                        <p className="pt-2 sub-text">ReactJS, Tailwind CSS</p>  
                    </div>           
                </div>

                <div className="flex justify-center pt-16 pr-32">
                    <img
                    src={Streamify1}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-28' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>

                <div className="flex justify-center pt-16 pl-24">   
                    <div className="inline-block w-[768px] h-[180px] py-8 rounded-2xl border border-spacing-1 border-gray-300 px-12">
                        <h1 className="text-2xl sub-text font-semibold py-1">About this project</h1>
                        <p className="text-lg">A Dashboard that displays various data, some chart implementations and a table with filtering & sorting.</p>
                    </div>
                </div> 

                <div className="flex justify-center pt-16 pr-32">
                    <img
                    src={Streamify2}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-28' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>

                <div className="flex justify-center pt-16 pr-32">
                    <img
                    src={Streamify3}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-28' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>

                <div className="flex justify-center pt-16 pr-32">
                    <img
                    src={Streamify4}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-28' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>         
            </div>
        </div>
    )
}

export default Streamify;