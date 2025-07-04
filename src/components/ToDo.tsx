import { useState,useEffect } from "react";
const ToDo = () => {
    const [value, setValue] = useState("default message");
    const [tasks, setTasks] = useState<string[]>([]);

    const handleChange =(event)=>{
        setValue(event.target.value)
    }

    const plusTaskAction = () => {
        setTasks([...tasks, value]);
        console.log("+");
    }

     const handleDelete = (value:string) => {
        setTasks(tasks.filter((task)=>task !== value))
    }

    useEffect (()=>{
        console.log(tasks,value);
        },[tasks]); 

    return (
        <>
        <div>
            <h3 className="bg-red-300">toDo</h3>
        </div>
        <div>
                <input
                type={value}
                onChange={handleChange}
                className="bg-gray-200 py-4 px-28 w-2/5"
                placeholder="Let's add task.Input your task."
                ></input>
                <p className="bg-red-200" onClick={plusTaskAction}>plus</p>
        </div>
        <div>
            {tasks.map((task,index)=>(<p>{index},{task}</p>))}
        </div>
        <div>
            <button onClick={()=>handleDelete(value)}>delete</button>
        </div>
        </>
    )
}

export default ToDo;