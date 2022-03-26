let express = require('express')
let app = express()
let puerto = 3000
let path = require('path')

app.use(express.static('public'))

app.get('/', function (req,res){
res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get('/register', (req, res) => {
res.sendFile(path.join(__dirname + '/views/register.html'));
});

app.get('/login', (req, res) => {
res.sendFile(path.join(__dirname + '/views/login.html'));
});

app.listen(puerto, () => console.log(`Servido levantado en el puerto ${puerto} https://localhost&{puerto}`))



