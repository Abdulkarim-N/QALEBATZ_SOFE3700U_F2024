const express = require('express');
const cors = require('cors')
const mysql = require('mysql2')
const app = express();

app.use(cors());
app.use(express.json()); // For parsing JSON request bodies
app.options('/', cors()); // Allow preflight requests

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'affan2003',
    database: 'qalbeatz',
})
db.connect((err) => {
    if (err) throw err;
    console.log('connected to sql server');
})
app.post('/signup', (req, res) => { //POST operations
    const { username, password } = req.body.userinfo;
    let num = Math.floor(Math.random() * 1000);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    let ttag = 't_license_' + num;
    let stag = 'sub' + num;
    const sql = `INSERT INTO subscription (sub_id, sub_type, price, duration) VALUES ('${stag}', 'free', 0.00, '${year}-${month}-${day} ${hours}:${minutes}:${seconds}')`;
    const sql2 = `INSERT INTO therapist (license_no, username, therapist_password, availability) VALUES ('${ttag}', 'dr_jackson', 'securepass1', '{"monday": "9am-5pm", "wednesday": "10am-6pm"}')`;
    const sql3 = `INSERT INTO User (user_id, sub_type, username, email, sub_id, user_password, t_license_no) VALUES (${num}, 'free', '${username}', 'NULL', '${stag}', '${password}', '${ttag}')`;
    db.query(sql, function (err, result) {
        if (err) {
            console.error("Error inserting into MySQL:", err); // Send error response and STOP further execution
            return res.status(500).send({ message: 'Database insertion failed' });
        }
        console.log("Values inserted:", result); // Send success response
    });
    db.query(sql2, function (err, result) {
        if (err) {
            console.error("Error inserting into MySQL:", err);
            return res.status(500).send({ message: 'Database insertion failed' });
        }
        console.log("Values inserted:", result);
    });
    db.query(sql3, function (err, result) {
        if (err) {
            console.error("Error inserting into MySQL:", err);
            return res.status(500).send({ message: 'Database insertion failed' });
        }
        console.log("Values inserted:", result);
        res.status(200).send({ message: 'Signup successful!' });
    });
});
app.post('/login', (req, res) => { //GET OPERATIONS
    const { username, password } = req.body.userinfo;
        db.query(`SELECT user_password FROM user WHERE username = '${username}'`, function (err, result, fields) {
            if (err){ 
                console.log("error retrieving data");
                return res.status(500).send({message: "retrieval failed"})
            }
            console.log(result);
            const dbPassword = result[0].user_password;
            if (dbPassword == password) {
                res.status(200).send({message: "Login successful!"});
            } 
            else if(dbPassword != password){
                return res.status(201).send({message: "retrieval failed"})
            }
        });     
    });

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});