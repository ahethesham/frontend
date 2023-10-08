import React from "react";
import ReactDOM from "react-dom";
import { Questions } from "./Questions.js";
import { responsive } from "./responsive.js";
export  class Side_bar extends React.Component{
    constructor(props){
        super(props)
        this.state={arr:this.props.arr,style:responsive.sidebar.main()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({arr:this.props.arr,style:responsive.sidebar.main()});
    }
    render(){
        return(
            <div style={this.state.style}>
               {
                this.props.arr.map((ele)=><Element topic={ele[0]} img={ele[1]}/>)
               }
            </div>
        )
    }
}
class Element extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive.sidebar.Element(),text:responsive.sidebar.text(),image:responsive.sidebar.image(this.props.img)}
        this.resize=this.resize.bind(this);
        window.addEventListener('resize',this.resize)
        this.handleclick=this.handleclick.bind(this)
    }
    resize(){
        this.setState({style:responsive.sidebar.Element(),text:responsive.sidebar.text(),image:responsive.sidebar.image(this.props.img)});
    }
    handleclick(){
        window.scrollTo(0,0)
        let n=getarray(this.props.topic,this.props.img);
        ReactDOM.render(<Questions obj={n}/>,document.getElementById('root'));

    }
    render(){
        return(
            <button style={this.state.style} onClick={this.handleclick}>
                <div style={this.state.image}>

                </div>
                  <text style={this.state.text}>
                                {this.props.topic}
                  </text>
            </button>
        )
    }
}
function getarray(topic,img){
    let obj;
    if(topic=='Data\nstructures')
    {
        obj={
            image:img,
            h1:'data structures',
            subtopics:[['Array',img,0,'/ds/array'],['Stack',img,1,'/ds/stack'],['Queue',img,2,'/ds/queue'],['LinkedList',img,3,'/ds/linkedlist'],
            ['Trees',img,4,'/ds/tree'],['Graphs',img,5,'/ds/graph'],['Hash\nTables',img,6,'/ds/hash'],['Trie',img,7,'/ds/trie'],['Segment Tree',img,8,'/ds/segtree']]
        }
    }
    else if(topic=='Cpp')
    {
        obj={
            image:img,
            h1:'C++',
            subtopics:[['Pointers',img,0,'/cpp/pointer'],['Macros',img,1,'/cpp/macros'],['Preprocessor',img,2,'/cpp/preprocessor'],['Templates',img,3,'/cpp/templates'],
            ['struct',img,4,'/cpp/struct'],['Vector',img,5,'/cpp/vector'],['Maps',img,6,'/cpp/map'],['unordered_map',img,7,'/cpp/unordered_map'],['set',img,8,'/cpp/set']]
        }
        
    }
    else if(topic=='Java'){
        obj={
            image:img,
            h1:'Java',
            subtopics:[['Array',img,0,'/java/array'],['Class',img,1,'/java/Class'],['Abstract',img,2,'/java/abstract'],['Data types',img,3,'/java/datatype'],
            ['Objects',img,4,'/java/Objects'],['Polymorphism',img,5,'/java/polymorphism'],['Inheritance',img,6,'/java/inheritance'],['String',img,7,'/java/string'],['Thread',img,8,'/java/thread']]
        }
    }
    else if(topic=='Algorithms'){
        obj={
            image:img,
            h1:'Algorithms',
            subtopics:[['Time Complexity',img,0,'/algo/time'],['Space Complexity',img,1,'/algo/Space'],['Sorting',img,2,'/algo/sort'],['Searching',img,3,'/algo/Search'],
            ['Recursions',img,4,'/algo/recursions'],['Greedy',img,5,'/algo/greedy']]
        }
    }
    else if(topic=='OS'){

        obj={
            image:img,
            h1:'Operating systems',
            subtopics:[['OS Basics',img,0,'/os/basics'],['Kernel',img,1,'/os/structure'],['CPU Scheduling',img,2,'/os/scheduling'],['Process',img,3,'/os/process'],
            ['Deadlock',img,4,'/os/deadlock'],['Threads',img,5,'/os/threads'],["Main Memory",img,6,"/os/main_memory"],["Disk Management",img,7,"/os/disk"],["Misc",img,8,"/os/misc"]]
        }
        
    }
    else if(topic=='DBMS')
    {
         obj={
            image:img,
            h1:'DBMS',
            subtopics:[['RDBMS',img,0,'/dbms/rdbms'],['Constraints',img,1,'/dbms/constraints'],['DDL',img,2,'/dbms/ddl'],['DML',img,3,'/dbms/dml'],
            ['TCL',img,4,'/dbms/tcl'],['Keys',img,5,'/dbms/keys']]
        }
    }
    else if(topic=='React')
    {
        obj={
            image:img,
            h1:'React',
            subtopics:[['Process',img,0,'/os/process'],['Threads',img,1,'/os/threads'],['IPC',img,2,'/os/ipc'],['Kernel',img,3,'/os/kernel'],
            ['Concurrency',img,4,'/os/concurrency'],['Algorithms',img,5,'/os/algo']]
        }
    }
    else if(topic=='JavaScript')
    {
        obj={
            image:img,
            h1:'JavaScript',
            subtopics:[['Process',img,0,'/os/process'],['Threads',img,1,'/os/threads'],['IPC',img,2,'/os/ipc'],['Kernel',img,3,'/os/kernel'],
            ['Concurrency',img,4,'/os/concurrency'],['Algorithms',img,5,'/os/algo']]
        }
    }
    else if(topic=="Networking"){
        obj={
            image:img,
            h1:"Networking",
            subtopics:[["TCP",img,0,'/os/process']]
        }
    }
    else if(topic=="HTML")
    {
        obj={
            image:img,
            h1:"HTML",
            subtopics:[["TCP",img,0,'/os/process']]
        }
    }
    return obj;
}
