let express=require("express");
const { studentInsert, studentView, studentDelete } = require("../../controller/website/HomeController");

let homeRoute=express.Router();

homeRoute.post("/insert",studentInsert)
homeRoute.get("/view",studentView)
homeRoute.delete("/delete/:id",studentDelete)

//http://localhost:8000/website/home/view
module.exports={homeRoute}