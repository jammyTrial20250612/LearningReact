import { useState } from "react";
const Counter = () => {
    const [value, setValue]=useState(0);
    const CounterAction = () =>{
        setValue(value+1);
    }

    return (
        <>
        <div>
            <h3 className="bg-green-300">Counter</h3>
        </div>
        <div>
            <p className="p-64 bg-green-200">
                Counter
                <div>
                    <p className="text-xl">{value}</p>
                    <button onClick={CounterAction}>count</button>
                </div>
            </p>
        </div>
        </>
    )
}

export default Counter;