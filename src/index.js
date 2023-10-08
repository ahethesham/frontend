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
import img from './background.png'
import { Footer } from './footer.js'
import js_img from './js.png'
import { Js_header } from './JS.js'
import {React_header} from './react.js'
import Reactimg from './react.png'
import cnimg from './cn.png'
import htmlimg from './html.png'
import {Scroll_header} from './Scroll_bar.js'
import {Explore} from './Explore2.js'
import { Java_header } from './java.js'
import { Cn_header } from './cn.js'
import { Html_header } from './html.js'
import { Mocktest_header } from './Mocktest.js'
import './index.css'
import { Test_page } from './Test_page.js'
import { Apt_mockheader, Numerical_mockheader, Reasoning_mockheader } from './Aptitude.js'
export class Main extends React.Component{
    constructor(props){
        super(props)
       // this.func=this.func.bind(this)
         this.state={cpp_questions:[],main:true}
    }
   
    render(){
        return(
            <>
         <Heading />
         <Scroll_header/>
         <Mocktest_header/>
         <Apt_mockheader/>
         <Reasoning_mockheader/>
         <Numerical_mockheader/>
        <Side_bar arr={[['Data\nstructures',dsimg],['Cpp',Cppimg],['Java',javaimg],['DBMS',Dbmsimg],['Algorithms',algoimg],['OS',Osimg],['JavaScript',js_img],['React',Reactimg],['Networking',cnimg],['HTML',htmlimg]]}/>
        <div style={{height:'30px'}}></div>

        <Dsa_header/>
        <div style={{height:'40px'}}></div>
        <Algorithms/>
        <div style={{height:'40px'}}></div>
        <Cpp_header/>
        <Os_header/>
        <DBMS_header/>
        <Js_header/>
        <React_header/>
        <Java_header/>
        <Cn_header/>
        <Html_header/>
        <Footer/>
        </>       
         )
    }
}
ReactDOM.render(<Main/>,document.getElementById('root'));