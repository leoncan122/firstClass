const express = require('express');
const users = require('./db.json')

const app = express();

//creando el endpoint
app.get('/users', function (req, res) {
    res.send(users)
})
//endpoint con entrada de id, name , etc
app.get('/users/:id', function (req, res) {
    let userId = req.params.id
    let user = users.find(user => user.id == userId)
    res.send(user)
})
//Post
app.use(express.json());
app.use(express.urlencoded({ extended: true }));//codificar body en un URL

app.post('users/', function (req, res) {
    let body = req.body
    console.log(body)

})
app.listen(3000, () => console.log('Server is up and running'))