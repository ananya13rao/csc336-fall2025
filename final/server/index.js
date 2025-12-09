

import express from "express"; 
import cors from "cors";  
import fs from "fs"; 
console.log("🤩 loaded")
const app = express(); 
const PORT = process.env.PORT || 3000;




app.use(express.static("./public")); 
app.use(express.json()); 
app.use(cors()); 




const DATA_FILE = "data.json"; 


app.get("/api/items", async (req, res) => {
  const dataString = await fs.readFileSync(DATA_FILE, "utf-8"); 
  const tasks = JSON.parse(dataString); 

  res.json(tasks);


}); 


app.post("/api/items", async (req, res) => {
  console.log("🔵 POST /api/items hit");   

  const incomingTask = req.body; 

  if (!incomingTask.name || !incomingTask.type || !incomingTask.dueDate) {
    return res.status(400).json({ error: "missing fields" }); 

  }

  const fileData = await fs.readFileSync(DATA_FILE, "utf-8");
  const tasks = JSON.parse(fileData);


  if (tasks.some(t => t.name === incomingTask.name && t.dueDate === incomingTask.dueDate)) {
    return res.status(400).json({ error: "Task already exists" });

  }

  const newTask = {
    ...incomingTask,
    id: Date.now()
  }; 

  tasks.push(newTask); 

  await fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2)); 

  res.status(201).json(newTask); 

}); 


app.delete("/api/items/:id", async (req, res) => {
  const id = Number(req.params.id); 

  const dataString = await fs.readFileSync(DATA_FILE, "utf-8");
  let tasks = JSON.parse(dataString);

  tasks = tasks.filter(t => t.id !== id);


  await fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));


  res.json({ message: "this task has been deleted", id });

});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));