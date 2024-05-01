let width=window.innerWidth/100;
let height=window.innerHeight/100
let h_font="black";
export function mode2(){
    if(h_font=="black")
    {
        h_font="white"
    }
    else{
        h_font="black"
    }
}
export const res2={
    stats:{
        image:function(image)
        {
            let style={
                width:`${10*width}px`,
                height:`${20*height}px`,
                position:'relative',
                top:`${10*height}px`,
                left:`${5*width}px`,
                backgroundImage:`url(${image})`,
                backgroundSize:`${10*width}px ${20*height}px`,
            }
            return style;
        },
        leaderboard:function(){
            let style={
               position:'relative',
               bottom:`${30*height}px`,
               left:`${30*width}px`,
               width:`${40*width}px`,
               border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
               color:h_font

            }
            return style;
        },
        header:function(){
            let style={
                height:`${10*height}px`,
                width:`${60*width}px`,
                position:"relative",
                color:h_font

            }
            return style;
        },
        heading:function(){
            let style={
                bottom:`${30*height}px`,
                left:`${41.5*width}px`,
                position:"relative",
                margin:`${5*height}px`,
                color:h_font,
                fontWeight:'100'
            }
            return style;
        },
        footer:function(){
            let style={
                position:"relative",
                top:`${22*height}px`
            }
            return style;
        },
        table:function(){
            let style={
                position:'relative',
                color:h_font,
                top:`${15*height}px`,
                left:`${5*width}px`
            }
            return style
        }
    
   
    }
}