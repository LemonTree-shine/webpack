var express = require("express");
var ejs = require("ejs");

import A from "./component/a";

var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
    // res.render("index",{
    //     name:"陈泽",
    //     sex:"男"
    // })
})

app.listen("8888");