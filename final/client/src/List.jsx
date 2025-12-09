import React, { useState} from 'react';


function AddTask(props) {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [dueDate, setDueDate] = useState("")
    
    function handleSubmit(x) {
        x.preventDefault()
        props.setTasks(prev => prev.concat({name, type, dueDate, id: Date.now()}))
        setName("")
        setType("")
        setDueDate("")
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