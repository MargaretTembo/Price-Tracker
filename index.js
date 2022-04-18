//require all of the packages i am going to be using

const port = 8000;
const http = require('http');
//const url = require('url');
const fs = require('fs');
const axios = require('axios');
const cheerio= require('cheerio');
const express = require('express');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
const path = require('path');
const cors = require('cors')

const  mysql = require('mysql');
const pool = mysql.createConnection({
    host: "localhost:3306",
    user: "root",
    password: "Marg@r5t",
    connectionLimit:10
}
)

pool.query('select * from PeeP.user_table', (err, res) => {

    return console.log(res);
})





const app = express();
app.use(cors());
const url = 'https://www.amazon.com/Sceptre-E248W-19203R-Monitor-Speakers-Metallic/dp/B0773ZY26F/ref=lp_16225007011_1_2?th=1'

app.get('/results', (req, res) => {

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

    
})



app.listen(port, () => {
    console.log("running on port 8000")
});
















/*
const server = http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url, true);

    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
    if (path == "") {
        path = "index.html";
    }

    let file = __dirname + "/Statics" + path;

    fs.readFile(file, function (err, content) {

    })
})


*/




/*
function onRequest(request, response) {
    response.writeHead(200, { 'content-Type': 'text/html' })
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('file not found');
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(port);

*/

/*

const fetchPrice = async (url, targetPrice) => {
    const response = await axios.get(url);
    const html = response.data
    const $ = cheerio.load(html);
    const priceText = $('span.a-offscreen').text();
    console.log(priceText);
    const price = parseFloat(priceText.replace('$', ''));
    if (targetPrice >= price) {
       sendEmail(url, price)
    } else {
        console.log('Expensive:'+ price)
    }
}

const sendEmail = async(url, price) => {
    const testAccount = await nodemailer.createTestAccount();
    const transport = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, 
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        }
    });

    const info = await transport.sendMail({
        from: '"UI infinity" <test@test.com>',
        to: 'Teat@test.com',
        subject: 'Amazom watcher',
        text: `${price} - ${url}`,
        html:`<p>${price}</><p>{url}</p>`,

    });
    console.log(nodemailer.getTestMessageUrl(info))
}
*/
//const watchPrice = (priceTarget, url, schedule = '*/20 * * * * *') => {
  //  cron.schedule(schedule, () => fetchPrice(url, priceTarget));
//watchPrice(
  //  70.98,
    'https://www.amazon.com/Crest-Professional-Whitestrips-Whitening-Treatments/dp/B00AHAWWO0/ref=sr_1_18?pd_rd_r=30820569-b9bb-461f-83f2-81666da78b73&pd_rd_w=dyjAG&pd_rd_wg=Hy3vb&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=R6RDGYFD49PDBWVWKS6M&qid=1649149338&s=beauty-intl-ship&sr=1-18&th=1'
//)


//for tomorrow work on schedualing the 
















































//intialising express
/*const app = express();*/

// Scrapping


//Chainning
    /*
.then(response => {
    const html = response.data
    const $ = cheerio.load(html)

    
    $('#dp', html).each(function () {
        const price = $(this).find('span.a-span12').text('')
        const title = $(this).find('span#productTitle').text('')
        
    })
    console.log(product_info)

}) .catch( err => console.log(err))


// server should run on port 8000

//getting the page
async function getHtml(url) {
    const { data: html } = await axios.get(url)
        .catch(() => {
            consile.log("Couldn't get the page")
        })
    return html
}

//selecting the data 

function ScrapData(html) {
    const $ = cheerio.load(html);
    const price = $(selector).text().trim();
    return price;
}
*/


/*app.listen(port, ()=> console.log(`server is running on port ${port}`))*/