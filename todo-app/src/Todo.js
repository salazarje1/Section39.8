import React from "react"; 


const Todo = ({ id, task, removeTask }) => {
    return (
        <div>
            <p>{task}</p>
            <button onClick={() => removeTask(id)}>Delete</button>
        </div>
    )
}


export default Todo;