import React,{Component} from "react";
import {ContextTheme,Provider,connect} from "../../rexio/index";
import { withRouter } from 'react-router';


@connect()
@withRouter
export default class C extends Component{
    render(){
        return <div>{this.props.$rexioCommonData.name}{this.props.$rexioCommonData.test}</div>
    }
    componentDidMount(){
        console.log(this.props);
        setTimeout(()=>{
            this.props.$rexioCommonData.$dispatch({
                name:"我改了名字,哈哈哈哈111",
                test:"aaaaaaa"
            });
        },1000);
        
    }
}