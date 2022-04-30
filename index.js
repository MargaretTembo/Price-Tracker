const express =require( 'express');
const bodyParser = require('body-parser');
//import usersRoutes from './routes/user.js'
const dotenv = require('dotenv');
const mysql = require('mysql');
const path = require('path');

dotenv.config({
    path:'./.env'
})
const app = express();
const PORT = 5000;

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD ,
    database: process.env.DATABASE

})
const publicDirectory = path.join(__dirname,'./statics');
console.log(__dirname)
app.use(express.static(publicDirectory))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'hbs');

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("connected");
    }
})


app.use(bodyParser.json());

app.use('/', require('./routes/pages'))
app.use('/auth', require('./routes/auth'));



app.listen(PORT, () => {console.log(`server running on port: http//:localhost:${PORT}`)})