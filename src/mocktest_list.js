import React from "react";
import ReactDOM from "react-dom";
import { addresses } from "./index.js";
import { responsive_mock } from "./responsive.js";
import { Test_launch } from "./Test_page.js";
//let s=1;
export class Mocktest_list extends React.Component{
    constructor(props){
        super(props)
        this.state={arr:[],style:responsive_mock.mocklist.main(10),
        header:responsive_mock.mocklist.header(),serial_no:responsive_mock.mocklist.serial_no(),title:responsive_mock.mocklist.title(),
        status:responsive_mock.mocklist.status(),difficulty:responsive_mock.mocklist.difficulty(),tag:responsive_mock.mocklist.tag(),
        button:responsive_mock.mocklist.button()}
        fetch("http://localhost:8000/mocktest/table/"+this.props.topic).then((res)=>res.json()).then((res)=>{this.setState((prev)=>{return {arr:res,style:prev.style,
        header:prev.header,serial_no:prev.serial_no,title:prev.title,
        status:prev.status,difficulty:prev.difficulty,tag:prev.tag,button:prev.button}})});
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
        
    }
    componentDidMount(){
        addresses.Mocktest_list=this
    }
    componentDidUpdate(){
        addresses.Mocktest_list=this
    }
    resize(){
        this.setState((prev)=>{return {arr:prev.arr,style:responsive_mock.mocklist.main(10),
            header:responsive_mock.mocklist.header(),serial_no:responsive_mock.mocklist.serial_no(),title:responsive_mock.mocklist.title(),
            status:responsive_mock.mocklist.status(),difficulty:responsive_mock.mocklist.difficulty(),tag:responsive_mock.mocklist.tag(),
            button:responsive_mock.mocklist.button()}})
    }
    render(){
        return<table style={this.state.style}>
                <tr style={this.state.header}>
                    <th style={this.state.serial_no}>S.No</th>
                    <th style={this.state.title}>Title</th>
                    <th style={this.state.tag}>Tags</th>
                    <th style={this.state.status}>Status</th>
                    <th style={this.state.difficulty}>Difficulty</th>
                    <th style={this.state.button}>Click Here</th>
                </tr>
                {this.state.arr.map((ele,ind)=><Tablerow logout={this.props.logout} topic={ele[0]} arr={ele}index={ele[1]}/>)}
            </table>
    }
}
class Tablerow extends React.Component{
    constructor(props){
        super(props)
       // fetch("http://localhost:8000/mocktest/"+this.props.topic),then((res)=>res.json()).then((res)=>{
        this.state={style:responsive_mock.mocklist_entry.header(),serial_no:responsive_mock.mocklist.serial_no(),title:responsive_mock.mocklist.title()
            ,status:responsive_mock.mocklist.status(),difficulty:responsive_mock.mocklist.difficulty(),tag:responsive_mock.mocklist.tag(),
        button:responsive_mock.mocklist.button()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive_mock.mocklist_entry.header(),serial_no:responsive_mock.mocklist.serial_no(),title:responsive_mock.mocklist.title()
            ,status:responsive_mock.mocklist.status(),difficulty:responsive_mock.mocklist.difficulty(),tag:responsive_mock.mocklist.tag(),
        button:responsive_mock.mocklist.button()})
    }
    componentDidMount(){
        addresses[`table_row${this.props.index}${this.props.arr[0]}`]=this
    }
    componentDidUpdate(){
        addresses[`table_row${this.props.index}${this.props.arr[0]}`]=this
    }
    render(){
        return<tr style={this.state.style}>
            <td style={this.state.serial_no}>{this.props.index+1}</td>
            <td style={this.state.title}>{"Mock_test_"+(this.props.index+1)}</td>
            <td style={this.state.tag}>{this.props.arr[0]}</td>
            <td style={this.state.status}>{"unattempted"}</td>
            <td style={this.state.difficulty}>{"moderate"}</td>
            <button style={this.state.button} onClick={()=>{ReactDOM.render(<Test_launch logout={this.props.logout}topic={this.props.topic} index={this.props.index}/>,document.getElementById('root'))}}>Click</button>
        </tr>
    }
}