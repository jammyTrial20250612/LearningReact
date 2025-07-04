import { useEffect, useState } from "react";
const Randomize = () => {
    const [CSS, setCSS]=useState("bg-yellow-300");
    const color=["bg-red-200","bg-orange-200","bg-amber-200","bg-yellow-200","bg-lime-200","bg-green-200","bg-emerald-200","bg-teal-200","bg-cyan-200","bg-sky-200","bg-blue-200","bg-indigo-200","bg-violet-200","bg-purple-200","bg-fuchsia-200","bg-pink-200","bg-rose-200","bg-slate-200","bg-gray-200","bg-zinc-200","bg-neutral-200","bg-stone-200"];

    const RandomizeColorAction = () =>{
        console.log("randomize");
        const RandomizeColor = color[Math.floor(Math.random()*color.length)];
        setCSS(RandomizeColor);
    }
    
    useEffect(()=>{
        console.log(CSS);
    },[CSS])

    return (
        <>
        <div>
            <h3 className="bg-yellow-300">Randomize</h3>
        </div>
        <div className={`${CSS} p-64`}>
            <button className="px-12 py-8" onClick={RandomizeColorAction}>Randomize bgColor</button>
            <h2>{CSS}</h2>
        </div>
        </>
    )
}

export default Randomize;