
async function loadWorld() {
    const res = await fetch("/world");
    const data = await res.json();

    document.getElementById("worldDiv").innerHTML =
        `<ul><li>${data.regions[0].towns[0].notable_people[0].name}</li></ul>`;
}

loadWorld();



// When the user clicks the button, this event listener will read the text in the
// form, construct an object and send it over to the server's 'excite' route using
// a post http request. On the server side, it loops through the world data, and
// if it finds someone with the name that it was given, it adds "!!!" to the data,
// writes it to a file, and then returns the data to the client (here). At this point,
// we can call loadWorld() again to refresh the data diplayed on the front end.
const nameForm = document.querySelector("#nameForm");
nameForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fd = new FormData(nameForm);
    const townName = fd.get("townName");
    const mobName = fd.get("mobName");

    const body = {
      townName,
      name: mobName,
      role: "Mob"
    };

    const res = await fetch("/add-mob", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    });


    await res.json();
     loadWorld();




  });