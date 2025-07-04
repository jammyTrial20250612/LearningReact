import { useState } from "react";
type JSONdata = {
    material:string
}

const Filtering:React.FC = () => {
    const [value, setValue]=useState("");

    const JSONdata:JSONdata[]=[{
       material : "apple"
    },
    {
       material: "carrot"
    },
    {
       material: "onion"
    },
    {
       material : "beef"
    },
    {
       material : "pork"
    }];

    const handleChange = (event)=>{
        setValue(event.target.value);
    }

    const JSONfiltered = JSONdata.filter((output)=>{return(output.material.includes(value))});

    return (
        <>
            <div>
                <h3 className="bg-sky-300">Filtering</h3>
            </div>
            <div className="bg-red-300 p-4">
                <input
                type="text"
                value={value}
                onChange={handleChange}
                className="bg-white"
                placeholder="search word,please"></input>
            </div>
            <div className="bg-gray-200">
                <p>list</p>
                {JSONdata.map((data)=>(<span>{data.material},</span>))}
            </div>
            <div className="bg-gray-500 text-white">
                <p>filtered</p>
                {
                    JSONfiltered.map((output)=>(<p>{output.material}</p>))
                }
            </div>
        </>
    )
}

export default Filtering;