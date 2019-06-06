//require("../style/a.css");
//require("../style/b.less");
import "../style/a.css"
import "../style/b.less"
console.log("asdasdsadasdasd");

import A from "../page/a.jsx";

import React, { Component } from "react";

import ReactDom from "react-dom";

console.log(A);

console.log(ReactDom);

ReactDom.render(<A />,
    document.getElementById("contain"),
    () => {
        //回调
    }
)
