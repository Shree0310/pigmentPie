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
                <h1 className=" "></h1>
                <div className="flex justify-center pt-36 pr-32">
                    <img
                    src={Streamify1}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-20' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>

                <div className="flex justify-center pt-36 pr-32">
                    <img
                    src={Streamify2}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-20' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>

                <div className="flex justify-center pt-28 pr-32">
                    <img
                    src={Streamify3}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-20' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>

                <div className="flex justify-center pt-28 pr-32">
                    <img
                    src={Streamify4}
                    className={`transition-transform duration-1000 transform ${
                        move ? 'translate-x-20' : 'translate-x-0' 
                    }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
                </div>         
            </div>
        </div>
    )
}

export default Streamify;