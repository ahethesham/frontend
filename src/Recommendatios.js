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
import {osobj} from './OS.js'
import {dbmsobj} from './DBMS.js'
import {algoobj} from './algorithms.js'
import {cppobj} from './cpp.js'
import {jsobj} from './JS.js'
import {dsobj} from './dsa.js'
import { javaobj } from "./java.js";
import { Questions } from "./Questions.js";
import {reactobj} from './react.js'
import {cnobj} from './cn.js'
import {htmlobj} from './html.js'
import { addresses } from "./index.js";
let arr=[cppobj,javaobj,reactobj,algoobj,jsobj,osobj,dbmsobj,cnobj,htmlobj]//,cppobj,javaobj,reactobj,algoobj,jsobj,osobj,dbmsobj,cnobj,htmlobj,cppobj,javaobj,reactobj,algoobj,jsobj,osobj,dbmsobj,cnobj,htmlobj,cppobj,javaobj,reactobj,algoobj,jsobj,osobj,dbmsobj,cnobj,htmlobj]
function getrand(idx){
     while(1){
        let t=Math.floor(Math.random() * 9);
        if(t!=idx)return t;
     }
}
export class Recommendations extends React.Component{
    constructor(props){
        super(props)
        let idx=getrand(-1);
        this.state={main:responsive.recommend.Main(),index:idx,button:responsive.recommend.buttonr(),image:responsive.recommend.image(1,arr[idx].image),ele:responsive.recommend.Element(1)}
        window.addEventListener('resize',this.resize)
        this.resize=this.resize.bind(this)
        this.handleclick=this.handleclick.bind(this)
    }
    resize(){
        this.setState((prev)=>{return {main:responsive.recommend.Main(),index:prev.index,button:responsive.recommend.buttonr()}});
    }
    handleclick(){
        let idx=this.state.index
        this.setState({main:responsive.recommend.Main(),index:getrand(idx),button:responsive.recommend.buttonr(),image:responsive.recommend.image(1,arr[idx].image),
        ele:responsive.recommend.Element(1)})
    }
    render(){
        return(
            <div style={this.state.main}>
                  <div style={this.state.ele} onClick={()=>{
                        window.scrollTo(0,0)
                        ReactDOM.render(<Questions logout={this.props.logout}obj={arr[this.state.index]}/>,document.getElementById('root'));
                    
                  }}>
                <div style={this.state.image}>
                </div>
                   </div>
                   <button style={this.state.button} onClick={this.handleclick}>
                   {'>'}
                   </button>
            </div>
        )
    }

}
class Element extends React.Component{
    constructor(props){
        super(props)
        let idx=getrand(-1);
        this.state={main:responsive.recommend.Element(1),image:responsive.recommend.image(1,arr[idx].image),index:idx,button:responsive.recommend.buttonr()}
        this.handleclick=this.handleclick.bind(this)
    }
    handleclick(){
       let idx=getrand(this.state.index)
       this.setState({main:responsive.recommend.Element(1),image:responsive.recommend.image(1,arr[idx].image),index:idx,button:responsive.recommend.buttonr()}).then(()=>{
        this.forceUpdate();
       })
    }
    render(){
        return(
            <div style={this.state.main}>
                <div style={this.state.image}>
                </div>
            </div>
        )
    }
}