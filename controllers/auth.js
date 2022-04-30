
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

})
exports.signUp = (req, res) => {


    const {
        name, email, passwordConfirm, password } = req.body;

    db.query('select user_email from user_table where user_email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error)
        }
        console.log(results)
        if (results != 0) {
            return res.render('signUp', {
                message: 'Email is aready in use'
            })
        } else if (password !== passwordConfirm) {
            return res.render('signUp', {
                message: 'Passwords dont match'
            });
        }

        let hasedPassword = await bcrypt.hash(password, 8);
        console.log(hasedPassword);

        db.query('insert into user_table set ?', { user_name: name, user_email: email, user_password: hasedPassword }, (error, results) => {
            if (error) {
                console.log(error)
            }
            else {
                console.log(results)
                return res.render('signUp', {
                    message: 'user registered'
                });
            }


        });


    })
}





exports.login = (req, res) => {


    const {
        email, password } = req.body;
    console.log(req.body)

    //database connection
    db.query('SELECT * FROM user_table WHERE user_email = ?  ', [email], (err, result) => {
        // user does not exists
        if (err) {
            throw err;
            return res.status(400).send({
                msg: err
            });
        }
        if (!result.length) {
            return res.status(401).send({
                msg: 'Username or password is incorrect!'
            });
        }
        // check password
        bcrypt.compare(
            password,
            result[0]['user_password'],
            (bErr, bResult) => {
                // wrong password
                if (bErr) {
                    throw bErr;
                    return res.status(401).send({
                        msg: 'Username or password is incorrect!'
                    });
                }
                console.log(bResult)
                if (bResult) {
                    res.render('index',
                        console.log('worked')
                    )
                }

            });


    })
}