import React, { useState } from 'react'; 

const NewItemForm = ({ addTask }) => {
    const [task, setTask] = useState(''); 

    const handleChange = (e) => {
        setTask(e.target.value); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task); 
        setTask(''); 
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                New Task
                <input
                    type="text"
                    name="todo"
                    placeholder='todo'
                    value={task}
                    onChange={handleChange}
                />
            </label>
            <button>Add New Task</button>
        </form>
    )
}

export default NewItemForm; 