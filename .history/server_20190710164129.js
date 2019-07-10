var express = require("express");
var path = require("path");
var ejs = require("ejs");
import {renderToString,renderToStaticMarkup} from "react-dom/server";
import A from "./page/a";

// import A from "./component/a";

var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
    // res.render("index",{
    //     name:"陈泽",
    //     sex:"男"
    // })
    var __html = renderToStaticMarkup(A);
    console.log(__html);
    res.send(__html)
});

app.use(express.static(path.join(__dirname,'dist')));

app.listen("9999",function(){
    console.log("run at 9999")
});



// var express = require("express");
// var ejs = require("ejs");
// import React from "react";
// import {renderToString,renderToStaticMarkup} from "react-dom/server";

// import App from "./component/App";
// console.log(renderToString);

// var app = express();

// app.set("view engine","ejs");

// app.get("/user",function(req,res){
//     var html = renderToString(<App/>)
//     res.render("index",{
//         __html:html
//     })
// });

// app.get("/app",function(req,res){
//     var html = renderToString(<App/>)
//     res.send(html);
// });

// app.listen("8888",()=>{
//     console.log("run at:8888")
// });