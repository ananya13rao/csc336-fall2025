import React, { useState} from 'react';


function AddTask(props) {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [dueDate, setDueDate] = useState("")
    
    const API_URL = "https://csc336-fall2025-final1.onrender.com/api/items";

async function handleSubmit(e) {
  e.preventDefault();

  const newTask = { name, type, dueDate };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask)
  });

  const result = await response.json();
  props.setTasks(prev => prev.concat(result));

  setName("");
  setType("");
  setDueDate("");
}

    return (
        <>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add A Task</legend>
                <input value={name} onChange={x=>setName(x.target.value)} placeholder='Task Name'/>
    
                <select value={type} onChange={x=>setType(x.target.value)} name='myDropdown' id='dropdown' >
                    <option value='task'>task type</option>
                    <option value='test'>test</option>
                    <option value='chores'>chores</option>
                    <option value='event'>event</option>
                    <option value='homework'>homework</option>
                </select>

                <input value={dueDate} type="date" onChange={x=>setDueDate(x.target.value)} placeholder = 'Due Date'/>
                <button type='submit'>Add Task</button>
            </fieldset>
        </form>

        

        </>

    )


}

export default AddTask