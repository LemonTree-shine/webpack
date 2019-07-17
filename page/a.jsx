import React,{Component} from "react";
import { Toast } from 'antd-mobile';
import Pick from '../component/Pick/Pick';
export default class A extends Component{
    render(){
        return <div className="test">
            <button onClick={this.handleClick}>提交</button>
        </div>
    }
    constructor(){
        super()
    }
    handleClick = ()=>{
        Pick.show("大标题","小标题",<div>内容<br/>内容</div>,"class-dialog",{
            //mask:false,
            //mode:"left"
            //closeIconUrl:"http://hshospital.oss-cn-hangzhou.aliyuncs.com/test12b2828e44414b8f931df38b1acae2ff.png"
        });
        
    }

    componentDidMount(){
        //Toast.info("asdasdas",1);
    }
}

function abc(a){
    return a;
}