
const button = document.getElementById("moodButton");
const message = document.getElementById("message");
const title = document.querySelector("#title");


const moods = [
  { bg: "#ffe4e1", text: "Mood: Calm" },
  { bg: "#e0ffe1", text: "Mood: Energetic" },
  { bg: "#e1f0ff", text: "Mood: Relaxed" },
  { bg: "#fff6e1", text: "Mood: Cheerful" }
];


button.addEventListener("click", changeMood);

function changeMood() {
  //  random mood
  const mood = moods[Math.floor(Math.random() * moods.length)];


  document.body.style.backgroundColor = mood.bg;
  message.textContent = mood.text;





  
  const newNote = document.createElement("p");
  newNote.textContent = "You just switched moods!";
  newNote.style.fontStyle = "italic"; 
  document.body.appendChild(newNote);
}
