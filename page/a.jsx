import React,{Component} from "react";
import { Toast } from 'antd-mobile';
//import Pick from '@root/component/Pick/Pick';
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
        var pick = new Pick();
        pick.show("大标题","小标题",<div>内容<br/>内容</div>,"class-dialog",{
            //mask:false,
            mode:"right"
            //closeIconUrl:"http://hshospital.oss-cn-hangzhou.aliyuncs.com/test12b2828e44414b8f931df38b1acae2ff.png"
        });
    }

    componentDidMount(){
        Toast.info("asdasdas",1);
        var obj = {
            location:"test"
        }
        function a(x,y){
            console.log(this);
            console.log(x,y)
        }

        Function.prototype.MyCall = function(obj){
            var obj = obj || window;
            obj.fn = this;
            //console.log([...arguments].slice(1));
            var args = [...arguments].slice(1)
            var result = obj.fn(...args);
            delete obj.fn;
            return result;
        }

        //a.MyCall(obj,2,3);
        //a.call(obj,2,3)

        function fn1(){
            console.log(1);
        }
        function fn2(){
            console.log(2);
        }

        fn1.MyCall.MyCall(fn2)
    }
}
