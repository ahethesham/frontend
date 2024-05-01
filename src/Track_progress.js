import React from 'react'
import ReactDOM from 'react-dom'
import {res2} from './responsive_02.js'
import { Heading } from './heading.js'
import { addresses, current_user } from './index.js'
import img from './account_02.png'
import { Footer } from './footer.js'
export class Track_progress extends React.Component{
    constructor(){
        super()
        this.state={footer:res2.stats.footer()}
    }
    resize(){
        this.setState({footer:res2.stats.footer()})
    }
    render(){
        return(
            <>
            <Heading logout={this.props.logout}/>
            <Stats/>
            <Leaderboard/>
            <div style={this.state.footer}>
            <Footer/>
            </div>
            </>
        )
    }
}
class Stats extends React.Component{
    constructor(){
        super()
        this.state={stats:{},style:res2.stats.header,image:res2.stats.image(img),table:res2.stats.table()}
        fetch('http://localhost:8000/track/getstats',{
            method:'POST',
            body:JSON.stringify(current_user),
            headers:{
                'Content-type':'application/json'
            }
        }).then((res)=>res.json()).then((res)=>{
            this.setState((prev)=>{return {stats:res,image:prev.image,table:prev.table}})
        })
        this.resize=this.resize.bind(this)
    }
    componentDidMount(){
        addresses.Stats=this
    }
    componentDidUpdate(){
        addresses.Stats=this
    }
    resize(){
        this.setState((prev)=>{return {stats:prev.stats,image:res2.stats.image(img),table:res2.stats.table()}})
    }
    render()
    {
        return<>
        <div style={this.state.image}>
        </div>
        <table style={this.state.table}>
            <tr>
        <td  style={{color:'inherit'}}>{`username  :`}</td>
        <td  style={{color:'inherit'}}>{current_user.username}</td>
        </tr>
        <tr>
        <td  style={{color:'inherit'}}>{`E-mail  :`}</td>
        <td style={{color:'inherit'}}>{current_user.email}</td>
        </tr>
        <tr>
            <td style={{color:'inherit'}}>{`Score   :`}</td>
            <td style={{color:'inherit'}}>{this.state.stats.score}</td>
        </tr>
        <tr>
            <td style={{color:'inherit'}}>{`Accuracy  `}</td>
            <td style={{color:'inherit'}}>{this.state.stats.accuracy}</td>
        </tr>
        <tr>
            <td  style={{color:'inherit'}}>{`Rank:`}</td>
            <td style={{color:'inherit'}}>{this.state.stats.rank}</td>
        </tr>
        </table>
        </>
    }
}
class Leaderboard extends React.Component{
    constructor(){
        super()
        this.state={style:res2.stats.leaderboard(),arr:[],header:res2.stats.header(),heading:res2.stats.heading()}
        fetch('http://localhost:8000/track/getleaderboard',{
            method:"POST",
            headers:{
                "Content-type":'application/json'
            },
            body:JSON.stringify(current_user)
        }).then((res)=>res.json()).then((res)=>{
            this.setState((prev)=>{return{arr:res,style:prev.style,header:prev.header,heading:prev.heading}})
        })
        this.resize=this.resize.bind(this)
        window.addEventListener('resize',this.resize)
    }
    componentDidMount(){
        addresses.Leaderboard=this
    }
    componentDidUpdate(){
        addresses.Leaderboard=this
    }
    resize(){
        this.setState((prev)=>{return {arr:prev.arr,style:res2.stats.leaderboard(),header:res2.stats.header(),heading:res2.stats.heading()}})
    }
    render(){
        return  <>
        <h1 style={this.state.heading}>Leaderboard</h1>
        <table style={this.state.style}> 
           <tr style={this.state.header}>
                  <th style={{color:'inherit'}}>Rank</th>
                 <th style={{color:'inherit'}}>User</th>
                 <th style={{color:'inherit'}}>Score</th>
             </tr>
             {
                this.state.arr.map((info,ind)=>{
                    return<>
                    <tr >
                        <td style={{color:'inherit',border:'0.5px solid grey',textAlign:'center',fontWeight:'100'}}>{ind+1}</td>
                        <td style={{color:'inherit',border:'0.5px solid grey',textAlign:'center',fontWeight:'100'}}>{info[0]}</td>
                        <td style={{color:'inherit',border:'0.5px solid grey',textAlign:'center',fontWeight:'100'}}>{info[1]}</td>
                    </tr>
                    </>
                })
             }
             </table>
             </>
    }
}



/*{this.state.arr.map(()=>{
   <h1 style={{top:'20px',position:'relative',color:'white'}}>hellomedkjwfirkjf</h1>
})}
</>*/