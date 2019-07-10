import React,{Component} from "react";
import { Toast } from 'antd-mobile';
export default class A extends Component{
    render(){
        return <div className="test">
            hello react-ssr
            <button onClick={this.handleClick}>提交</button>
        </div>
    }
    constructor(){
        super()
    }
    handleClick = ()=>{
        
        alert(123);
    }

    componentDidMount(){
        Toast.info("asdasdas",1);
    }
}

function abc(a){
    return a;
}