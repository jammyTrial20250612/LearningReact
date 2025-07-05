import { useContext, useEffect } from "react";
import { RenderingContext } from "../context";

const RenderingCounter = () => {
    const RenderingCounter = useContext(RenderingContext)

    useEffect(()=>{
        RenderingCounter.setRenderingTimes(RenderingCounter.RenderingTimes+1)
    },[])

    return (
        <>
        <div className="bg-pink-300">
            <h3>RenderingCounter</h3>
        </div>
        <div>
            <p className="p-64 bg-pink-200">
                <div>
                    <p className="text-xl">App.tsx +1</p>
                    <p className="text-xl">UseContextCounter.tsx +1</p>
                    <p className="text-xl">RenderingCounter +1</p>
                    <p className="text-xl">{RenderingCounter.RenderingTimes}</p>
                </div>
            </p>
        </div>
        </>
    );
} 

export default RenderingCounter