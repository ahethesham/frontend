import React from "react";
import ReactDOM  from "react-dom";
import { responsive } from "./responsive.js";
import {cppobj} from './cpp.js'
import {javaobj} from './java.js'
import {reactobj} from './react.js'
import {dsobj} from './dsa.js'
import {algoobj} from './algorithms.js'
import {jsobj} from './JS.js'
import {osobj} from './OS.js'
import {dbmsobj} from './DBMS.js'
import {cnobj} from './cn.js'
import {htmlobj} from './html.js'
import img from './cpp.png'
import { Questions } from "./Questions.js";
let arr=[cppobj,javaobj,reactobj,algoobj,jsobj,osobj,dbmsobj,cnobj,htmlobj,cppobj,javaobj,reactobj,algoobj,jsobj,osobj,dbmsobj,cnobj,htmlobj,cppobj,javaobj,reactobj,algoobj,jsobj,osobj,dbmsobj,cnobj,htmlobj,cppobj,javaobj,reactobj,algoobj,jsobj,osobj,dbmsobj,cnobj,htmlobj]
export class Explore_header extends React.Component{
    constructor(){
        super()
        this.state={style:responsive.explore.Main()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive.explore.Main()})
    }
    render(){
        return (
            <div style={this.state.style}>
                {arr.map((ele)=>{
                    return <Explore obj={ele}/>
                })}
            </div>
        )
    }
}

class Explore extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive.explore.Element(),image:responsive.explore.image(this.props.obj.image),text:responsive.explore.text()};
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive.explore.Element(),image:responsive.explore.image(this.props.obj.image),text:responsive.explore.text()})
    }
    render(){
        return(
            <div style={this.state.style} onClick={()=>{window.scrollTo(0,0);ReactDOM.render(<Questions obj={this.props.obj}/>,document.getElementById('root'))}}>
                <div style={this.state.image}>
                </div>
               <textarea style={this.state.text} value={this.props.obj.h1} >
               </textarea>
            </div>
        )
    }
}