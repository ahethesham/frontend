import React from "react";
import ReactDOM  from "react-dom";
import { responsive } from "./responsive.js";
import cppimg from './cpp.png'
import javaimg from './java.png'
import reactimg from './react.png'
import dsimg from './ds.png'
import algoimg from './algorithms.png'
import jsimg from './js.png'
import osimg from './Os.png'
import dbmsimg from './Dbms.png'
import cnimg from './cn.png'
import htmlimg from './html.png'
import {osobj} from './OS.js'
import {dbmsobj} from './DBMS.js'
import {algoobj} from './algorithms.js'
import {cppobj} from './cpp.js'
import {jsobj} from './JS.js'
import {dsobj} from './dsa.js'
import { javaobj } from "./java.js";
import { Questions } from "./Questions.js";
import {reactobj} from './react.js'
import {cnobj} from './cn.js'
import {htmlobj} from './html.js'
import { addresses } from "./index.js";
let arr=[['C++',cppimg,0,cppobj],['Operating\nSystem',osimg,1,osobj],['React',reactimg,2,reactobj],['Data\nStructures',dsimg,3,dsobj],['Algorithms',algoimg,4,algoobj],['JavaScript',jsimg,5,jsobj],['Java',javaimg,6,javaobj]
,['DBMS',dbmsimg,7,dbmsobj],['Networking',cnimg,8,cnobj],['HTML',htmlimg,9,htmlobj]]

let address=[null,null,null]
export class Scroll_header extends React.Component{
    constructor(){
        super()
        this.state={buttonl:responsive.scroll_bar.buttonl(),buttonr:responsive.scroll_bar.buttonr(),index:1,style:responsive.scroll_bar.Main()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
        this.handleleftclick=this.handleleftclick.bind(this)
        this.handlerightclick=this.handlerightclick.bind(this)
    }
    componentDidMount(){
        addresses.Scroll_header=this
    }
    componentDidUpdate(){
        addresses.Scroll_header=this
    }
    resize(){
        this.setState((prev)=>{return {buttonr:responsive.scroll_bar.buttonr(),buttonl:responsive.scroll_bar.buttonl(),index:prev.index,style:responsive.scroll_bar.Main()}})
    }
    handleleftclick(){
        this.setState((prev)=>{return {index:(prev.index-1)%(arr.length),style:prev.style,buttonl:prev.buttonl,buttonr:prev.buttonr}},()=>{  for(let i=0;i<address.length;i++)
            if(address[i])
            address[i].resize();})
        
    }
    handlerightclick(){
        this.setState((prev)=>{return {index:(prev.index+1)%(arr.length),style:prev.style,buttonl:prev.buttonl,buttonr:prev.buttonr}},()=>{  for(let i=0;i<address.length;i++)
            if(address[i])
            address[i].resize();});
        return;

    }
    render(){
        return (
            <div style={this.state.style}>
                <button style={this.state.buttonl}onClick={this.handleleftclick}>{'<'}</button>
                <Scroll flag={0} index={0}img={arr[Math.abs((this.state.index-1)%(arr.length))][1]} h1={arr[Math.abs((this.state.index-1)%(arr.length))][0]} ind={arr[Math.abs((this.state.index)%(arr.length))][2]}/>
                <Scroll flag={1} index={1}img={arr[Math.abs((this.state.index)%(arr.length))][1]} h1={arr[Math.abs((this.state.index)%(arr.length))][0]} ind={arr[Math.abs((this.state.index)%(arr.length))][2]}/>
                <Scroll flag={0} index={2}img={arr[Math.abs((this.state.index+1)%(arr.length))][1]} h1={arr[Math.abs((this.state.index+1)%(arr.length))][0]} ind={arr[Math.abs((this.state.index+1)%(arr.length))][2]}/>
                <button style={this.state.buttonr}onClick={this.handlerightclick}>{'>'}</button>
            </div>
        )
    }
}

class Scroll extends React.Component{
    constructor(props){
        super(props)
        address[this.props.index]=this;
        this.state={style:responsive.scroll_bar.Element(this.props.flag),image:responsive.scroll_bar.image(this.props.flag,this.props.img),text:responsive.scroll_bar.text(this.props.flag)};
        this.resize=this.resize.bind(this)
        this.handleclick=this.handleclick.bind(this)
        window.addEventListener('resize',this.resize)
    }
    componentDidMount(){
        addresses[`Scroll${this.props.ind}`]=this
    }
    componentDidUpdate(){
        addresses[`Scroll${this.props.ind}`]=this
    }
    handleclick(){
        window.scrollTo(0,0)
        ReactDOM.render(<Questions logout={this.props.logout}obj={arr[this.props.ind][3]}/>,document.getElementById('root'));
    }
    resize(){
        this.setState((prev)=>{return {style:responsive.scroll_bar.Element(this.props.flag),image:responsive.scroll_bar.image(this.props.flag,this.props.img),text:responsive.scroll_bar.text(this.props.flag)}})
    }
    render(){
        return(
            <div style={this.state.style} onClick={this.handleclick}>
                <div style={this.state.image}>
                </div>
                <div style={this.state.text}>
                    {this.props.h1}
                </div>
            </div>
        )
    }
}