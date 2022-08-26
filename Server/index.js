const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'D@ntheman444',
    database: 'online_shop',
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/insert', (req, res) => {
    const username = req.body.username;
    const total = req.body.total;
    const sqlInsert = "INSERT INTO session (username, total) VALUES (?,?)";
    db.query(sqlInsert, [username, total], (err, result)=>{
    console.log(result);
    });   
});

app.listen(3001, () => {
    console.log("running on port 3001");
})