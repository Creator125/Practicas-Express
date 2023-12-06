const express =  require("express");
const path = require("path")

const app = express();

app.get("/", (req, res) => {
    //res.send("Hola mundo");
    res.sendFile(path.join(__dirname + "/index.html"))
});

app.listen(4000, () =>{
    console.log("Servidor escuchando en el puerto ", 4000)
});