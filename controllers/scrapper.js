const mysql = require('mysql');
const axios = require('axios');
const cheerio = require('cheerio');

const cors = require('cors');




const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

})

exports.track = (req, res) => {
    //take the entered price from the frontend
    const {
        entered_price
    } = req.body;

    // scrapping data

    axios.get(url)
        .then(response => {
            const html = response.data

            const $ = cheerio.load(html)
            const price = $('span.a-offscreen', html).text()
            const actual_price = price.substring(1, 7)
            res.json(actual_price);

        }).catch(error => {
            console.log("NO data found")
        })


    



   



        db.query('insert into product_table set?', { Entered_price: entered_price, product_name: 'ice-cream' }, (error, results) => {

            if (error) {
                console.log(error)
            }
            else {
                console.log(results)
                return res.render('index')
            }
        })
    }
}