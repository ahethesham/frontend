import React from "react";
import ReactDOM from "react-dom";
import { Mocktest_block,} from "./Mocktest.js";
import img from './aptitude.png'
import { responsive_mock } from "./responsive.js";
import img_reasoning from './reasoning.png'
import img_numerical from './numerical.png'

export class Apt_mockheader extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive_mock.mockblock.aptitude(10,15)}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive_mock.mockblock.aptitude(10,15)})
    }
    render(){
        return <div style={this.state.style}>
            <Mocktest_block img={img} topic={'Aptitude'} str={"Aptitude"}/>
        </div>
    }
}
export class Reasoning_mockheader extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive_mock.mockblock.aptitude(10,15)}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive_mock.mockblock.aptitude(10,15)})
    }
    render(){
        return <div style={this.state.style}>
            <Mocktest_block img={img_reasoning} topic={'Reasoning'} str={"Reasoning"}/>
        </div>
    }
}
export class Numerical_mockheader extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive_mock.mockblock.aptitude(10,15)}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive_mock.mockblock.aptitude(10,15)})
    }
    render(){
        return <div style={this.state.style}>
            <Mocktest_block img={img_numerical} topic={'Numerical'} str={"Numerical"}/>
        </div>
    }
}
