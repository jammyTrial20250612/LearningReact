import { useEffect,useContext } from "react"
// import { RenderingContext } from "../context";
import { UseContextCounterContext, RenderingContext } from "../context";

export const UseContextCounter:React.FC = ()=>{
    const UseContextCounter = useContext(UseContextCounterContext);
    const Counter =()=> {
        UseContextCounter.setUseContextCounterTimes(UseContextCounter.UseContextCounterTimes+1)
        console.log("UseContextCounter",UseContextCounter.UseContextCounterTimes)
    }

    const RenderingCounterParent = useContext(RenderingContext)
    useEffect(()=>{
        RenderingCounterParent.setRenderingTimes(RenderingCounterParent.RenderingTimes+1)
    },[])

    // const RenderingCounter = useContext(RenderingContext);
    // const Counter =()=> RenderingCounter.setRenderingTimes(RenderingCounter.RenderingTimes+1);
    return (
        <>
            <div>
                <h3 className="bg-purple-300">useContextCounter</h3>
            </div>
            <div>
                <p className="p-64 bg-purple-200">
                    Counter
                    <div>
                        {/* <p className="text-xl">{RenderingCounter.RenderingTimes}</p> */}
                        <p className="text-xl">{UseContextCounter.UseContextCounterTimes}</p>
                        <button onClick={Counter}>Count</button>
                    </div>
                </p>
            </div>
        </>
    )
}