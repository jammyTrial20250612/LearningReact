import { useState, createContext } from "react";

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
