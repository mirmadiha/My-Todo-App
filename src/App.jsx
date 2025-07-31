import {useState} from "react";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
function App(){
    const[tasks,setTasks]=useState([]);

    const handleSubmit=(task)=>{
        const newTasks=[...tasks,task];
        setTasks(newTasks);
    }

    return (
        <div>
            <h1>My Todo List</h1>
            <CreateTask onSubmit={handleSubmit}/>
            <TaskList tasks={tasks}/>
        </div>
    )
}

export default App;