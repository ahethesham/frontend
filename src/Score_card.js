import React from "react";
import ReactDOM from "react-dom";
import { Heading } from "./heading.js";
import { responsive_mock } from "./responsive.js";
import { addresses, current_user } from "./index.js";
let count=0;

function getscore(ans)
{
    count=0;
    for(let i=0;i<ans.length;i++){count+=ans[i];}
    let score=`Total\t\t\t\t${count}/10\npercentage\t\t\t${(count/10)*100}%`
    return score
}
export class Score_card extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive_mock.score.header(),score:getscore(this.props.ans),text:responsive_mock.score.text()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)

    }
    componentDidMount(){
        addresses.Score_card=this
        let info={
            username:current_user.username,
            topic:this.props.topic,
            index:this.props.index,
            score:count
        }
        fetch('http://localhost:8000/mocktest/updatescore',{
            method:"POST",
            body:JSON.stringify(info),
            headers:{
                'Content-type':'application/json'
            }
        })
    }
    componentDidUpdate(){
        addresses.Score_card=this
    }
    resize(){
        this.setState((prev)=>{return {style:responsive_mock.score.header(),score:prev.score,text:responsive_mock.score.text()}})
    }
    render(){
        return<div>
            <Heading logout={this.props.logout}/>
            <div style={this.state.style}>
                <h1 style={{color:'grey'}}>Score Card</h1>
                <textarea style={this.state.text} value={this.state.score}></textarea>
            </div>
        </div>
    }
}