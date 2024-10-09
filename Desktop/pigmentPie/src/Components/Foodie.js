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
            <div className="flex justify-center pt-36">   
                <div className="inline-block pl-24">    
                    <h1 className="text-3xl font-semibold">
                        FOODIE: A Swiggy Clone.
                    </h1>
                    <p className="pt-2 sub-text">ReactJS, Tailwind CSS</p>  
                </div>           
            </div>
            <div className="flex justify-center pt-16 pr-32">
                <img
                src={FoodieImage1}
                className={`transition-transform duration-1000 transform ${
                    move ? 'translate-x-28' : 'translate-x-0' 
                }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
            </div>
            <div className="flex justify-center pt-16 pl-24">   
                <div className="inline-block w-[768px] h-[180px] py-8 rounded-2xl border border-spacing-1 border-gray-300 px-12">
                    <h1 className="text-2xl sub-text font-semibold py-1">About this project</h1>
                    <p className="text-lg">An online food delivery website where users can log in, select a restaurant, choose from its menu, add items to a cart, and check out. Built with ReactJS and Tailwind CSS.</p>
                </div>
            </div> 

            <div className="flex justify-center pt-16 pr-32">
                <img
                src={FoodieImage2}
                className={`transition-transform duration-1000 transform ${
                    move ? 'translate-x-28' : 'translate-x-0' 
                }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
            </div>

            <div className="flex justify-center pt-16 pr-32">
                <img
                src={FoodieImage3}
                className={`transition-transform duration-1000 transform ${
                    move ? 'translate-x-28' : 'translate-x-0' 
                }  w-[768px] h-[432px] rounded-2xl border border-spacing-1 border-gray-300`}/>
            </div>
            
        </div>
    )
}

export default Foodie;