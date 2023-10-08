import React from "react";
import ReactDOM from 'react-dom'
import {responsive} from './responsive.js'
import {Main} from './index.js'
export class Heading extends React.Component{
    constructor(){
        super()
        this.state={style:responsive.heading.main(),h1:responsive.heading.exit()}
        this.resize=this.resize.bind(this);
        window.addEventListener('resize',this.resize);
        window.addEventListener('scroll',this.resize);
    }
    resize(){
        this.setState({style:responsive.heading.main(),h1:responsive.heading.exit()});
    }
    render(){
        return(
            <div style={this.state.style}>
            <button style={this.state.h1}onClick={()=>{ReactDOM.render(<Main/>,document.getElementById('root'))}}>
                Binary.c
            </button>
            <hr/>
            </div>
        )
    }
}