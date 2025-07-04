import { useState } from "react";
const API = () => {
    const [jsonData, setJsonData] = useState(null);
    // const [loading, setLoading] = useState(true);
    const [error,   setError] = useState("");

    const getAPIdata =async()=>{
        try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon-form/132/");

        if (response.ok) {
            const data = await response.json();
            setJsonData(data);
        } else {
            setError("Getting jsonData failed...");
        }
        } catch (error: unknown) {
        setError("Error: " + error);
        }
    };

    return (
        <>
        <div>
            <h3 className="bg-black text-white">API</h3>
        </div>
        <button className="bg-red-200 p-12" onClick={getAPIdata}>get API</button>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" width="200" height="200"></img>
        <div>
            {JSON.stringify(jsonData, null, 2)}
        </div>
        <p>{error}</p>
        </> 
    )
}

export default API;