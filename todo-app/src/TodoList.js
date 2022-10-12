import React, { useState } from 'react'; 
import { v4 as uuid } from "uuid";

import Todo from './Todo';
import NewTodoForm from "./NewTodoForm"; 


const TodoList = () => {
    const INITIALSTATE = [
        {id: uuid(), task: "Walk Dog"},
        {id: uuid(), task: "Make Dinner"}
    ]

    const [tasks, setTasks] = useState(INITIALSTATE); 

    const addTask = (newTask) => {
        console.log(newTask);
        setTasks(tasks => [...tasks, {task: newTask, id: uuid() }]); 
    }

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id)); 
    }

    return (
        <div>
            <h2>Todo List</h2>
            <NewTodoForm addTask={addTask} />
            <div>
                {tasks.map(({ id, task }) => {
                    return <Todo id={id} key={id} task={task} removeTask={removeTask} />
                })}
            </div>
        </div>
    )
}


export default TodoList; 