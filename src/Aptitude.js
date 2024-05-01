import React from "react";
import ReactDOM from "react-dom";
import { Mocktest_block,} from "./Mocktest.js";
import img from './aptitude.png'
import { responsive_mock } from "./responsive.js";
import img_reasoning from './reasoning.png'
import img_numerical from './numerical.png'
import cppimg from './cpp.png'

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
            <Mocktest_block logout={this.props.logout} img={img} topic={"aptitude"} str={"aptitude"}/>
        </div>
    }
}

export class Apt_mockheader_02 extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive_mock.mockblock.apt()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive_mock.mockblock.apt()})
    }
    render(){
        return <div style={this.state.style}>
            <Mocktest_block  logout={this.props.logout}img={img} topic={"aptitude"} str={"aptitude"}/>
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
            <Mocktest_block logout={this.props.logout}img={img_reasoning} topic={'reasoning'} str={"reasoning"}/>
        </div>
    }
}
export class Reasoning_mockheader_02 extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive_mock.mockblock.reasoning()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive_mock.mockblock.reasoning()})
    }
    render(){
        return <div style={this.state.style}>
            <Mocktest_block logout={this.props.logout}img={img_reasoning} topic={'reasoning'} str={"reasoning"}/>
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
            <Mocktest_block logout={this.props.logout}img={img_numerical} topic={'numerical'} str={"numerical"}/>
        </div>
    }
}
export class Cpp_mockheader extends React.Component{
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
            <Mocktest_block logout={this.props.logout}img={cppimg} topic={'cpp'} str={"cpp"}/>
        </div>
    }
}
