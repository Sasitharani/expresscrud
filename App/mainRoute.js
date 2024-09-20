let express=require("express");
const { homeRoute } = require("./routes/website/HomepageRoute");

let mainRoute=express.Router();
mainRoute.use("/website/home",homeRoute)

module.exports={mainRoute}