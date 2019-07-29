import React, { Component } from "react";
import ReactDom from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import {ContextTheme,Provider,connect} from "../../rexio/index";

import A from "@page/a";
import C from "@page/c";

ReactDom.render(
<Provider value={{name:"chenze111",adress:"杭州"}}>
    <Router>
        <Route exact path="/index" component={A}/>
        <Route exact path="/c" component={C}/>
    </Router>
</Provider>
,
    document.getElementById("contain"),
    () => {
        //回调
    }
)
