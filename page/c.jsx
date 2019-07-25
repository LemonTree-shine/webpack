import React,{Component} from "react";
import {ContextTheme,Provider,connect} from "../../rexio/index";


@connect
export default class C extends Component{
    render(){
        return <div>{this.props.name}</div>
    }
    componentDidMount(){
        console.log(this.props);
        setTimeout(()=>{
            this.props.$dispatch({
                name:"我改了名字,哈哈哈哈111"
            });
        },1000);
        
    }
}