import React from "react";
import ReactDOM from "react-dom";
import { Heading } from "./heading.js";
import { responsive_mock } from "./responsive.js";
function getscore(ans)
{
    let count=0;
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
    resize(){
        this.setState((prev)=>{return {style:responsive_mock.score.header(),score:prev.score,text:responsive_mock.score.text()}})
    }
    render(){
        return<div>
            <Heading/>
            <div style={this.state.style}>
                <h1 style={{color:'grey'}}>Score Card</h1>
                <textarea style={this.state.text} value={this.state.score}></textarea>
            </div>
        </div>
    }
}