import { useState } from "react";

function App() {
  
  const [task, setTask] = useState(""); 

  const [todos, setTodos] = useState([ // list stored in State
    {
      task: "Do homework", 
      complete: false,
      id: 1
    }, 
    {
      task: "Clean room", 
      complete: true,
      id: 2
    },
    {
      task: "Make dinner",
      complete: true,
      id: 3
    }
  ]); 

  function addTodo() {
    let newTodo = {
      task: task,
      complete: false,
      id: Date.now()
    }

    setTodos([...todos, newTodo]); 
    setTask("");
  }

  return (
    <div> {/*ui*/}

      <input 
        type = "text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {}
        {}
        {}
        {}
        {}
        {todos.map((todo) => (
        <TodoItem todo={todo} key = {todo.id}/>
        ))}

      </ul>

    </div>
  )

}
export default App;