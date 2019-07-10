var express = require("express");
var path = require("path");
var ejs = require("ejs");
var fs = require("fs");
import {renderToString,renderToStaticMarkup} from "react-dom/server";
import React,{Component} from "react";
import A from "./page/a";

// import A from "./component/a";

var app = express();

app.set("view engine","ejs");

app.get("/index",function(req,res){

    var modelContent = fs.readFileSync("dist/index.html");
    var __html = renderToStaticMarkup(<A/>);

    var content = modelContent.toString().replace(`<div id="contain"></div>`,`<div id="contain">${__html}</div>`);

    res.send(content)
});

app.use(express.static(path.join(__dirname,'dist')));

app.listen("9999",function(){
    console.log("run at 9999")
});


