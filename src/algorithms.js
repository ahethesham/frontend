import React from "react";
import { responsive,responsive_mock } from "./responsive.js";
import img from './algorithms.png'
import  ReactDOM  from "react-dom";
import { Questions } from "./Questions.js";
import { Mocktest_block } from "./Mocktest.js";
import { addresses } from "./index.js";
export let algoobj={
    image:img,
    h1:'Algorithms',
    subtopics:[['Time Complexity',img,0,'/algo/time'],['Space Complexity',img,1,'/algo/Space'],['Sorting',img,2,'/algo/sort'],['Searching',img,3,'/algo/Search'],
    ['Recursions',img,4,'/algo/recursions'],['Greedy',img,5,'/algo/greedy']]
}
export class Algorithms extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive.dsa.Main(),image:responsive.dsa.image(img),text:responsive.dsa.text()}
        this.handleClick=this.handleClick.bind(this)
        this.resize=this.resize.bind(this);
        window.addEventListener('resize',this.resize);
    }
    componentDidMount(){
        addresses.algorithms=this
    }
    componentDidUpdate(){
        addresses.algorithms=this
    }
    resize(){
        this.setState({style:responsive.dsa.Main(),image:responsive.dsa.image(img),text:responsive.dsa.text()});
    }
    handleClick(){
        window.scrollTo(0,0)
        ReactDOM.render(<Questions logout={this.props.logout} obj={algoobj}/>,document.getElementById('root'));
    }
    render(){
        return(
            <button style={this.state.style} onClick={this.handleClick}>
            <div style={this.state.image}>
            </div>
         <p style={this.state.text}>
            <h1>Algorithms</h1>
            An algorithm is a set of commands that must be followed for a computer to perform calculations or other problem-solving operations.
             According to its formal definition, an algorithm is a finite set of instructions carried out in a specific order to perform a particular task
             <br/><br/>
             Click here to access latest Mock tests on Algorithms
        </p>
        </button>
        )
    }
}

export class Algo_mockheader extends React.Component{
    constructor(){
        super()
        this.state={style:responsive_mock.mockblock.algo()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive_mock.mockblock.algo()})
    }
    render(){
        return <div style={this.state.style}>
            <Mocktest_block logout={this.props.logout} img={img} topic={'algo'}/>
        </div>
    }
}