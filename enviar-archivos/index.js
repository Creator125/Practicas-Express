const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/static/contact.html")
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/static/about.html")
});

/*
app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/static/style.css")
});
*/

app.use(express.static("public"))

app.listen(4100, () =>{
    console.log("Servidor corriendo en el puerto ", 4100)
});