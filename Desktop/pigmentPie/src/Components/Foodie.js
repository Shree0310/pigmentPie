import { useEffect, useState } from "react";
import FoodieImage2 from "./../Assets/images/FoodieImage2.png";
import FoodieImage3 from "./../Assets/images/FoodieImage3.png"
import FoodieImage1 from "./../Assets/images/FoodieImage1.png"

const Foodie = ()=>{

    const [move, setMove] = useState(false);

    //Trigger the animation when the component mounts (page loads)
    useEffect(()=>{
        setMove(true);
    },[]);

    return (
        <div>
            <h1 className=" "></h1>
            <div className="flex justify-center pt-36 pr-32">
                <img
                src={FoodieImage1}
                className={`transition-transform duration-1000 transform ${
                    move ? 'translate-x-20' : 'translate-x-0' 
                }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
            </div>

            <div className="flex justify-center pt-36 pr-32">
                <img
                src={FoodieImage2}
                className={`transition-transform duration-1000 transform ${
                    move ? 'translate-x-20' : 'translate-x-0' 
                }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
            </div>

            <div className="flex justify-center pt-28 pr-32">
                <img
                src={FoodieImage3}
                className={`transition-transform duration-1000 transform ${
                    move ? 'translate-x-20' : 'translate-x-0' 
                }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
            </div>
            
        </div>
    )
}

export default Foodie;