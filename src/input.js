import React from 'react'
import  ReactDOM  from 'react-dom'
let q={
    question:'',
    snippet:'',
    op1:'',
    op2:'',
    op3:'',
    op4:'',
    ans:'',
    explain:''
}
function style(){
    let width=window.innerWidth/100,height=window.innerHeight/100
    let q={
        height:`${30*(height)}px`,
        width:`${50*(width)}px`,
        position:'relative',
        border:`5px solid black`,
        top:`${10*height}px`,
        left:`${20*width}px`,
        display:'block'
    }
    let snippet={
        height:`${30*(height)}px`,
        width:`${50*(width)}px`,
        position:'relative',
        border:`5px solid black`,
        top:`${10*height}px`,
        left:`${20*width}px`,
        display:'block'
    }
    let op1={
        height:`${10*height}px`,
        width:`${50*width}px`,
        position:'relative',
        border:`5px solid black`,
        top:`${10*height}px`,
        left:`${20*width}px`,
        display:'block'
    }
    let op2={
        height:`${10*height}px`,
        width:`${50*width}px`,
        position:'relative',
        border:`5px solid black`,
        top:`${10*height}px`,
        left:`${20*width}px`,
        display:'block'
    }
    let op3={
        height:`${10*height}px`,
        width:`${50*width}px`,
        position:'relative',
        border:`5px solid black`,
        top:`${10*height}px`,
        left:`${20*width}px`,
        display:'block'
    }
    let op4={
        height:`${10*height}px`,
        width:`${50*width}px`,
        position:'relative',
        border:`5px solid black`,
        top:`${10*height}px`,
        left:`${20*width}px`,
        display:'block'
    }
    let ans={
        height:`${10*height}px`,
        width:`${50*width}px`,
        position:'relative',
        border:`5px solid black`,
        top:`${10*height}px`,
        left:`${20*width}px`,
        display:'block'
    }
    let button={
        height:`${10*height}px`,
        width:`${10*width}px`,
        position:'relative',
        border:'5px solid black',
        display:'block',
        top:`${10*height}px`,
        left:`${40*width}px`
        }
    return [q,op1,op2,op3,op4,button,ans,snippet]
}
export default class Add extends React.Component{
    constructor(){
        super()
        let arr=style()
        this.state={question:arr[0],op1:arr[1],op2:arr[2],op3:arr[3],op4:arr[4],add:arr[5],ans:arr[6],snippet:arr[7]}
        this.add=this.add.bind(this)
    }
    add(){
        const data={
            question:q.question,
            snippet:q.snippet,
            option_01:q.op1,
            option_02:q.op2,
            option_03:q.op3,
            option_04:q.op4,
            answer:q.ans,
            explaination:q.explain
        }
        fetch('http://localhost:8000/ds/array',{
            method:'POST',
            headers:{
            'Content-type':'application/json',
            },
            body:JSON.stringify(data)
        })
    }
    render(){
        return(
            <div style={{position:'relative',display:'block'}}> 
                <textarea type='text'placeholder='enter here' style={this.state.question} onKeyUp={(e)=>q.question=e.target.value}>
                </textarea>
                <textarea type='text'placeholder='enter snippet' style={this.state.snippet} onKeyUp={(e)=>q.snippet=e.target.value}>
                </textarea>
                <textarea type='text' placeholder='option 1' style={this.state.op1} onKeyUp={(e)=>q.op1=e.target.value}></textarea>
                <textarea type='text' placeholder='option 2' style={this.state.op2} onKeyUp={(e)=>q.op2=e.target.value}></textarea>
                <textarea type='text' placeholder='option 3' style={this.state.op3} onKeyUp={(e)=>q.op3=e.target.value}></textarea>
                <textarea type='text' placeholder='option 4' style={this.state.op4} onKeyUp={(e)=>q.op4=e.target.value}></textarea>
                <textarea type='text' placeholder='answer' style={this.state.ans} onKeyUp={(e)=>q.ans=e.target.value}></textarea>
                <button style={this.state.add}onClick={this.add}>ADD</button>
            </div>
        )
    }
}
//ReactDOM.render(<Add/>,document.getElementById('root'));