
const app = require("express").Router();

app.get("/",(req,res)=> {
    res.status(200).json("Get all user");
});

module.exports = app;