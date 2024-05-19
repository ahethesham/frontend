import React from "react";
import { responsive } from "./responsive.js";
import {Heading} from './heading.js'
import { Footer } from "./footer.js";
import { addresses } from "./index.js";
import { Explore_header } from "./Explore.js";
let address=[];
let ans=[],Q
export class Questions extends React.Component{
    constructor(props){
        super(props)
        this.state={footer:responsive.Q_bar.footer(),index:0,sidebar_style:responsive.sidebar_02.main(),image:responsive.questions.image(this.props.obj.image),heading:responsive.questions.heading(),img:this.props.obj.image}
        this.handleclick=this.handleclick.bind(this)
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    componentDidMount(){
        addresses.Questions=this
    }
    componentDidUpdate(){
        addresses.Questions=this
        if(this.state.img!=this.props.obj.image)this.handleclick(0)
    }
    resize(){
        this.setState((prev)=>{return {footer:prev.footer,index:prev.index,sidebar_style:responsive.sidebar_02.main(),image:responsive.questions.image(this.props.obj.image),
            heading:responsive.questions.heading(),img:this.props.obj.image}})
    }
    handleclick(ind){
        this.setState({footer:responsive.Q_bar.footer(),index:ind,sidebar_style:responsive.sidebar_02.main(),image:responsive.questions.image(this.props.obj.image),
            heading:responsive.questions.heading(),img:this.props.obj.image},()=>{
                for(let i=0;i<address.length;i++)address[i].resize()
                Q.fetch()
            })
    }
    render(){
        return(
            <div>
            <Heading logout={this.props.logout}/>
           
            
            
            <div style={this.state.sidebar_style}>
                {
            this.props.obj.subtopics.map((ele)=>{
            if(this.state.index!=ele[2])
           return <Subtopic func={this.handleclick} img={ele[1]} topic={ele[0]} index={ele[2]} flag={false}/>
            else
           return <Subtopic func={this.handleclick} img={ele[1]} topic={ele[0]} index={ele[2]} flag={true}/>
            })
                }
            </div>  
            <Q_bar link={'http://localhost:8000'+this.props.obj.subtopics[this.state.index][3]}/>
            <div style={this.state.footer}>
           <Explore_header/>
           <Footer/>
           </div>
         </div>
        )
    }

}
class Subtopic extends React.Component{
    constructor(props){
        super(props)
        if(address.length<=this.props.index)address.push(this)
        else
        address[this.props.index]=this
        this.state={link:this.props.link,flag:this.props.flag,style:responsive.sidebar_02.Element(this.props.flag),text:responsive.sidebar_02.text(),image:responsive.sidebar_02.image(this.props.img)}
        this.resize=this.resize.bind(this);
        window.addEventListener('resize',this.resize)
    }
    componentDidMount(){
        addresses[`Subtopic${this.props.index}`]=this
    }
    componentDidUpdate(){
        addresses[`Subtopic${this.props.index}`]=this
    }
    resize(){
        this.setState({link:this.props.link,style:responsive.sidebar_02.Element(this.props.flag),text:responsive.sidebar_02.text(),image:responsive.sidebar_02.image(this.props.img)});
    }
    render(){
        return(
            <button style={this.state.style} onClick={async ()=>{await this.props.func(this.props.index);}}>
            <div style={this.state.image}>
            </div>
              <text style={this.state.text}>
                            {this.props.topic}
              </text>
            </button>
        )
    }
}
class Q_bar extends React.Component{
    constructor(props){
        super(props)
        Q=this
        //alert(this.props.link)
        this.state={link:this.props.link,snippet:responsive.Q_bar.snippet(),pre:1,slider:responsive.Q_bar.Main_slider(),style:responsive.Q_bar.next_button(),
            question_bar:responsive.Q_bar.question_bar(),arr:{}};
        fetch(this.state.link).then((res)=>res.json()).then((res)=>this.setState((prev)=>{return {link:this.state.link,snippet:prev.snippet,pre:prev.pre,slider:prev.slider,style:prev.style,question_bar:prev.question_bar,arr:res}}));
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
        this.updatepre=this.updatepre.bind(this)
        this.fetch=this.fetch.bind(this)
    }
    fetch(){
        fetch(this.props.link).then((res)=>res.json()).then((res)=>this.setState((prev)=>{return {link:this.state.link,snippet:prev.snippet,pre:1,slider:prev.slider,style:prev.style,question_bar:prev.question_bar,arr:res}}));
        this.resize=this.resize.bind(this)
    }
    componentDidMount(){
        for(let i=0;i<this.state.arr.length;i++)ans.push(-1);
        Q=this;
        addresses.Q_bar=this
    }
    componentDidUpdate(){
        Q=this
        addresses.Q_bar=this
    }
    resize(){
        this.setState((prev)=>{return {link:this.props.link,snippet:responsive.Q_bar.snippet(),pre:prev.pre,slider:responsive.Q_bar.Main_slider(),style:responsive.Q_bar.next_button(),question_bar:responsive.Q_bar.question_bar(),arr:prev.arr}})
    }
    updatepre(){
        if(this.state.pre>=this.state.arr[0].text.length)return;
        this.setState((prev)=>{return {link:this.props.link,snippet:prev.snippet,pre:prev.pre+1,slider:prev.slider,style:prev.style,question_bar:prev.question_bar,arr:prev.arr}})
    }
    render(){
        return (
        <div style={this.state.question_bar}>
            <div style={this.state.slider}>
                <button style={this.state.style} onClick={()=>{
                    if(this.state.pre==1)return;
                        this.setState((prev)=>{return {snippet:prev.snippet,pre:prev.pre-1,slider:prev.slider,style:prev.style,question_bar:prev.question_bar,arr:prev.arr}})
                }}>
                    {'<'}
                </button>
                <Gap/>
                <Slider index={this.state.pre-1} flag-={false}/>
                <Slider index={this.state.pre} flag={true}/>
                <Slider index={this.state.pre+1} flag={false}/>
                <Gap/>
                <button style={this.state.style} onClick={this.updatepre}>
                    {'>'}
                </button>
            </div>
            {
                this.state.arr.length>0 && 
                    <div>
                    <br/>
                    <textarea style={this.state.snippet} value={this.state.arr[0].text[this.state.pre-1]}/>
                     <br/>

                </div>
            }
        </div>
        
        )
    }

}
class Slider extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive.Q_bar.slider(this.props.flag)}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive.Q_bar.slider(this.props.flag)})
    }
    render(){
        return(
            <button style={this.state.style}>{this.props.index}</button>
        )
    }
}
class Gap extends React.Component{
    constructor(props){
        super(props)
        this.state={style:responsive.Q_bar.gap()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    resize(){
        this.setState({style:responsive.Q_bar.gap()});
    }
    render(){
        return(
            <div style={this.state.style}>
                ....
            </div>
        )
    }
}
class Options extends React.Component{
    constructor(props){
        super(props)
        this.state={id:ans[this.props.q_id],checkbox:responsive.Q_bar.checkbox(),style:responsive.Q_bar.options()}
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
        this.handleclick=this.handleclick.bind(this)
    }
    componentDidUpdate(prevProps){
        if(this.props!=prevProps)
        {
            this.setState((prev)=>{return {id:ans[this.props.q_id],checkbox:prev.checkbox,style:prev.style}})

        }
        for(let i=0;i<4;i++)
        {
        if(this.state.id==i)
        document.getElementById(this.state.id).checked=true
        else
        document.getElementById(i).checked=false
        }
    }
    resize(){
        this.setState((prev)=>{return {id:prev.id,checkbox:responsive.Q_bar.checkbox(),style:responsive.Q_bar.options()}})
    }
    handleclick(id){
        ans[this.props.q_id]=id;
        this.setState((prev)=>{return {id:id,checkbox:prev.checkbox,style:prev.style}})
    }
    render(){
        return(
            <div>
                {this.props.option.map((opt,ind)=>{
                   return <div style={this.state.style} onClick={()=>{this.handleclick(ind)}} id='checkboxes'>
                    <input style={this.state.checkbox} type='checkbox' id={ind}></input>
                    <label style={{fontSize:'inherit'}}htmlFor={ind}>{opt}</label>
                    </div>
                })
                }
            </div>
         
        )
    }
}

/*<div style={this.state.image}>
</div>
<div style={this.state.heading}>
    {this.props.obj.h1}
</div>*/