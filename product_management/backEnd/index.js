const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser');

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

//router
const routerInfo = require("./apis");
app.use("/info/",routerInfo);

app.listen(5000, () => {
    console.log("Server started on 5000");
})

//database
mongoose.connect("mongodb://localhost/onlineShopDemo" , (err) => {
    if(!err){
        console.log("DB connected successfully!");
    }
})