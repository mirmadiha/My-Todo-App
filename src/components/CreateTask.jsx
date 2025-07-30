import {useState} from "react";
function CreateTask({onSubmit}){

    const[task,setTask]=useState("");

    const handleChange=(event)=>{
        event.preventDefault();
        setTask(event.target.value);
    }

    const handleSubmit=()=>{
        <TaskList task={task}/>
        onSubmit(task);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={task} onChange={handleChange} placeholder="a new todo"/>
                <button>submit</button>
            </form>
        </div>
    )
}

export default CreateTask;