import React from "react";
import ReactDOM from "react-dom";
import { Heading } from "../heading.js";
//import { Heading } from "../heading.js";
import { responsive } from "./responsive.js";
function checkvalidity(username)
{
    let flag=false;
    let code=document.getElementById('passcode').value
    let req={
        username:username,
        passcode:code
    }
    fetch('http://localhost:8000/hosting/isValid',{
        method:'POST',
        body:JSON.stringify(req),
        headers:{
            'Content-type':'application/json'
        }
    }).then((res)=>res.json()).then((res)=>{
        alert(res.valid)
       // flag=res.valid
    })
}
export class Hosting extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive.from(),input:responsive.input(),font:responsive.fontStyle()}
    }
    render(){
        return (<div>
            <Heading/>
            <div style={this.state.style}>
                <div style={this.state.font}>From :</div><br/><br/><br/>
            <input type="date" style={this.state.input}/>
            <input  type="time" style={this.state.input}/>
            </div>
            <br/><br/><br/>
            <div style={this.state.style}>
            <div style={this.state.font}>To :</div><br/><br/>
                <input type="date" style={this.state.input}/>
                <input type="time" style={this.state.input}/>
           </div>
        </div>
        )
    }
}