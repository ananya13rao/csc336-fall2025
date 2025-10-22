async function getWorld() {
let response = await fetch("/world");
let world = await response.json(); 
document.querySelector("body").innerHTML = `<h1>${world.regions[0].name}</h1>`

}