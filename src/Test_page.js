import React from 'react'
import ReactDOM from 'react-dom'
import { Footer } from './footer.js'
import { Heading } from './heading.js'
import { Mocktest_page } from './Mocktest.js'
import { responsive_mock } from './responsive.js'
import { Score_card } from './Score_card.js'
export class Test_launch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr:[],
            style:responsive_mock.test_page.instructions(),button:responsive_mock.test_page.button()
        }
        fetch('http://localhost:8000/mocktest/'+this.props.topic).then((res)=>res.json()).then((res)=>{
            this.setState((prev)=>{return {style:prev.style,button:prev.button,arr:res[this.props.index]}})
        })
    }
    render(){
        return <div >
            <Heading/>
            <div style={this.state.style}>
                <h1 style={{color:'white'}}> {"Instructions"}</h1>
            </div>
            <button style={this.state.button} onClick={()=>{ReactDOM.render(<Test_page arr={this.state.arr}/>,document.getElementById('root'))}}>
                Start
            </button>
        </div>
    }
}

export class Test_page extends React.Component{
    constructor(props){
        super(props)
        this.state={ans:[0,0,0,0,0,0,0,0,0,0],index:0,time:10,timer:responsive_mock.test_page.timer(),question:responsive_mock.test_page.question(),tab:responsive_mock.test_page.tab()
        ,question_bar:responsive_mock.test_page.question_bar(),option_bar:responsive_mock.test_page.options.main(),options:responsive_mock.test_page.options.option(),
    end:responsive_mock.test_page.end(),question_text:responsive_mock.test_page.question_text()}
        this.resize=this.resize.bind(this)
        this.handleend=this.handleend.bind(this)
        this.handleclick=this.handleclick.bind(this)
        this.starttimer=this.starttimer.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState((prev)=>{return {ans:prev.ans,index:prev.index,time:prev.time,timer:responsive_mock.test_page.timer(),question:responsive_mock.test_page.question(),tab:responsive_mock.test_page.tab()
            ,question_bar:responsive_mock.test_page.question_bar(),option_bar:responsive_mock.test_page.options.main(),options:responsive_mock.test_page.options.option(),
            end:responsive_mock.test_page.end(),question_text:responsive_mock.test_page.question_text()}})
    }
    componentDidMount(){
        this.starttimer()
    }
    handleclick(opt){
        let t=this.state.ans
        if(this.props.arr[this.state.index].answer==opt)
            t[this.state.index]=1;
        else
        t[this.state.index]=0;
        for(let i=1;i<=4;i++)
        {
        if(i==opt)
        document.getElementById(i).checked=true
        else
        document.getElementById(i).checked=false
        }
        this.setState((prev)=>{return {ans:t,index:prev.index,time:prev.time,timer:prev.timer,question:prev.question,tab:prev.tab,question_bar:prev.question_bar,
            option_bar:prev.option_bar,options:prev.options,question_text:prev.question_text}});
      }
    starttimer(){
        if(this.state.time==0){
            for(let i=1;i<=4;i++)
            document.getElementById(i).checked=false
            if(this.state.index==this.props.arr.length-1){this.handleend();return;}
            this.setState((prev)=>{return {ans:prev.ans,index:prev.index+1,time:10,timer:prev.timer,question:prev.question,tab:prev.tab,question_bar:prev.question_bar,
            option_bar:prev.option_bar,options:prev.options,question_text:prev.question_text}},this.starttimer);
            return;
        }
        setTimeout(()=>
        {
            this.setState((prev)=>{return {ans:prev.ans,index:prev.index,time:prev.time-1,timer:prev.timer,question:prev.question,tab:prev.tab,question_bar:prev.question_bar,
                option_bar:prev.option_bar,options:prev.options,question_text:prev.question_text}},this.starttimer)
        },1000);
    }
    handleend(){
        ReactDOM.render(<Score_card ans={this.state.ans}/>,document.getElementById('root'))
    }
    render(){
        return<div>
            <div style={this.state.question_bar}>
            {this.props.arr.map((ele,ind)=><div style={this.state.tab}>{ind+1}</div>)}
            </div>
            <div style={this.state.timer}>{'00:'+this.state.time}</div>
            <button style={this.state.end} onClick={this.handleend}>End Test</button>
            <div style={{position:'relative',display:'flex'}}>
            <div style={this.state.question}><textarea style={this.state.question_text} value={this.props.arr[this.state.index].question+this.props.arr[this.state.index].snippet}></textarea></div>
            <div style={this.state.option_bar}>
                <div style={this.state.options} onClick={()=>{this.handleclick(1)}}>
                    <input type="checkbox" id='1'></input>
                    <label htmlFor='1' >{this.props.arr[this.state.index].option_01}</label>
                </div>
                <hr style={{border:'1px solid grey'}}/>
                <div style={this.state.options} onClick={()=>{this.handleclick(2)}}>
                    <input type="checkbox" id='2'></input>
                    <label htmlFor='2' >{this.props.arr[this.state.index].option_02}</label>
                </div>
                <hr style={{border:'1px solid grey'}}/>
                <div style={this.state.options} onClick={()=>this.handleclick(3)}>
                    <input type="checkbox" id='3'></input>
                    <label htmlFor='3' >{this.props.arr[this.state.index].option_03}</label>
                </div>
                <hr style={{border:'1px solid grey'}}/>
                <div style={this.state.options} onClick={()=>this.handleclick(4)}>
                    <input type="checkbox" id='4'></input>
                    <label htmlFor='4' >{this.props.arr[this.state.index].option_04}</label>
                </div>
                <hr style={{border:'1px solid grey'}}/>
            </div>
            </div>
        </div>
    }
}