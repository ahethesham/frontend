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
import { Apt_mockheader ,Apt_mockheader_02,Reasoning_mockheader, Reasoning_mockheader_02} from "./Aptitude.js";
import { addresses, current_user } from "./index.js";
export let address={};
export class Mocktest_header extends React.Component{
    constructor(){
        super()
        this.state={total:0,progress:0,attempted:0,style:responsive_mock.header.Main(),heading:responsive_mock.header.heading(),text:responsive_mock.header.text(),button:responsive_mock.header.button()}
        this.resize=this.resize.bind(this)
        fetch(`http://localhost:8000/mocktest/getstatus/all`,{
            method:'POST',
            body:JSON.stringify(current_user),
            headers:{
                'Content-type':'application/json'
            }
        }).then((res)=>res.json()).then((res)=>{
            this.setState((prev)=>{
                return{
                    total:res.total,progress:0,attempted:0,style:prev.style,heading:prev.heading,text:prev.text,button:prev.button
                }
            })
        })
        window.addEventListener('resize',this.resize)
        this.update=this.update.bind(this)
        address["all"]=this
    }
    componentDidMount(){
        address['all']=this
        addresses.Mocktest_header=this;
    }
    componentDidUpdate(){
        address["all"]=this
        addresses.Mocktest_header=this;

    }
   update(){
    fetch(`http://localhost:8000/mocktest/getstatus/all`,{
        method:'POST',
        body:JSON.stringify(current_user),
        headers:{
            'Content-type':'application/json'
        }
    }).then((res)=>res.json()).then((res)=>{
        this.setState((prev)=>{
            return{
                total:res.total,progress:res.progress,attempted:res.attempted,style:prev.style,heading:prev.heading,text:prev.text,button:prev.button
            }
        })
    })
   }
    resize()
    {
        this.setState({style:responsive_mock.header.Main(),heading:responsive_mock.header.heading(),text:responsive_mock.header.text(),button:responsive_mock.header.button()})

    }
    render(){
        return <div style={this.state.style}>
            <h1 style={this.state.heading}>MOCK TEST</h1>
            <hr style={{border:'0.5px solid grey'}}/>
            <textarea value={
             `Total\t\t\t\t\t:${this.state.total}\n\nattempted\t\t\t\t:${this.state.attempted}\n\nAccuracy\t\t\t\t:${this.state.progress}`
            }style={this.state.text}>
            </textarea>
            <hr style={{border:'0.5px solid grey'}}/>
            <button style={this.state.button} onClick={()=>ReactDOM.render(<Mocktest_page logout={this.props.logout}/>,document.getElementById('root'))}>
                {'Take Mocktest--->'}
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
            <Heading logout={this.props.logout}/>
        <div style={this.state.style}>
           <Cpp_mockheader  logout={this.props.logout}/>
           <Java_mockheader logout={this.props.logout}/>
           <Algo_mockheader logout={this.props.logout}/>
           <Ds_mockheader logout={this.props.logout}/>
           <Apt_mockheader_02 logout={this.props.logout}/>
           <Reasoning_mockheader_02 logout={this.props.logout}/>
           <Dbms_mockheader logout={this.props.logout}/>
           <Cn_mockheader logout={this.props.logout}/>
           </div>
           <Mocktest_list logut={this.props.logout} topic={"all"}/>
           <div style={this.state.footer}>
           <Footer logout={this.props.logout}/>
           </div>

        </>
    }
}
//let t='Total\t\t\t\t\t:00\n\nattempted\t\t\t\t:00\n\nProgress\t\t\t\t:00'
export class Mocktest_block extends React.Component{
    constructor(props){
        super(props)
        this.state={total:'00',attempted:'00',progress:'00',style:responsive_mock.mockblock.header(),image:responsive_mock.mockblock.image(this.props.img),text:responsive_mock.mockblock.text()}
        fetch(`http://localhost:8000/mocktest/getstatus/${this.props.topic}`,{
            method:'POST',
            body:JSON.stringify(current_user),
            headers:{
                'Content-type':'application/json'
            }
        }).then((res)=>res.json()).then((res)=>{
            this.setState((prev)=>{
                return {total:res.total,
                    attempted:res.attempted,
                    progress:`${res.progress}%`,
                    style:prev.style,
                    image:prev.image,
                    text:prev.text
            }})
        })
        this.resize=this.resize.bind(this)
        this.handleclick=this.handleclick.bind(this)
        window.addEventListener('resize',this.resize)
        this.update=this.update.bind(this)
        address[this.props.topic]=this;
    }
    componentDidMount(){
        address[this.props.topic]=this
        addresses[this.props.topic]=this
    }
    componentDidUpdate(){
        address[this.props.topic]=this

        addresses[this.props.topic]=this
    }
    update(){
        fetch(`http://localhost:8000/mocktest/getstatus/${this.props.topic}`,{
            method:'POST',
            body:JSON.stringify(current_user),
            headers:{
                'Content-type':'application/json'
            }
        }).then((res)=>res.json()).then((res)=>{
            this.setState((prev)=>{
                return{
                    total:res.total,progress:`${res.progress}%`,attempted:res.attempted,style:prev.style,heading:prev.heading,text:prev.text,button:prev.button
                }
            })
        })
    }
    resize(){
        //address=this
        this.setState({style:responsive_mock.mockblock.header(),image:responsive_mock.mockblock.image(this.props.img),text:responsive_mock.mockblock.text()})
    }
    handleclick(){
       ReactDOM.render(<Table_page logout={this.props.logout}topic={this.props.topic}/>,document.getElementById('root'))
    }
    render(){
        return<div style={this.state.style} onClick={this.handleclick}>
            <div style={this.state.image}></div>
            <hr style={{border:'0.5px solid grey'}}/>
            <textarea style={this.state.text} value={`Total\t\t\t\t:${this.state.total}\n\nattempted\t\t\t:${this.state.attempted}\n\nAccuracy\t\t\t:${this.state.progress}`}
            ></textarea>
        </div>
    }
}