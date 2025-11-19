import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"; 

import Home from "./pages/Home.jsx"; 
import About from "./pages/About.jsx";
import RandomDog from "./pages/RandomDog.jsx"; 

function App() {
  return (
    <>
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
   
      <nav>
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "/about">About</NavLink>
        <NavLink to = "/dog">Random Dog</NavLink>
      </nav>

      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dog" element={<RandomDog />}  />
      </Routes>

    
    </BrowserRouter>
    
    
    
    
    
    </>
  );
  }

export default App; 