import React from "react";
import  ReactDOM  from "react-dom";
import { responsive ,responsive_mock} from "./responsive.js";
import {S2} from './S2.js'
import { Side_bar } from "./side_bar.js";
import { Heading } from "./heading.js";
import img from './Dbms.png'
import { Questions } from "./Questions.js";
import { Mocktest_block } from "./Mocktest.js";
export  let dbmsobj={
    image:img,
    h1:'DBMS',
    subtopics:[['RDBMS',img,0,'/dbms/rdbms'],['Constraints',img,1,'/dbms/constraints'],['DDL',img,2,'/dbms/ddl'],['DML',img,3,'/dbms/DML'],
    ['TCL',img,4,'/dbms/tcl'],['Keys',img,5,'/dbms/keys']]
}
export class DBMS_header extends React.Component{
    constructor(){
        super()
        this.state=({style:responsive.DBMS()});
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
        this.handleclick=this.handleclick.bind(this)
    }
    resize(){
        this.setState({style:responsive.DBMS()})
    }
    handleclick(){
        window.scrollTo(0,0)

       
        ReactDOM.render(<Questions obj={dbmsobj}/>,document.getElementById('root'));
    }
    render(){
        return(
            <div style={this.state.style} onClick={this.handleclick}> 
                <S2 main={"DataBase Management"} topics={this.state.arr} img={img}/>
            </div>
        )
    }
}

export class Dbms_mockheader extends React.Component{
    constructor(){
        super()
        this.state={style:responsive_mock.mockblock.dbms()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive_mock.mockblock.dbms()})
    }
    render(){
        return <div style={this.state.style}>
            <Mocktest_block img={img} str={'dbms'} topic={"dbms"}/>
        </div>
    }
}