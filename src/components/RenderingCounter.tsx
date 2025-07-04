import { useContext } from "react"
import { RenderingContext } from "../context";

export const RenderingCounter:React.FC = ()=>{
    const RenderingCounter = useContext(RenderingContext);
    const Counter =()=> RenderingCounter.setRenderingTimes(RenderingCounter.RenderingTimes+1);
    return (
        <>
            <div>
                <h3 className="bg-purple-300">RenderingCounter</h3>
            </div>
            <div>
                <p className="p-64 bg-green-200">
                    Counter
                    <div>
                        <p className="text-xl">{RenderingCounter.RenderingTimes}</p>
                        <button onClick={Counter}>Count</button>
                    </div>
                </p>
            </div>
        </>
    )
}