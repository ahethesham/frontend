import React from "react";
import {Heading} from './heading.js'
import  ReactDOM  from "react-dom";
import { responsive, responsive_mock } from "./responsive.js";
import {Mocktest_block} from './Mocktest.js'
import { addresses } from "./index.js";
import img from './cpp.png'
import { Questions } from "./Questions.js";
export let cppobj={
    image:img,
    h1:'C++',
    subtopics:[['Pointers',img,0,'/cpp/pointer'],['Macros',img,1,'/cpp/macros'],['Preprocessor',img,2,'/cpp/preprocessor'],['Templates',img,3,'/cpp/templates'],
    ['struct',img,4,'/cpp/struct'],['Vector',img,5,'/cpp/vector'],['Maps',img,6,'/cpp/map'],['unordered_map',img,7,'/cpp/unordered_map'],['set',img,8,'/cpp/set']]
}
export class Cpp_header extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive.dsa.Main(),text:responsive.dsa.text(),image:responsive.dsa.image(img)}
        this.resize=this.resize.bind(this);
        window.addEventListener('resize',this.resize);
    }
    componentDidMount(){
        addresses.Cpp_header=this
    }
    componentDidUpdate(){
        addresses.Cpp_header=this
    }
    resize(){
        this.setState({style:responsive.dsa.Main(),text:responsive.dsa.text(),image:responsive.dsa.image(img)})
    }
    handleClick(){
        window.scrollTo(0,0)
        ReactDOM.render(<Questions logout={this.props.logout}obj={cppobj}/>,document.getElementById('root'));
    }
    render(){
        return (
            <button style={this.state.style} onClick={()=>{this.handleClick()}}>
                <div style={this.state.image}>
                </div>
             <p style={this.state.text}>
             <h1>C++</h1>
                CPP is a low level programming language developed which is considered as one of the fastest compiled programing language
                take mock test on pointers,templates,OOP's and various topics on CPP
            </p>
            </button>
        )
    }
}
export class Cpp_mockheader extends React.Component{
    constructor(){
        super()
        this.state={style:responsive_mock.mockblock.cpp()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive_mock.mockblock.cpp()})
    }
    render(){
        return<div style={this.state.style} >
              <Mocktest_block logout={this.props.logout}img={img} str={'cpp'}topic={"cpp"} />
        </div>
    }
}