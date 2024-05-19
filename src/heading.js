import React from "react";
import ReactDOM from 'react-dom'
import {mode, responsive} from './responsive.js'
import {current_user, Main} from './index.js'
import accountimg from './account_02.png'
import { Track_progress } from "./Track_progress.js";
import { addresses } from "./index.js";
import lightimg from './lightmode.png'
import { mode2 } from "./responsive_02.js";
import { Hosting } from "./Hosting/index.js";
import image from "./Roadmap.png"
function updateresize(){
    mode()
    mode2()
    let arr=Object.keys(addresses)
    for(let i=0;i<arr.length;i++){
       // alert(arr[i])
        addresses[arr[i]].resize()
    }
}
export class Heading extends React.Component{
    constructor(){
        super()
        this.state={light_header_button:responsive.heading.light_header_button(lightimg),flag:false,style:responsive.heading.main(),h1:responsive.heading.exit(),account:responsive.heading.account(accountimg),box:responsive.heading.header_box(),
        header_button:responsive.heading.header_button()}
        this.resize=this.resize.bind(this);
        window.addEventListener('resize',()=>this.resize(true));
    }
    componentDidMount(){
        addresses.Heading=this
    }
    componentDidUpdate(){
        addresses.Heading=this
    }
    resize(){
        this.setState((prev)=>{return {flag:prev.flag,box:responsive.heading.header_box(),header_button:responsive.heading.header_button(),style:responsive.heading.main(),h1:responsive.heading.exit(),account:responsive.heading.account(accountimg)}});
    }
    roadmap(){
        ReactDOM.render(<RoadMap/>,document.getElementById('root'));
    }
    render(){
        return(
            <div style={this.state.style}>
            <button style={this.state.h1}onClick={()=>{ReactDOM.render(<Main logged_in={true}/>,document.getElementById('root'))}}>
                Binary.c
            </button>
            <div style={this.state.box}>
                <button style={this.state.light_header_button} onClick={updateresize} ></button>
                <button style={this.state.header_button}onClick={()=>{ReactDOM.render(<Hosting username={current_user.username}/>,document.getElementById('root'))}} >Host</button>
                <button style={this.state.header_button} onClick={()=>{ReactDOM.render(<Track_progress logout={this.props.logout}/>,document.getElementById('root'))}}>Progress</button>
                <button style={this.state.header_button} onClick={async ()=>{await this.props.logout();       ReactDOM.render(<Main logged_in={false}/>,document.getElementById('root'))
}}> Sign Out</button>
                <button style={this.state.header_button} onClick={this.roadmap}>Road Map</button>
            </div>
            <button style={this.state.account} onClick={()=>{
                if(this.state.flag)
                this.setState((prev)=>{return{flag:false,style:prev.style,h1:prev.h1,account:prev.account}})
                else
                this.setState((prev)=>{return{flag:true,style:prev.style,h1:prev.h1,account:prev.account}})

            }}>
                {this.state.flag &&
                <Account_info logout={this.props.logout}/>
                }
            </button>
            <hr/>
            </div>
        )
    }
}
class Account_info extends React.Component{
    constructor(){
        super()
        this.state={style:responsive.heading.account_info(),sub:responsive.heading.account_sub()}
    }
    render(){
        return<div style={this.state.style}>
            <button style={this.state.sub} onClick={()=>{ReactDOM.render(<Track_progress/>,document.getElementById('root'))}}> Track Progress</button>
            <button style={this.state.sub}>Account</button>


            <button style={this.state.sub}>Settings</button>


            <button style={this.state.sub}>About</button>

            <button style={this.state.sub} onClick={async ()=>{await this.props.logout();ReactDOM.render(<Main logged_in={false}/>,document.getElementById('root'))}}>Sign Out</button>

        </div>
    }
}


class RoadMap extends React.Component{
    constructor(){
        super()
        this.state={img:responsive.RoadMap.img()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({img:responsive.RoadMap.img()})
    }
    render(){
        return(
        <div>
            <Heading/>
            <div style={this.state.img}>
            <img src={image}/>
            </div>
        </div>
        )
    }
}