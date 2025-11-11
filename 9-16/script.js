let person = { // made an object
name: 'Mike',
favoritePetIsCat: true,
hello: function(n) {
    for (let i = 0; i < n; i++) {
        console.log('hello')

    }
},

favoritePet: {
    name: 'buddy',
    species: 'cat',
}

}

person.hello(100)
console.log(person.favoritePet.name);

console.log(document); 

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1; // floor rounds down
    let diceRollDiv = document.querySelector('#dice-roll')
    diceRollDiv.innerHTML = "<div class='dice-roll'>" + randomNumber + '</div'; // string concatenation

    let newRollDiv = document.createElement('div'); 
    newRollDiv.textContent = randomNumber; 
    newRollDiv.className = ['dice-roll']
    diceRollDiv.append(newRollDiv); 
}





