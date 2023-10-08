import React from "react";
import { responsive,responsive_mock } from "./responsive.js";
import {Side_bar} from "./side_bar.js";
import ReactDOM from "react-dom";
import { Heading } from "./heading.js";
import img from './ds.png'
import { Mocktest_block } from "./Mocktest.js";
import { Questions } from "./Questions.js";
export  let dsobj={
    image:img,
    h1:'data structures',
    subtopics:[['Array',img,0,'/ds/array'],['Stack',img,1,'/ds/stack'],['Queue',img,2,'/ds/queue'],['LinkedList',img,3,'/ds/linkedlist'],
    ['Binary Trees',img,4,'/ds/tree'],['Graphs',img,5,'/ds/graph'],['Hash\nTables',img,6,'/ds/hash'],['Trie',img,7,'/ds/trie'],['Segment Tree',img,8,'/ds/segtree']]
}
export class Dsa_header extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive.dsa.Main(),image:responsive.dsa.image(img),text:responsive.dsa.text()}
        this.handleClick=this.handleClick.bind(this)
        this.resize=this.resize.bind(this);
        window.addEventListener('resize',this.resize);
    }
    resize(){
        this.setState({style:responsive.dsa.Main(),image:responsive.dsa.image(img),text:responsive.dsa.text()})
    }
    handleClick(){
       window.scrollTo(0,0)
        ReactDOM.render(<Questions obj={dsobj}/>,document.getElementById('root'));
    }
    render(){
        return(
            <button style={this.state.style} onClick={this.handleClick}>
                <div style={this.state.image}>
                </div>
             <p style={this.state.text}>
                <h1>Data Structures</h1>
                In computer science, a data structure is a data organization, management, and storage format that is usually chosen for efficient access to data.
                More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data
                i.e., it is an algebraic structure about data.
                <br/><br/>
                Eg:Array, String, Stack, Queue, HashTables, Tree, Graphs
            </p>
            </button>
        )
    }
}
export class Ds_mockheader extends React.Component{
    constructor(){
        super()
        this.state={style:responsive_mock.mockblock.ds(),count:'00'}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive_mock.mockblock.ds(),count:'00'})
    }
    render(){
        return <div style={this.state.style}>
            <Mocktest_block img={img} str={'dsa'} topic={"ds"}/>
        </div>
    }
}