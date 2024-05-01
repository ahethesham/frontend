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
    subtopics:[['Components',img,0,'/react/component'],['States',img,1,'/react/state'],['Hooks',img,2,'/react/hooks'],['props',img,3,'/react/props'],
    ['callbacks',img,4,'/react/callbacks'],['class components',img,5,'/react/class']]
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

        ReactDOM.render(<Questions logout={this.props.logout}obj={reactobj}/>,document.getElementById('root'));   
     }
    resize(){
        this.setState({style:responsive.React()})
    }
    render(){
        return(
            <div style={this.state.style} onClick={this.handleclick}> 
                <S2 logout={this.props.logout}main={"React"} img={img}/>
            </div>
        )
    }
}