import "../style/a.css"
import "../style/b.less"
import React, { Component } from "react";
import ReactDom from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import A from "../page/a.jsx";

ReactDom.render(<Router>
    <Route exact path="/" component={A}/>
    <Route exact path="/user" render={()=>{
        return <div>qweqweqwe</div>
    }}/>
</Router>,
    document.getElementById("contain"),
    () => {
        //回调
    }
)
