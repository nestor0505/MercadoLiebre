const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'))
app.listen(3030, () => console.log('servidor corriendo en http://localhost:3030'))

app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.get("/register", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.post('/login',(req,res) => {
    //manejo de informacion de formularios
    res.sendFile(path.join(__dirname,'./views/home.html'))
}) 
app.post('/register',(req,res) => {
    //manejo de informacion de formularios
    res.sendFile(path.join(__dirname,'./views/home.html'))
}) 