import React from "react";
import  ReactDOM  from "react-dom";
import { responsive } from "./responsive.js";
export class S2 extends React.Component{
    constructor(props){
        super(props)
        this.state=({style:responsive.S2.Main(),image:responsive.S2.image(this.props.img)})
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive.S2.Main(),image:responsive.S2.image(this.props.img)});
    }
    render(){
        return (
            <div style={this.state.style}> 
            <h1>{this.props.main}</h1>
            <div style={this.state.image}>
            </div>
            </div>
        )
    }
}