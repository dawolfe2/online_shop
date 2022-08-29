const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const e = require('express')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'D@ntheman444',
    database: 'online_shop',
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/add', (req, res) => {
    const id = req.body.id;
    let cost = req.body.cost;
    let total = 0;

    const sqlGetTtoal = "SELECT total FROM session WHERE id = ?";
    db.query(sqlGetTtoal, [id], (err, result)=>{

        total = parseFloat(result[0].total) + parseFloat(cost);

        const sqlUpdate = "UPDATE session SET total = ? WHERE id = ?";
        db.query(sqlUpdate, [total, id], (err, result)=>{
        });   

    }); 
});

app.post('/api/subtract', (req, res) => {
    const id = req.body.id;
    let cost = req.body.cost;
    let total = 0;

    const sqlGetTtoal = "SELECT total FROM session WHERE id = ?";
    db.query(sqlGetTtoal, [id], (err, result)=>{

        total = parseFloat(result[0].total) - parseFloat(cost);

        const sqlUpdate = "UPDATE session SET total = ? WHERE id = ?";
        db.query(sqlUpdate, [total, id], (err, result)=>{
        });   

    }); 
});

app.post('/api/total', (req, res) => {
    const id = req.body.id;
    let total = 0;

    const sqlGetTotal = "SELECT total FROM session WHERE id = ?";
    db.query(sqlGetTotal, [id], (err, result)=>{
        total = parseFloat(result[0].total); 
        res.send({total:total});
    });
});

app.post('/api/checkuser', (req, res) => {
    let id = 1
    const username = req.body.username;
    console.log(username)
    const sqlGetUser = "SELECT id,password FROM session WHERE username = ?";
    db.query(sqlGetUser, [username], (err, result)=>{
        if (result && res.length > 0){
            id = parseInt(result[0].id)
            console.log(id)
            res.send({id:id});
        }
    });
});

app.post('/api/newuser', (req, res) => {
    let id = 1
    const username = req.body.username;
    const password = req.body.passwsord;
    const sqlGetUser = "INSERT INTO session (username, password) VALUES (?, ?)";
    db.query(sqlGetUser, [username, password], (err, result)=>{
            id = parseInt(result[0].id)
            console.log(id)
            res.send({id:id});
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
})