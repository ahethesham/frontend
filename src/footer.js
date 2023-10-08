import React from "react";
import ReactDOM from "react-dom";
import { Dsa_header } from "./dsa.js";
import { Questions } from "./Questions.js";
import { responsive } from "./responsive.js";
import {osobj} from './OS.js'
import {dbmsobj} from './DBMS.js'
import {algoobj} from './algorithms.js'
import {cppobj} from './cpp.js'
import {jsobj} from './JS.js'
import {dsobj} from './dsa.js'
import { javaobj } from "./java.js";
import {reactobj} from './react.js'
import {cnobj} from './cn.js'
import {htmlobj} from './html.js'
/*let obj_ds={
   image:dsimg,
   h1:'data structures',
   subtopics:[['Array',dsimg,0,'/ds/array'],['Stack',dsimg,1,'/ds/stack'],['Queue',dsimg,2,'/ds/queue'],['LinkedList',dsimg,3,'/ds/linkedlist'],
   ['Trees',dsimg,4,'/ds/tree'],['Graphs',dsimg,5,'/ds/graph'],['Hash\nTables',dsimg,6,'/ds/hash'],['Trie',dsimg,7,'/ds/trie'],['Segment Tree',dsimg,8,'/ds/segtree']]
}
let obj_cpp={
   image:cppimg,
   h1:'C++',
   subtopics:[['Pointers',cppimg,0,'/cpp/pointer'],['Macros',cppimg,1,'/cpp/macros'],['Preprocessor',cppimg,2,'/cpp/preprocessor'],['Templates',cppimg,3,'/cpp/templates'],
   ['struct',cppimg,4,'/cpp/struct'],['Vector',cppimg,5,'/cpp/vector'],['Maps',cppimg,6,'/cpp/map'],['unordered_map',cppimg,7,'/cpp/unordered_map'],['set',cppimg,8,'/cpp/set']]
}
let obj_algo={
   image:algoimg,
   h1:'Algorithms',
   subtopics:[['Time Complexity',algoimg,0,'/algo/time'],['Space Complexity',algoimg,1,'/algo/Space'],['Sorting',algoimg,2,'/algo/sort'],['Searching',algoimg,3,'/algo/Search'],
   ['Recursions',algoimg,4,'/algo/recursions'],['Greedy',algoimg,5,'/algo/greedy']]
}
let obj_java={
   image:javaimg,
   h1:'Java',
   subtopics:[['Array',javaimg,0,'/java/array'],['Class',javaimg,1,'/java/Class'],['Abstract',javaimg,2,'/java/abstract'],['Data types',javaimg,3,'/java/datatype'],
   ['Objects',javaimg,4,'/java/Objects'],['Polymorphism',javaimg,5,'/java/polymorphism'],['Inheritance',javaimg,6,'/java/inheritance'],['String',javaimg,7,'/java/string'],['Thread',javaimg,8,'/java/thread']]
}
let obj_os={
      image:osimg,
      h1:'Operating systems',
      subtopics:[['OS Basics',osimg,0,'/os/basics'],['Kernel',osimg,1,'/os/structure'],['CPU Scheduling',osimg,2,'/os/scheduling'],['Process',osimg,3,'/os/process'],
      ['Deadlock',osimg,4,'/os/deadlock'],['Threads',osimg,5,'/os/threads'],["Main Memory",osimg,6,"/os/main_memory"],["Disk Management",osimg,7,"/os/disk"],["Misc",osimg,8,"/os/misc"]]
}
let obj_js={
   image:jsimg,
   h1:"JavaScript",
   subtopics:[[]]
}*/
export class Footer extends React.Component{
     constructor(){
        super()
        this.state={style:responsive.footer.Main()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
     }
     resize(){
      this.setState({style:responsive.footer.Main()})
     }
     render(){
        return (
            <footer style={this.state.style}>
               <Footer_section obj={osobj}/>
               <Footer_section obj={cppobj}/>
               <Footer_section obj={algoobj}/>
               <Footer_section obj={javaobj}/>
               <Footer_section obj={dsobj}/>
               <Footer_section obj={jsobj}/>
               <Footer_section obj={reactobj}/>
               <Footer_section obj={cnobj}/>
               <Footer_section obj={htmlobj}/>

            </footer>
        )
     }
}
class Footer_section extends React.Component{
   constructor(props){
      super(props)
      this.state={style:responsive.footer.footer_section(),list:responsive.footer.list()}
      this.handleclick=this.handleclick.bind(this)
      this.resize=this.resize.bind(this)
      window.addEventListener('resize',this.resize)
   }
   resize(){
      this.setState({style:responsive.footer.footer_section(),list:responsive.footer.list()})
   }
   handleclick(){
      ReactDOM.render(<Questions obj={this.props.obj}/>,document.getElementById('root'))
   }
   render(){
      return(
         <div style={this.state.style}>
            {this.props.obj.h1}
            <br/>
            <br/>
            {this.props.obj.subtopics.map((ele)=><><a onClick={this.handleclick}style={this.state.list}>{ele[0]}</a><br/></>)}
         </div>
      )
   }
}