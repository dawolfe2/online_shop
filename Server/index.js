const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const e = require('express')
const cookieParser = require('cookie-parser')
const session = require("express-session")


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'D@ntheman444',
    database: 'online_shop',
})


app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser())
app.use(session({
    key: "userId",
    secret: "mysecretword",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    },
}))


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

app.get("/api/login", (req, res)=>{
    if (req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }
    else{
        res.send({loggedIn: false})
    }
})

app.post('/api/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const sqlGetUser = "SELECT * FROM session WHERE username = ? AND password = ?";

    db.query(sqlGetUser, [username, password], (err, result)=>{
        if (err) {
            res.send({err:err})
        }
        if (result.length > 0){
            req.session.user = result;
            res.send(result);
        }
        else{
            res.send({ message: "Incorrect username or password!"})
        }
    });
});

app.post('/api/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    total = 0;
    const sqlGetUser = "INSERT INTO session (username, total, password) VALUES (?, ?, ?)";
    db.query(sqlGetUser, [username, total, password], (err, result)=>{
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
})