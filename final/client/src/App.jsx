
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import AddTask from './List.jsx'
import tasksData from "./tasksData.json"
import './App.css' // change to customize
import ModalAdd from './Micromodal.jsx'

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

  useEffect(() => {
    if (localStorage.getItem("exampleTasks")) {
      setTasks(JSON.parse(localStorage.getItem("exampleTasks")))
    } else { 
      setTasks(tasksData);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem("exampleTasks", JSON.stringify(tasks))
  }, [tasks]);


   //useEffect(()=> {
  //   fetch("https://localhost:3000/api/data")
//        .then(result=>result.json())
//        .then(data=>setFromServer(data)); 
//  }, []);

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
