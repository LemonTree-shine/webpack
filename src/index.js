import React, { Component } from "react";
import ReactDom from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import A from "@page/a";

ReactDom.render(<Router>
    <Route exact path="/index" component={A}/>
</Router>,
    document.getElementById("contain"),
    () => {
        //回调
    }
)
