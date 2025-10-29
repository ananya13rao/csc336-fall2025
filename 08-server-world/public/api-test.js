
// api calls 
async function test() {
    let response = await fetch("https://csc336-fall2025-efwe.onrender.com/");
    let json = await response.json(); 
    console.log(json); 

}

test(); 