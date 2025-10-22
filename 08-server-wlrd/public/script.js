import express from "express" ;
import fs from "fs"; 

const app = express(); 

app.use(express.static("./public")); 
app.use(express.json()); 

app.get("/world", async (req, res) => {
    let world;
    try {
        let fileContents = fs.readFileSync("world.json", "utf-8");
        world = JSON.parse(fileContents) ;
    }   catch (error) {
        console.log("ERROR: fs.readFileSync threw an error. 'world.json' does not exist.")
    }

    console.log(world.regions[0].name);
});

app.listen(3000); 