//import e from "express";
import React from "react";
import ReactDOM from "react-dom";
import { responsive_auth} from "./responsive.js";
function encrypt(str){
    return str;
}
export class Authentication extends React.Component{
    constructor(props){
        super(props)
        this.state={details:{username:'',password:''},create:false,style:responsive_auth.Main.cover(),button:responsive_auth.Main.button(0),heading:responsive_auth.Main.heading(0),signin:responsive_auth.Main.signin(0),
            header:responsive_auth.Main.header(0),username:responsive_auth.Main.username(0),label:responsive_auth.Main.usernamelabel(0)}
            this.handleclick=this.handleclick.bind(this)
            this.createaccount=this.createaccount.bind(this)
            this.handlelogin=this.handlelogin.bind(this)
            this.failed=this.failed.bind(this)
    }
    handlelogin(e){
        e.preventDefault()
        document.getElementById('password').style.border='1px solid black';
        let new_user={username:'',password:''}
      new_user.username=document.getElementById('username').value
      new_user.password=document.getElementById('password').value
      new_user.password=encrypt(new_user.password);
      fetch('http://localhost:8000/auth/login',{
        method:'POST',
        body:JSON.stringify(new_user),
        headers:{
            'Content-type':'application/json'
        }
      }).then((res)=>res=res.json().then((res)=>{
        if(res.found)this.props.func(new_user);
        else
        this.failed()
      }))
    }
    failed(){
        document.getElementById('password').style.border='2px solid red';
        document.getElementById('password').value=''
        return;
    }
    handleclick(e){
        e.preventDefault()
        this.setState((prev)=>{return {style:prev.style,create:true,button:responsive_auth.Main.button(1),heading:responsive_auth.Main.heading(1),
    signin:responsive_auth.Main.signin(1),header:responsive_auth.Main.header(1),username:responsive_auth.Main.username(1),label:responsive_auth.Main.usernamelabel(1)}})
    }
    createaccount(e){
        e.preventDefault()
      let new_user={email:'',username:'',password:''}
      new_user.email=document.getElementById('Email').value
      new_user.username=document.getElementById('username').value
      new_user.password=document.getElementById('password').value
      if(!verify(new_user))return;
      new_user.password=encrypt(new_user.password);
        fetch('http://localhost:8000/auth/new_user',{
            method:'POST',
            body:JSON.stringify(new_user),
             headers:{
                'Content-type':'application/json'
             }
        }).then(this.props.func(new_user))
        //this.props.login(this.state.details)
    }
    render(){

        return <div style={this.state.style}>
            {
                !this.state.create&&
            <form style={this.state.header}>
                <h1 style={this.state.heading}>Login To Continue</h1>
                <label  style={this.state.label}htmlFor="username">Username</label>
                <br/>
                <input style={this.state.username}id='username' autoFocus={true} />
                <br/><br/>
                <label style={this.state.label}htmlFor="password">Password</label>
                <br/>
                <input type="password" style={this.state.username} id="password"/>
                <button style={this.state.signin} onClick={(e)=>this.handlelogin(e)}>Sign in</button>
                <button style={this.state.button} onClick={(e)=>{this.handleclick(e)}}>
                    Create Account
                </button>
            </form>
           }
           {
            this.state.create&&
            <form style={this.state.header}>
            <h1 style={this.state.heading}>Login To Continue</h1>
            <label  style={this.state.label}htmlFor="Email">Email</label>
            <br/>
            <input style={this.state.username}id='Email' autoFocus={true}/>
            <br/><br/>
            <label style={this.state.label}htmlFor="username">Create Username</label>
            <br/>
            <input style={this.state.username} id="username"/>
            <br/><br/>
            <label style={this.state.label}htmlFor="password">Create Password</label>
            <br/>
            <input type="password" style={this.state.username} id="password"/>
            <button style={this.state.button} onClick={(e)=>{this.createaccount(e)}}>
                Create Account
            </button>
        </form>
           }
        </div>
    }
}
function verify(user){
    if(user.email.length<=10){alert('invalid email');return false;}
    if(user.password.length<=0){alert('invalid password');return false;}
    if(user.username.length<=0){alert('invalid username');return false;}
    return true;
}