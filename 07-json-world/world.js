import fs from 'fs';


const jsonText = fs.readFileSync(new URL('./world.json', import.meta.url), 'utf-8');
const world = JSON.parse(jsonText);


console.log('--- region, town, climate ---');
for (const region of world.regions) {
  const townNames = region.towns.map(t => t.name).join(', ');
  console.log(`${region.name} (${region.climate}) → ${townNames}`);


}



console.log('\n--- notable_people ---');
for (const region of world.regions) {
  for (const town of region.towns) {
    for (const person of town.notable_people) {
      console.log(`${person.name} — ${person.role} (${town.name}, ${region.name})`);
    }
  }


}

console.log('\n--- items that are rare ---');
for (const region of world.regions) {
  for (const town of region.towns) {
    for (const person of town.notable_people) {
      for (const item of person.items) {
        if (item && typeof item === 'object' && 'rarity' in item) {
          console.log(
            `${item.name} [${item.rarity}] — owned by ${person.name} (${town.name}, ${region.name})`
          );
        }
      }

      
    }



  }









}
