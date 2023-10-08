import React from "react";
import  ReactDOM  from "react-dom";
import { responsive,responsive_mock } from "./responsive.js";
import {S2} from './S2.js'
import img from './js.png'
import { Mocktest_block } from "./Mocktest.js";
import { Questions } from "./Questions.js";
export  let jsobj={
    image:img,
    h1:'Javascript',
    subtopics:[['Process',img,0,'/os/process'],['Threads',img,1,'/os/threads'],['IPC',img,2,'/os/ipc'],['Kernel',img,3,'/os/kernel'],
    ['Concurrency',img,4,'/os/concurrency'],['Algorithms',img,5,'/os/algo']]
}
export class Js_header extends React.Component{
    constructor(){
        super()
        let arr1=['process','threads']
        this.state=({arr:arr1,style:responsive.JS()});
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
        this.handleclick=this.handleclick.bind(this)
    }
    handleclick(){
        window.scrollTo(0,0)
       
        ReactDOM.render(<Questions obj={jsobj}/>,document.getElementById('root'));   
     }
    resize(){
        this.setState((prev)=>{return {arr:prev.arr,style:responsive.JS()}})
    }
    render(){
        return(
            <div style={this.state.style} onClick={this.handleclick}> 
                <S2 main={"JavaScript"} topics={this.state.arr} img={img}/>
            </div>
        )
    }
}
export class Js_mockheader extends React.Component{
    constructor(){
        super()
        this.state={style:responsive_mock.mockblock.js()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive_mock.mockblock.js()})
    }
    render(){
        return <div style={this.state.style}>
            <Mocktest_block img={img} str={'js'} topic={"js"}/>
        </div>
    }
}