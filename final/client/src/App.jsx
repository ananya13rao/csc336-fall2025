
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import AddTask from './List.jsx'
import tasksData from "./tasksData.json"
import './App.css' // change to customize
import ModalAdd from './Micromodal.jsx'
const API_URL = "http://localhost:3000/api/items"; 

// have each task become its own card
// based on the type of card have the avatar of the card change 
// separate section for completed tasks and pending tasks 
// 
import TasksPage from './TasksPage.jsx'


import { useState, useEffect } from 'react'; 
import { Routes, Route, Link} from 'react-router-dom'


function App() {
  const [tasks, setTasks] = useState([]) // = useState({something: 0});

  useEffect(() => {
    window.MicroModal.init()
  }, []);

  useEffect(() => { async function fetchTasks() {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("tasks not loading");
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("can't get tasks", err);
    }
  }

  fetchTasks();
}, []);
  





  return(
    <div className='app'>
      <h1>Student Planner</h1>
      <nav className='nav'>
        <Link to = '/'>Home</Link>
        <Link to = '/tasks'>All Tasks</Link>
        <Link to = '/add'>Add a Task</Link>
      </nav>

      <main className='app-main'>
        <Routes>
          <Route path="/" element={<Home tasks  = {tasks}/>} />
          <Route path="/tasks" element={<TasksPage tasks={tasks} setTasks={setTasks}/> } />
          <Route path="/add" element={<AddTask setTasks={setTasks} />} />
      
        </Routes>
      </main>
      <ModalAdd />
      <Footer/>

    </div >

  );

}


export default App
