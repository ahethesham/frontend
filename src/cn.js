import React from "react";
import  ReactDOM  from "react-dom";
import { responsive ,responsive_mock} from "./responsive.js";
import {S2} from './S2.js'
import img from './cn.png'
import { Questions } from "./Questions.js";
import { Mocktest_block } from "./Mocktest.js";
export let cnobj={
    image:img,
    h1:'Networking',
    subtopics:[['Array',img,0,'/java/array'],['Class',img,1,'/java/Class'],['Abstract',img,2,'/java/abstract'],['Data types',img,3,'/java/datatype'],
    ['Objects',img,4,'/java/Objects'],['Polymorphism',img,5,'/java/polymorphism'],['Inheritance',img,6,'/java/inheritance'],['String',img,7,'/java/string'],['Thread',img,8,'/java/thread']]
}
export class Cn_header extends React.Component{
    constructor(){
        super()
        this.state=({style:responsive.cn()});
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
        this.handleclick=this.handleclick.bind(this)
    }
    handleclick(){
        window.scrollTo(0,0)
       
        ReactDOM.render(<Questions obj={cnobj}/>,document.getElementById('root'));   
     }
    resize(){
        this.setState({style:responsive.cn()})
    }
    render(){
        return(
            <div style={this.state.style} onClick={this.handleclick}> 
                <S2 main={"Networking"} img={img}/>
            </div>
        )
    }
}
export class Cn_mockheader extends React.Component{
    constructor(){
        super()
        this.state={style:responsive_mock.mockblock.cn()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive_mock.mockblock.cn()})
    }
    render(){
        return <div style={this.state.style}>
            <Mocktest_block img={img} str={'cn'} topic={"cn"}/>
        </div>
    }
}