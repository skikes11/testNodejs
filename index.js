const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const user = require("./routes/user");

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));
app.use("/v1/UserAll", user); 

 
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});