import express from "express"
import database from "./config/database.js";
import {configDotenv} from "dotenv";
import routes from "./routes/routes.js";
configDotenv();

var app = express();
const connection = database().then((res) => {
    app.listen(process.env.PORT, function () {
        console.log('Example app listening on port 3000!');
    });
}).catch(err => {
    console.log(err);
});
app.get('/', function (req, res) {
    res.send('Welcome to the Ecommerce World');
});

app.use('/products', routes)



/*
* create a route to get all products
* create a route to get product based on specific category
* create a route to delete a product (admin specific)
* create a route to update or add a product (admin specific)
* */