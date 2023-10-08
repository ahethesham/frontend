import React from "react";
import  ReactDOM  from "react-dom";
import { responsive } from "./responsive.js";
import {S2} from './S2.js'
import { Heading } from "./heading.js";
import { Side_bar } from "./side_bar.js";
import img from './react.png'
import { Questions } from "./Questions.js";
export let reactobj={
    image:img,
    h1:'React',
    subtopics:[['Process',img,0,'/os/process'],['Threads',img,1,'/os/threads'],['IPC',img,2,'/os/ipc'],['Kernel',img,3,'/os/kernel'],
    ['Concurrency',img,4,'/os/concurrency'],['Algorithms',img,5,'/os/algo']]
}
export class React_header extends React.Component{
    constructor(){
        super()
        this.state=({style:responsive.React()});
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
        this.handleclick=this.handleclick.bind(this)
    }
   
    handleclick(){
        window.scrollTo(0,0)

        ReactDOM.render(<Questions obj={reactobj}/>,document.getElementById('root'));   
     }
    resize(){
        this.setState({style:responsive.React()})
    }
    render(){
        return(
            <div style={this.state.style} onClick={this.handleclick}> 
                <S2 main={"React"} img={img}/>
            </div>
        )
    }
}