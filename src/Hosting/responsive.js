let width=window.innerWidth/100,height=window.innerHeight/100
let font='black';
export const responsive={
    from:function(){
        let style={
            top:`${30*height}px`,
            position:'relative',
            left:`${35*width}px`,
            display:'flex'
        }
        return style
    },
   input:function(){
    let style={
        position:'relative',
        height:`${5*height}px`,
        width:`${10*width}px`,
        border:`${0.1*height}px solid black`,
        margin:`${5*height}px`
    }
    return style
   },
   fontStyle:function(){
    let style={
        color:font,
        height:`${2*height}px`,
        fontWeight:'100',
        fontSize:`${3*height}px`
    }
    return style
   }
}