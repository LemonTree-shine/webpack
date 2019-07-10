import React,{Component} from "react";
import { Toast } from 'antd-mobile';
export default class A extends Component{
    render(){
        return <div className="test">12313123</div>
    }
    constructor(){
        super()
    }
    a = ()=>{
        console.log(123)
    }

    componentDidMount(){
        Toast.info("asdasdas",1);
    }
}

function abc(a){
    return a;
}