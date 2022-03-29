//require all of the packages i am going to be using
const port = 8000;
const axios = require('axios');
const cheerio= require('cheerio');
const express = require('express');

//intialising express
const app = express();

// Scrapping
const url = 'https://www.amazon.com/Seagate-Portable-External-Hard-Drive/dp/B07CRG94G3/ref=lp_16225009011_1_7'
axios.get(url)

//Chainning
.then(response => {
    const html = response.data
    const $ = cheerio.load(html)

    const titles = []
    $('.a-offscreen', html).each(function () {
       const title = $(this).text()
       // const url = $(this).find('a').attr('href')
        titles.push({
            title
            //url
        })
    })
    console.log(titles)

}) .catch( err => console.log(err))


// server should run on port 8000
app.listen(port, ()=> console.log(`server is running on port ${port}`))