import React from "react";
import  ReactDOM  from "react-dom";
import { responsive } from "./responsive.js";
import {S2} from './S2.js'
import { Heading } from "./heading.js";
import { Side_bar } from "./side_bar.js";
import img from './Os.png'
import { Questions } from "./Questions.js";
export let osobj={
    image:img,
    h1:'Operating systems',
    subtopics:[['OS Basics',img,0,'/os/basics'],['Kernel',img,1,'/os/structure'],['CPU Scheduling',img,2,'/os/scheduling'],['Process',img,3,'/os/process'],
    ['Deadlock',img,4,'/os/deadlock'],['Threads',img,5,'/os/threads'],["Main Memory",img,6,"/os/main_memory"],["Disk Management",img,7,"/os/disk"],["Misc",img,8,"/os/misc"]]
}
export class Os_header extends React.Component{
    constructor(){
        super()
        let arr1=['process','threads']
        this.state=({arr:arr1,style:responsive.OS()});
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
        this.handleclick=this.handleclick.bind(this)
    }
    handleclick(){
        window.scrollTo(0,0)
        ReactDOM.render(<Questions logout={this.props.logout}obj={osobj}/>,document.getElementById('root'));   
     }
    resize(){
        this.setState((prev)=>{return {arr:prev.arr,style:responsive.OS()}})
    }
    render(){
        return(
            <div style={this.state.style} onClick={this.handleclick}> 
                <S2 logout={this.props.logout}main={"Opearating Systems"} topics={this.state.arr} img={img} />
            </div>
        )
    }
}
