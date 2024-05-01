import React from 'react'
import ReactDOM from 'react-dom'
import {Heading} from './heading.js'
import {Cpp_header} from './cpp.js'
import Add from './input.js'
import {Dsa_header} from './dsa.js'
import {Side_bar} from './side_bar.js'
import {Algorithms} from './algorithms.js'
import { Os_header } from './OS.js'
import { DBMS_header } from './DBMS.js'
import Cppimg from './cpp.png'
import javaimg from './java.png'
import dsimg from './ds.png'
import algoimg from './algorithms.png'
import Osimg from './Os.png'
import Dbmsimg from './Dbms.png'
import { Footer } from './footer.js'
import js_img from './js.png'
import { Js_header } from './JS.js'
import {React_header} from './react.js'
import Reactimg from './react.png'
import cnimg from './cn.png'
import htmlimg from './html.png'
import {Scroll_header} from './Scroll_bar.js'
import { Java_header } from './java.js'
import { Cn_header } from './cn.js'
import { Html_header } from './html.js'
import { Mocktest_header } from './Mocktest.js'
import './index.css'
import { Authentication } from './Auth.js'
import { Apt_mockheader, Numerical_mockheader, Reasoning_mockheader,Cpp_mockheader } from './Aptitude.js'
import { address } from './Mocktest.js'
export let addresses={

}
export let current_user={
    username:"ahethesham"
}
export class Main extends React.Component{
    constructor(props){
        super(props)
         this.state={mode:'light',user:{username:current_user.username},logged_in:this.props.logged_in}
         window.addEventListener('scroll',()=>{if(!this.state.logged_in)window.scrollTo(0,0)});
         this.logout=this.logout.bind(this)
//         addresses.Main=this

    }
   
    logout(){
        window.scrollTo(0,0);
        this.setState((prev)=>{return {user:prev.user,logged_in:false}})
    }
   
   
    render(){
        return(
            <>
            {!this.state.logged_in &&
                 <Authentication func={(user)=>{current_user=user;this.setState({user:user,logged_in:true},()=>{
                    let arr=Object.values(address)
                    for(let i=0;i<arr.length;i++)
                    arr[i].update()
                 })}}/>
             }
         <Heading changeMode={this.changeMode} logout={this.logout}/>
         <Scroll_header  logout={this.logout} />
         <Mocktest_header logout={this.logout}/>
      
         <Apt_mockheader logout={this.logout} user={this.state.user}/>
         <Reasoning_mockheader logout={this.logout} user={this.state.user}/>
         <Numerical_mockheader logout={this.logout} user={this.state.user}/>
         <Cpp_mockheader logout={this.logout} user={this.state.user}/>
        <Side_bar mode={this.state.mode}logout={this.logout} arr={[['Data\nstructures',dsimg],['Cpp',Cppimg],['Java',javaimg],['DBMS',Dbmsimg],['Algorithms',algoimg],['OS',Osimg],['JavaScript',js_img],['React',Reactimg],['Networking',cnimg],['HTML',htmlimg]]}/>
        <div style={{height:'30px'}}></div>

        <Dsa_header logout={this.logout}/>
        <div style={{height:'40px'}}></div>
        <Algorithms logout={this.logout}/>
        <div style={{height:'40px'}}></div>
        <Cpp_header logout={this.logout}/>
        <Os_header logout={this.logout}/>
        <DBMS_header logout={this.logout}/>
        <Js_header logout={this.logout}/>
        <React_header logout={this.logout}/>
        <Java_header logout={this.logout}/>
        <Cn_header logout={this.logout}/>
        <Html_header logout={this.logout}/>
        <Footer logout={this.logout}/>
       
        </>       
         )
    }
}


ReactDOM.render(<Main logged_in={false}/>,document.getElementById('root'))

