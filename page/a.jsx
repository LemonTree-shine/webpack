import React,{Component} from "react";
import { Toast } from 'antd-mobile';
//import Pick from '@root/component/Pick/Pick';
import Pick from '../component/Pick/Pick';

import {ContextTheme,Provider,connect} from "../../rexio/index";

import C from "./c";


export default class A extends Component{
    render(){
        return <div className="test">
            <button onClick={this.handleClick}>提交</button>
            
                <B></B>
        </div>
    }
    constructor(){
        super()
    }
    componentDidMount(){
        console.log(this.props);
    }
    handleClick = ()=>{
        console.log(this.props);
        this.props.history.push("/c")
        return
        var pick = new Pick();
        pick.show("大标题","小标题",<div>内容<br/>内容</div>,"class-dialog",{
            //mask:false,
            mode:"right"
        });
    }
}

class B extends Component{
    render(){
        return <div>
            <C/>
        </div>
    }
}


