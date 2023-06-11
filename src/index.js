import React, { useState } from 'react'
import  ReactDOM  from 'react-dom'
import './index.css'
import image from './robot.png'
import leftarrow from './leftarrow.png'
import rightarrow from './right-arrow.png'
import downarrow from './down-arrow.png'
import uparrow from './up-arrow.png'
import resetbutton from './resetbutton.png'
let root=ReactDOM.createRoot(document.getElementById('root'));
let mat=[],logic=[];
let current,reset=0;
let instruction={
  up:"Robot moves up",
  down:"Robot moves down",
  left:"Robot moves left",
  right:"Robot moves right",
  done:"Robot reached the end"
}
for(let i=0;i<5;i++){
  let t=[];
  for(let j=0;j<5;j++)
  t.push(0);
  mat.push(t);
}
let t=document.createElement("img")
t.src=image
t.className="image"
for(let i=0;i<15;i++)logic.push(-1);
let r;
class Page extends React.Component{
  constructor(){
    super();
    this.state={flag:reset};
  }
  componentDidMount(){
    r=document.getElementById('root');
    r.childNodes[1].childNodes[0].childNodes[0].appendChild(t)
    r.childNodes[1].childNodes[4].childNodes[4].style.backgroundColor="red"
    reset=0;
  }
  componentDidUpdate(){
    if(this.state.flag!=reset ){
      this.setState({flag:reset})
      r=document.getElementById('root');
      r.childNodes[1].childNodes[0].childNodes[0].appendChild(t)
      r.childNodes[1].childNodes[4].childNodes[4].style.backgroundColor="red"
    }
  }
  render(){
    return(
      <><Learn/><Grid/><Instruction val={reset}/><Logicpanel/><Controls/><Play text="play"/><Reset/></>
    )
  }
}
function Grid(){
  return(
    <div className='Grid'>
    {mat.map((arr,index)=>{return <Row arr={arr} />})}
    </div>
  )
}
function Row(props){
return(
  <div className='Row'>
    {props.arr.map(()=>{return <Element val={reset} />})}
  </div>
)
}
class Element extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={flag:0}
    this.componentDidUpdate=this.componentDidUpdate.bind(this);
  }
  componentDidUpdate(prevprops){
  if(prevprops.val !=this.props.val)
  {this.setState({flag:1})}
 }
  render(){
    return(
      <div className='Element'> 
      </div>
    )
  }
}
class Instruction extends React.Component{
 constructor(props){
  super(props);
  this.state={flag:this.props.val}
 }
 componentDidUpdate(prevprops){
  if(prevprops.val!=this.props.val){
    this.setState({flag:this.props.val})
  }
 }
  render(){
  return (
    <div className='instruction'>
      <div style={{backgroundColor:'blue',height:'80px',textAlign:'center',fontSize:'30px'}}>
      <li>Instruction Implemented</li>
      </div>
    </div>
  )
  }
}
function Learn(){
return(
  <div className='learn'>
  Learn
  </div>
)
}
class Panelbutton extends React.Component{
  constructor(props){
    super(props);
    this.state={index:this.props.index,val:''}
  }
  componentDidUpdate(){
    if(this.state.flag!=reset){
      this.setState({flag:reset,val:'',index:this.props.index})
    }
  }
  render(){
  return(
    <div draggable onDragOver={(e)=>{e.preventDefault();this.setState({val:current});logic[this.state.index]=current}} className='panelbutton'>
      {this.state.val=='U' && <img src={uparrow} className='arrow1'></img>}
      {this.state.val=='D' && <img src={downarrow} className='arrow1'></img>}
      {this.state.val=='L' && <img src={leftarrow} className='arrow1'></img>}
      {this.state.val=='R' && <img src={rightarrow} className='arrow1'></img>}
      </div>
  )
  }
}
class Logicpanel extends React.Component{
  constructor(){
    super()
    this.state={flag:reset}
  }
  componentDidUpdate(){
    if(this.state.flag!=reset)
    this.setState({flag:reset})
  }
  render(){
    const items=[];
    for(let i=0;i<15;i++)
    items.push(<Panelbutton index={i}/>)
  return(
    <div className='logicpanel' >
      <li>Logicpanel</li>
      {items.map((ele)=>{return ele})}
      
    </div>
  )}

}
function Controls(){
  return(
    <div className='controls'>
      <Controlbutton val='U'/>
      <Controlbutton val='R'/>
      <Controlbutton val='D'/>
     < Controlbutton val='L'/>
    </div>
  )
}
class Controlbutton extends React.Component{
  constructor(props){
    super(props)
    this.state={val:props.val}
    this.handle=this.handle.bind(this);
  }
  handle(){
    current=this.state.val;
  }
  render(){
    return(
      <div className='controlbutton' draggable onDrag={this.handle}>
        {this.state.val=='U'&& <img src={uparrow} className='arrow'></img>}
        {this.state.val=='D' && <img src={downarrow}className='arrow'></img>}
        {this.state.val=='R'&& <img src={rightarrow} className='arrow'></img>}
        {this.state.val=='L'&& <img src={leftarrow} className='arrow'></img>}

      </div>
    )
  }
}
let row=0,col=0,i=0;
let text=document.createElement("li");
let util;
function Play(props){
function handle(){
  if(row==4 && col==4){
    let text=document.createElement("li");
    text.appendChild(document.createTextNode(instruction.done));
    r.childNodes[2].appendChild(text);
    return;
  }
  if(i==logic.length || logic[i]==-1)return;
 
  setTimeout(()=>{
    if(i==logic.length || logic[i]==-1)return;
    if(logic[i]=='U'){
      if(row==0)return;
      r.childNodes[1].childNodes[row].childNodes[col].removeChild( r.childNodes[1].childNodes[row].childNodes[col].firstChild)
      r.childNodes[1].childNodes[row-1].childNodes[col].appendChild(t);
      let text=document.createElement("li");
      text.appendChild(document.createTextNode(instruction.up));
      r.childNodes[2].appendChild(text)
      row--;

    }
    else if(logic[i]=='D'){
      if(row==4)return;
      r.childNodes[1].childNodes[row].childNodes[col].removeChild( r.childNodes[1].childNodes[row].childNodes[col].firstChild)
      r.childNodes[1].childNodes[row+1].childNodes[col].appendChild(t);
      let text=document.createElement("li");
      text.appendChild(document.createTextNode(instruction.down));
      r.childNodes[2].appendChild(text)
      row++;
    }
    else if(logic[i]=='L'){
      if(col==0)return;
      r.childNodes[1].childNodes[row].childNodes[col].removeChild( r.childNodes[1].childNodes[row].childNodes[col].firstChild)
      r.childNodes[1].childNodes[row].childNodes[col-1].appendChild(t);
      let text=document.createElement("li");
      text.appendChild(document.createTextNode(instruction.left));
      r.childNodes[2].appendChild(text)
      col--;
    }
    else{
      if(col==4)return;
      r.childNodes[1].childNodes[row].childNodes[col].removeChild( r.childNodes[1].childNodes[row].childNodes[col].firstChild)
      r.childNodes[1].childNodes[row].childNodes[col+1].appendChild(t);
      let text=document.createElement("li");
      text.appendChild(document.createTextNode(instruction.right));
      r.childNodes[2].appendChild(text)
      col++;
    }
    i++;
    handle();
  },500);
}
  return(
    <button className='play' onClick={handle}>
      {props.text}
    </button>
  )
}
function Reset(){
  function handle(){
    row=0;col=0;i=0;
    remove(r.childNodes[2])
    reset++;
    for(let i=0;i<15;i++)logic[i]=-1;
    root.render(<Page/>)
  }
  return (
     <button onClick={handle} className='play'>reset</button>
  )
}
function remove(parent){
  if(parent.childNodes.length==1)return;
  parent.removeChild(parent.lastChild)
  remove(parent);
}
root.render(<Page/>);
