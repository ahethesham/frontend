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
let arr=[['C++',cppimg,0],['Java',javaimg,1],['React',reactimg,2],['Data\nStructures',dsimg,3],['Algorithms',algoimg,4],['JavaScript',jsimg,5],['Operating\nSystems',osimg,6]
,['DBMS',dbmsimg,7],['Networking',cnimg,8],['HTML',htmlimg,9]]
export class Explore extends React.Component{
    constructor(){
        super()
        this.state={style:responsive.explore2.Main()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive.explore2.Main()})
    }
    render(){
        return (
            <div style={this.state.style}>
                {arr.map((ele)=><Explore1 img={ele[1]} h1={ele[0]}/>)}
            </div>
        )
    }
}

class Explore1 extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive.explore2.Element(),image:responsive.explore2.image(this.props.img),text:responsive.explore2.text()};
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive.explore2.Element(),image:responsive.explore2.image(this.props.img),text:responsive.explore2.text()})
    }
    render(){
        return(
            <div style={this.state.style}>
                <div style={this.state.image}>
                </div>
               <textarea style={this.state.text}>
                {this.props.h1}
               </textarea>
            </div>
        )
    }
}