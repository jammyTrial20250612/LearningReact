import { useState, createContext } from "react";

// UseContextCounter用Context

type UseContextCounterType = {
    UseContextCounterTimes: number;
    setUseContextCounterTimes: (UseContextCounterTimes: number) => void;
}
export const UseContextCounterContext = createContext<UseContextCounterType>({
    UseContextCounterTimes: 0,
    setUseContextCounterTimes: (UseContextCounterTimes:number) => {}
})

export const UseContextCounterProvider: React.FC<{children: React.ReactNode }> = ({ children }) => {
    const [useContextCounterTimes, setUseContextCounterTimes]=useState<number>(0)
    const setUseContextCounterTimesFunc=(useContextCounterTimes:number)=>{
        setUseContextCounterTimes(useContextCounterTimes);
    }
    return (
        <UseContextCounterContext.Provider value={{UseContextCounterTimes:useContextCounterTimes,setUseContextCounterTimes:setUseContextCounterTimesFunc}}>
            {children}
        </UseContextCounterContext.Provider>
    )
}

//RenderingContextCounter用Context

type RenderingContextType = {
    RenderingTimes: number;
    setRenderingTimes: (RenderingTimes: number) => void;
}
export const RenderingContext = createContext<RenderingContextType>({
        RenderingTimes: 0,
        setRenderingTimes: (RenderingTimes: number)=>{}
    });

export const RenderingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [RenderingTimes, setRenderingTimes] = useState<number>(0)
    const setRenderingTimesFunc = (RenderingTimes: number) => {
        setRenderingTimes(RenderingTimes);
    }
        return (
            <RenderingContext.Provider value={{ RenderingTimes: RenderingTimes, setRenderingTimes: setRenderingTimesFunc }}>
                {children}
            </RenderingContext.Provider>
        )
    }
