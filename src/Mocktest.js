import React from "react";
import ReactDOM from "react-dom";
import { Heading } from "./heading.js";
import { responsive_mock } from "./responsive.js";
import { Cpp_mockheader } from "./cpp.js";
import { Java_mockheader } from "./java.js";
import { Footer } from "./footer.js";
import { Ds_mockheader } from "./dsa.js";
import { Algo_mockheader } from "./algorithms.js";
import { Dbms_mockheader } from "./DBMS.js";
import { Cn_mockheader } from "./cn.js";
import { Html_mockheader } from "./html.js";
import {  Js_mockheader } from "./JS.js";
import { Mocktest_list } from "./mocktest_list.js";
import { Table_page } from "./Table_page.js";
import { Apt_mockheader ,Reasoning_mockheader} from "./Aptitude.js";
let text='Total\t\t\t\t\t\t:00\n\nattempted\t\t\t\t\t:00\n\nProgress\t\t\t\t\t:00'
export class Mocktest_header extends React.Component{
    constructor(){
        super()
        this.state={style:responsive_mock.header.Main(),heading:responsive_mock.header.heading(),text:responsive_mock.header.text(),button:responsive_mock.header.button()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize()
    {
        this.setState({style:responsive_mock.header.Main(),heading:responsive_mock.header.heading(),text:responsive_mock.header.text(),button:responsive_mock.header.button()})
    }
    render(){
        return <div style={this.state.style}>
            <h1 style={this.state.heading}>MOCK TEST</h1>
            <hr style={{border:'0.5px solid grey'}}/>
            <textarea value={text}style={this.state.text}>
            </textarea>
            <hr style={{border:'0.5px solid grey'}}/>
            <button style={this.state.button} onClick={()=>ReactDOM.render(<Mocktest_page/>,document.getElementById('root'))}>
                {'Take Mocktest->'}
            </button>
        </div>
    }
}
export class Mocktest_page extends React.Component{
    constructor(){
        super()
        this.state={style:responsive_mock.mockblock.Main(),footer:responsive_mock.mockblock.footer()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive_mock.mockblock.Main(),footer:responsive_mock.mockblock.footer()})
    }
    render(){
        return<>
            <Heading/>
        <div style={this.state.style}>
           <Cpp_mockheader/>
           <Java_mockheader/>
           <Algo_mockheader/>
           <Ds_mockheader/>
           <Dbms_mockheader/>
           <Cn_mockheader/>
           </div>
           <Mocktest_list topic={"all"}/>
           <div style={this.state.footer}>
           <Footer/>
           </div>

        </>
    }
}
let t='Total\t\t\t\t\t:00\n\nattempted\t\t\t\t:00\n\nProgress\t\t\t\t:00'
export class Mocktest_block extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive_mock.mockblock.header(),image:responsive_mock.mockblock.image(this.props.img),text:responsive_mock.mockblock.text()}
        this.resize=this.resize.bind(this)
        this.handleclick=this.handleclick.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive_mock.mockblock.header(),image:responsive_mock.mockblock.image(this.props.img),text:responsive_mock.mockblock.text()})
    }
    handleclick(){
       ReactDOM.render(<Table_page topic={this.props.topic}/>,document.getElementById('root'))
    }
    render(){
        return<div style={this.state.style} onClick={this.handleclick}>
            <div style={this.state.image}></div>
            <hr style={{border:'0.5px solid grey'}}/>
            <textarea style={this.state.text} value={t}>
            </textarea>
        </div>
    }
}