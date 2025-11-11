let animals = [
    {
        type: 'cat',
        strength: 10,
        charisma: 16
    },
    {
        type: 'dog',
        strength: 14,
        charisma: 9
    },
    {
        type: 'rabbit',
        strength: 7,
        charisma: 12
    },
    {
        type: 'sea horse',
        strength: 2,
        charisma: 20
    },
    {
        type: 'turtle',
        strength: 10,
        charisma: 16
    }
]; 

document.addEventListener("DOMContentLoaded", populateAnimalDiv)

function populateAnimalDiv() {
    let animalDiv = document.querySelector("#all-animal-info");
    // for (let i = 0; i < animals.length; i++) {
    // let animal = animals[i]}
};

function createAnimalDiv(animal) {
    return `
        <div> 
            <h1>${animal.name}</h1>
            <div class = 'stats'>
            <div>strength: ${animal.strength}</div>
            <div>strength: ${animal.charisma}</div>

        </div> 
    `; // back ticks, this is a fancy string that's going to be processed automatically for us in java
    // 
}

let addAnimalForm = document.querySelector('add-animal-form');
addAnimalForm.addEventListener('submit',addNewAnimal);

function addNewAnimal(){
    let typeInput = document.querySelector('#animal-type-field ').value; 
    let strengthInput = document.querySelector('#animal-strength-field ').value; 
    let charismaInput = document.querySelector('#animal-charisma-field ').value; 
    let newAnimal = {
        type: typeInput,
        strength: strengthInput,
        charisma: charismaInput
    }
    animals.push(newAnimal);
}


