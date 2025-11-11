import { useState } from "react";
import InventoryItem from "./components/InventoryItem.jsx";
import MobItem from "./components/MobItem.jsx"; 

function App() {
  

  // inventory component
  const [itemText, setItemText] = useState(""); 
  const [inventory, setInventory] = useState([
    { name: "Diamond",
      amount: 64,
      id: 1
    }, 
    { name: "Spruce Wood", 
      amount: 32,
      id: 2
    }, 
    {
      name: "Cooked Porkchop",
      amount: 16,
      id: 3
    }
  ])

  function addItem() {
    const newItem = {
      name: i,
      amount: 1,
      id: Date.now()
    }; 
    

    setInventory([...inventory, newItem]); 
    setItemText(""); 
  }

  // nearby mobs
  const [mobText, setMobText] = useState("");
  const [mobs, setMobs] = useState([
    { name: "Cow",
      hostile: false,
      id: 1
    }, 
    { name: "Skeleton", 
      hostile: true,
      id: 2
    }, 
    {
      name: "Pig",
      hostile: false,
      id: 3
    }

  ]);

  function addMob() {
    const newMob = {
      name: navigator,
      hostile: false,
      id: Date.now()
    };

    setMobs([...mobs, newMob]);
    setMobText(""); 

  }
  

  







  return (
    <div> {/*ui*/}
    <h2>Inventory</h2>
      <input 
        type = "text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
      />
      <button onClick={addItem}>Add Item to Inventory</button>

      <ul>
      
        {inventory.map((it) => (
        <InventoryItem item={itm} key = {itm.id}/>
        ))}
      </ul>

      <h2>Nearby Mobs!</h2>
      <input 
        type="text"
        value={mobText}
        onChange={(e) => setMobText(e.target.value)}
      />

      <button onClick={addMob}>Add Mob</button>

      <ul>
        {mobs.map((mob) => (
          <MobItem mob={mob} key={mob.id} />
        )
        
        )}
      </ul>
    </div>
  )

}
export default App;