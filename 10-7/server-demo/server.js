import express from "express"; 

const app = express(); 

const PORT = 3000; 

// start the server on a specified "port"
app.listen(PORT, (req, res) => {
    console.log("server started")
});

app.get('/test', (req, res) => {
    console.log('someone made a get request with the "test" endpoint')
});

