import express from "express";
import fs from "fs";

const app = express();


app.use(express.static("./public"));
app.use(express.json());


app.get("/world",  (req, res) => {
    // Read in the data, parse it into an object and send it over as json to the client
    const dataString =  fs.readFile("world.json", "utf-8");
    const dataObject = JSON.parse(dataString);
    res.json(dataObject);
});

app.post("/add-mob", async (req,res) => {
  const worldData = fs.readFileSync("/world.json", "utf-8");
  const world = JSON.parse(worldData);

  const body = req.body; 
  const townName = body?.townName; 
  const mobName = body?.name; 
  const role = body?.role || "Mob";

  if (!townName || !mobName) {
    return res.status(400).json({error: "missing town name or name"});

  }

  let townRef = null; 
  for (let region of world.regions) {
    for (let town of region.towns) {
      if (town.name == townName) {
        townRef=town;
        break;
      }
    }
    if (townRef) break; 
  }

  // if the town is exists add this mob
if (townRef) {
  if (!Array.isArray(townRef.notable_people)) townRef.notable_people = [];
  townRef.notable_people.push({name: mobName, role,  items: [] });
}else {
  return res.status(404).json({error: "town ont found"})
  }

fs.writeFileSync("world.json", JSON.stringify(world,null,2));
res.json(world); 

}


);

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => console.log(`Server running on http://localhost:${PORT}`));
