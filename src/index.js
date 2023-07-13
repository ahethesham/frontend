import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
let addres;

class News extends React.Component{
  constructor(){
    super()
    this.state={page:1}
  }
    
  render(){
    return(
      <div>
      <div className='Heading'>
      <div className='newslogo'></div>
      <div className='newsheading'>NEWS24</div>
      <Search/>
      </div>
      <hr/>
      <Filters/>
      <Headlines/>
      <div className='Pagenation'>
        {this.state.page>1 && <button style={{height:'30px',width:'30px',backgroundColor:'black',color:'white'}} onClick={()=>{this.setState((prev)=>{return {page:prev.page-1}});addres.util(0)}}> {"<"} </button>}
        <button style={{height:'30px',width:'30px',backgroundColor:'black',color:'white'}} onClick={()=>{this.setState((prev)=>{return {page:prev.page+1}});addres.util(1)}}>{">"}</button>
      </div>
      </div>
      
    )
  }
}
class Headlines extends React.Component{
  constructor(props){
    super(props)
    this.state={headlines:[],page:0,lang:'en',q:'coding'}
    this.util=this.util.bind(this)
    this.handleq=this.handleq.bind(this)
    addres=this
  }
  componentDidMount(){
this.util(1) 
 }
util(flag){
  if(flag==1)
  this.setState((prev)=>{return {headlines:[],page:prev.page+1,lang:prev.lang,q:prev.q}},()=>fetch(`https://newsapi.org/v2/everything?q=${this.state.q}&language=${this.state.lang}&page=${this.state.page}&pageSize=20&apiKey=9ed751fd08904a52a2ba4593563fe7d4`).then((res)=>res.json()).then((res)=>{if(res==undefined||res.articles==undefined)return;this.setState({headlines:res.articles,page:this.state.page,lang:this.state.lang})}));
  
  else
  this.setState((prev)=>{return {headlines:[],page:prev.page-1,lang:prev.lang,q:prev.q}},()=>fetch(`https://newsapi.org/v2/everything?q=${this.state.q}&language=${this.state.lang}&page=${this.state.page}&pageSize=20&apiKey=9ed751fd08904a52a2ba4593563fe7d4`).then((res)=>res.json()).then((res)=>{if(res==undefined||res.articles==undefined)return;this.setState({headlines:res.articles,page:this.state.page,lang:this.state.lang})}));

}
handleq(l){
  this.setState({headlines:[],page:1,q:l,lang:'en'},()=>fetch(`https://newsapi.org/v2/everything?q=${this.state.q}&language=${this.state.lang}&page=${this.state.page}&pageSize=20&apiKey=9ed751fd08904a52a2ba4593563fe7d4`).then((res)=>res.json()).then((res)=>{if(res==undefined||res.articles==undefined)return;this.setState({headlines:res.articles,page:this.state.page,lang:this.state.lang})}));
}

  render(){
    return(
      <div>
        {this.state.headlines!=undefined &&
        this.state.headlines.map((news)=>{if(news.source.name!='Google News')return <><div className='headlines'><img className='newsimg' src={news.urlToImage}></img><a href={news.url} className='newstext'>{news.title}<br></br><br></br><br></br>source::{news.source.name}</a></div><br></br></>})}
      </div>
    )
  }
}
class Filters extends React.Component{
  constructor(){
    super()
    this.state={q:['Fashion','Technology','Sports','Hollywood','Bollywood','Tesla','Apple','Programming']}
  }
  render(){
    return (
      <div className='filter'>
        {this.state.q.map((t)=><><div className='filter_ele' onClick={()=>addres.handleq(t)}>{t}</div></>)}
      </div>
    )
  }
}
class Search extends React.Component{
  constructor(){
    super();
    this.state={t:''}
  }
  render(){
    return (
      <div className='search'>
        <input type='text' className='searchinput' onKeyUp={(e)=>this.setState({t:e.target.value})}/>
        <div className='searchicon' onClick={()=>addres.handleq(this.state.t)}>.</div>
      </div>
    )
  }
}

ReactDOM.render(<News/>,document.getElementById('root'))