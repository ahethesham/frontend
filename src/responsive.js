export const responsive={
    heading:{
        main:function(){
        let width=window.innerWidth/100,height=window.innerHeight/100
        let main={
            color:'wheat',
            height:`${7*height}px`,
            width:`${100*width}px`,
            fontSize:`${Math.min(1*height,1*width)}px`,
            zIndex:'1',
            backgroundColor:'black',
            position:'fixed',
            bottom:`${93*height}px`,
            fontFamily:'Oswald'  
        }
        return main;
    },
    exit:function(){
        let width=window.innerWidth/100,height=window.innerHeight/100
        let main={
            color:'wheat',
            height:`${5*height}px`,
            width:`${7*width}px`,
            fontSize:`${Math.min(3*height,3*width)}px`,
            zIndex:'1',
            backgroundColor:'black',
            position:'relative',
            fontFamily:'Oswald'  ,
            border:'black'
        }
        return main;
    }
    },
    dsa:{
        Main:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100

        let style={
            //top:`${5*height}px`,
            position:'relative',
            height:`${30*height}px`,
            width:`${70*width}px`,
            left:`${15*width}px`,
           bottom:`${10*height}px`,
            border:`${Math.min(0.5*height,0.5*width)}px`,
            boxShadow:`0px 2px 10px`,
            color:'grey',
            fontSize:`${Math.min(5*height,5*width)}px`,
            textAlign:'left',
            background:'transparent'
        }
        return style
       },
       text:function(){
        let width=window.innerWidth/100,height=window.innerHeight/100

        let style={
            background:'transparent',
            fontSize:`${Math.min(2*height,2*width)}px`,
            color:'grey',
            bottom:`${30*height}px`,
            height:`${25*height}px`,
            border:'0px solid black',
            left:`${12*width}px`,
            position:'relative',
            width:`${50*width}px`,
        }
        return style
       },
       image:function(image){
        let width=window.innerWidth/100,height=window.innerHeight/100
        let style={
            position:'relative',
            height:`${30*height}px`,
            width:`${20*width}px`,
            backgroundImage:`url(${image})`,
            backgroundRepeat:`no-repeat,no-repeat`,
            backgroundSize:`${11*width}px ${25*height}px`,
            backgroundPositionY:'center'
        }
        return style;
       }
       },
       sidebar:{
        main:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100

            let style={
                top:`${7.3*height}px`,
                position:'fixed',
                zIndex:'1',
                height:`${100*height}px`,
                width:`${10*width}px`,
                border:`${Math.min(0.2*height,0.2*width)}px solid grey`,
                backgroundColor:'rgb(31, 28, 28)',
                color:'white',
                boxShadow:'0px 1px 7px'
                
            }
            return style
        },
        Element:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                height:`${7*height}px`,
                width:`${10*width}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                fontSize:`${Math.min(2*height,2*width)}px`,
                color:'grey',
                textAlign:'center',
                backgroundColor:'rgb(31, 28, 28)'
            }
            return style;
        },
        text:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                bottom:`${0.5*height}px`,
                left:`${1*width}px`,
                fontSize:`${Math.min(2*height,2*width)}px`,
                color:'grey',
                fontFamily:'Oswald'

            }
            return style;
        },
        image:function(img){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                height:`${3*height}px`,
                width:`${2*width}px`,
                backgroundImage:`url(${img})`,
                backgroundRepeat:`no-repeat,no-repeat`,
                backgroundSize:`${2*width}px ${3*height}px`,
                top:`${2*height}px`,
                left:`${0.5*width}px`,
                backgroundPositionY:'center',
                backgroundPositionX:'center'
            }
            return style;
        }
       },
    OS:function(){
        let width=window.innerWidth/100,height=window.innerHeight/100
        let style={
            left:`${14*width}px`,
            position:'relative',
        }
        return style;
    },
    java:function(){
        let width=window.innerWidth/100,height=window.innerHeight/100
        let style={
            left:`${14*width}px`,
            position:'relative',
            bottom:`${50*height}px`
        }
        return style;
    },
    cn:function(){
        let width=window.innerWidth/100,height=window.innerHeight/100
        let style={
            left:`${55*width}px`,
            position:'relative',
            bottom:`${82*height}px`
        }
        return style;
    },
    html:function(){
        let width=window.innerWidth/100,height=window.innerHeight/100
        let style={
            left:`${14*width}px`,
            position:'relative',
            bottom:`${75*height}px`
        }
        return style;
    },
    JS:function(){
        let width=window.innerWidth/100,height=window.innerHeight/100
        let style={
            left:`${14*width}px`,
            position:'relative',
            bottom:`${25*height}px`
        }
        return style;
    },
    React:function(){
        let width=window.innerWidth/100,height=window.innerHeight/100
        let style={
            left:`${56*width}px`,
            position:'relative',
            bottom:`${57*height}px`
        }
        return style;
    },
    S2:
        {
        Main:function(){
        let width=window.innerWidth/100,height=window.innerHeight/100
        let style={
            top:`${15*height}px`,
            position:'relative',
            height:`${30*height}px`,
            width:`${30*width}px`,
            border:`${Math.min(0.5*height,0.5*width)}px`,
            boxShadow:`0px 2px 10px`,
            color:'grey',
            fontSize:`${Math.min(2*height,2*width)}px`,
            textAlign:'center',
            fontFamily:'Oswald'

        }
        return style;
        },
        image:function(img){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                height:`${25*height}px`,
                width:`${20*width}px`,
                backgroundImage:`url(${img})`,
                backgroundRepeat:`no-repeat,no-repeat`,
                backgroundSize:`${Math.min(20*width,25*height)}px ${Math.min(20*width,25*height)}px`,
                backgroundPositionY:'center',
                backgroundPositionX:'center',
                left:`${5*width}px`,
                bottom:`${Math.min(2*height,1.5*width)}px`
            }
            return style;
        }
        },
    DBMS:function(){
        let width=window.innerWidth/100,height=window.innerHeight/100
        let style={
          //  top:`${15*height}px`,
            left:`${55*width}px`,
            position:'relative',
            bottom:`${33*height}px`
        }
        return style;
    },
    questions:{
        image:function(img){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
               top:`${10*height}px`,
                position:'relative',
                height:`${10*height}px`,
                width:`${5*width}px`,
                backgroundImage:`url(${img})`,
                backgroundRepeat:`no-repeat,no-repeat`,
                backgroundSize:`${5*width}px ${10*height}px`,
                backgroundPositionY:'center',
                backgroundPositionX:'center'
            }
            return style;
        },
        heading:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100

            let style={
                top:`${2*height}px`,
                position:'relative',
                background:'transparent',
                fontSize:`${Math.min(5*height,3*width)}px`,
                color:'grey',
                height:`${10*height}px`,
                border:'0px solid black',
                left:`${6*width}px`,
                bottom:`${5*height}px`,
                
                //width:`${50*width}px`,
            }
            return style
        }
    },
    sidebar_02:{
        main:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            
            let style={
              //overflowY:'hidden',
              overflowX:'hidden',
              top:`${1*height}px`,
                position:'relative',
                height:`${80*height}px`,
                width:`${10*width}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                color:'white',
                boxShadow:'0px 1px 5px'

            }
            return style
            
           
        },
        Element:function(flag){
            let width=window.innerWidth/100,height=window.innerHeight/100
           if(!flag){
            let style={
                position:'relative',
                height:`${7*height}px`,
                width:`${10*width}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                fontSize:`${Math.min(2*height,2*width)}px`,
                color:'grey',
                textAlign:'center',
                backgroundColor:'transparent'
            }
            return style;
            }
            let style={
                position:'relative',
                height:`${7*height}px`,
                width:`${10*width}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                fontSize:`${Math.min(2*height,2*width)}px`,
                color:'black',
                textAlign:'center',
                backgroundColor:'grey'
            }
            return style;
            
        },
        text:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                bottom:`${0.5*height}px`,
                left:`${1*width}px`,
                fontSize:`${Math.min(1.5*height,1.5*width)}px`,
                display:'inline',
                //color:'grey',
            }
            return style;
        },
        image:function(img){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                height:`${3*height}px`,
                width:`${2*width}px`,
                backgroundImage:`url(${img})`,
                backgroundRepeat:`no-repeat,no-repeat`,
                backgroundSize:`${2*width}px ${3*height}px`,
                top:`${2*height}px`,
                left:`${0.5*width}px`,
                backgroundPositionY:'center',
                backgroundPositionX:'center'
            }
            return style;
        }
    },
    Q_bar:{
        question_bar:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                width:`${75*width}px`,
                height:`${75*height}px`,
                border:`${Math.min(0.2*height,0.1*width)}px solid grey`,
                background:'transparent',
                left:`${15*width}px`,
               bottom:`${80*height}px`,
                color:'wheat',
                fontSize:`${Math.min(2*height,2*width)}px`,
                boxShadow:'0px 1px 8px'
            }
            return style;
        },
        slider:function(flag){
            let width=window.innerWidth/100,height=window.innerHeight/100;
            let w,h;
            if(!flag)
            {
             w=`${Math.min(4*height,4*width)}px`;
             h=`${Math.min(4*height,4*width)}px`;
            }
            else{
                w=`${Math.min(7*height,7*width)}px`;
                h=`${Math.min(7*height,7*width)}px`;
            }
            let style={
                position:'relative',
                width:w,
                height:h,
                border:`${Math.min(0.2*height,0.1*width)}px solid grey`,
                backgroundColor:'darkgreen',
                color:'white',
                fontSize:`${Math.min(2*height,2*width)}px`,
                borderRadius:`${4*width}px`,
                display:'inline',
            }
            return style;
        },
        next_button:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                width:`${Math.min(4*height,4*width)}px`,
                height:`${Math.min(4*height,4*width)}px`,
                border:`${Math.min(0.2*height,0.1*width)}px solid grey`,
                backgroundColor:'darkgrey',
                color:'white',
                fontSize:`${Math.min(2*height,2*width)}px`,
                borderRadius:`${4*width}px`,
                display:'inline',
                color:'black'
            }
            return style;
        },
        Main_slider:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                bottom:`${8*height}px`,
                left:`${25*width}px`,
               // display:'inline'
            }
            return style;
        },
        gap:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
               // top:`${15*height}px`,
               position:'relative',
               width:`${4*width}px`,
               height:`${4*height}px`,
               color:'black',
              display:'inline'

            }
            return style;
        },
        snippet(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                height:`${70*height}px`,
                position:'relative',
                width:`${70*width}px`,
                left:`${2*width}px`,
                bottom:`${5*height}px`,
                color:'whitesmoke',
                background:'transparent',
                fontSize:`${Math.min(1.9*height,0.9*width)}px`,
                border:`${Math.min(0*height,0.1*width)}px solid transparent`,
            }
            return style;
        },
        options:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={

                height:`${7*height}px`,
                position:'relative',
                width:`${40*width}px`,
                left:`${30*width}px`,
                bottom:`${50*height}px`,
                color:'whitesmoke',
                background:'transparent',
                fontSize:`${Math.min(2*height,1*width)}px`,
               // border:`${Math.min(0.01*height,0.01*width)}px solid darkgrey`,
                padding:`${3*height}px`
            }
            return style;
        },
        checkbox:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                width:`${Math.min(3*height,2*width)}px`,
                borderRadius:`${Math.min(3*height,2*width)}px`,
                backgroundColor:'yellow'
            }
            return style;
        }
        
    },
    footer:{
        Main:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                width:"100%",
                height:`${35*height}px`,
                backgroundColor:'rgb(26, 25, 25)',
                color:'white',
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                zIndex:'2',
               display:'flex',
                overflowY:'hidden'
            }
            return style;
        },
        footer_section:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                width:`${10*width}px`,
                height:`${15*height}px`,
                top:`${2*height}px`,
                color:'white',
                left:`${4*width}px`,
                fontSize:`${Math.min(1.2*height,1.2*width)}px`,
                display:'block'
            }
            return style;
        },
            list:function(){
                let width=window.innerWidth/100,height=window.innerHeight/100
                let style={
                    position:'relative',
                   // width:`${10*width}px`,
                   // height:`${15*height}px`,
                    //top:`${4*height}px`,
                    color:'white',
                  //  right:`${2*width}px`,
                    fontSize:`${Math.min(1.2*height,1.2*width)}px`,
                    display:'block'
                }
                return style;
            }
            
        },
        explore:{
            Main:function(){
                let width=window.innerWidth/100,height=window.innerHeight/100
                let style={
                    position:'relative',
                    height:`${40*height}px`,
                    width:`${100*width}px`,
                    overflowX:'scroll',
                    color:'grey',
                    fontSize:`${Math.min(3*height,3*width)}px`,
                    backgroundColor:'inherit',
                    border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                    bottom:`${30*height}px`,
                    display:'flex',
                    scrollbarColor:'black black',
                    scrollbarWidth: 'thin'

                }
                return style
            },
            Element:function(){
                let width=window.innerWidth/100,height=window.innerHeight/100
                let style={
                    position:'relative',
                    height:`${30*height}px`,
                    width:`${30*width}px`,
                    color:'grey',
                    right:`${5*width}px`,
                    top:`${5*height}px`,
                    fontSize:`${Math.min(3*height,3*width)}px`,
                    backgroundColor:'black',
                    border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                    marginRight:`${3*width}px`,
                    boxShadow:'0px 2px 10px'
                }
                return style
            },
            image:function(img){
                let width=window.innerWidth/100,height=window.innerHeight/100
                let style={
                    position:'relative',
                    height:`${20*height}px`,
                    width:`${15*width}px`,
                    backgroundImage:`url(${img})`,
                    backgroundRepeat:`no-repeat,no-repeat`,
                    backgroundSize:`${7*width}px ${20*height}px`,
                    top:`${3*height}px`,
                   // right:`${8*width}px`,
                    backgroundPositionY:'center',
                    backgroundPositionX:'center'
                }
                return style
            },
            text:function(){
                let width=window.innerWidth/100,height=window.innerHeight/100
                let style={
                    height:`${4*height}px`,
                    position:'relative',
                    backgroundColor:'black',
                    overflow:'hidden',
                    width:`${10*width}px`,
                    top:`${3*height}px`,
                    border:`${Math.min(1*height,1*width)}px solid black`,

                   left:`${2*width}px`,
                    fontSize:`${Math.min(1.5*height,1.5*width)}px`,
                    color:'white',
                    textAlign:'center'
                }
                return style
            }
        },
        scroll_bar:{
            Main:function(){
                let width=window.innerWidth/100,height=window.innerHeight/100
                let style={
                    position:'relative',
                    height:`${35*height}px`,
                    width:`${45*width}px`,
                    overflowX:'auto',
                    color:'grey',
                    fontSize:`${Math.min(3*height,3*width)}px`,
                    backgroundColor:'inherit',
                  //border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                    top:`${15*height}px`,
                    left:`${25*width}px`,
                    display:'flex'
                }
                return style;
            },
            buttonl:function(){
                let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                width:`${Math.min(4*height,4*width)}px`,
                height:`${Math.min(4*height,4*width)}px`,
                border:`${Math.min(0.2*height,0.1*width)}px solid grey`,
                color:'white',
                fontSize:`${Math.min(2*height,2*width)}px`,
                borderRadius:`${4*width}px`,
                display:'inline',
                color:'white',
                top:`${14*height}px`,
                background:'transparent',
               // left:`${2*width}px`
            }
            return style
        },
            buttonr:function(){
                let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                width:`${Math.min(4*height,4*width)}px`,
                height:`${Math.min(4*height,4*width)}px`,
                border:`${Math.min(0.2*height,0.1*width)}px solid grey`,
                color:'white',
                fontSize:`${Math.min(2*height,2*width)}px`,
                borderRadius:`${4*width}px`,
                display:'inline',
                color:'white',
                top:`${14*height}px`,
                background:'transparent',
                left:`${3*width}px`
            }
            return style;
        },
            Element:function(flag){
                let width=window.innerWidth/100,height=window.innerHeight/100
                if(flag){
                    let style={
                        position:'relative',
                        height:`${Math.min(30*height,29*width)}px`,
                        width:`${Math.min(30*height,29*width)}px`,
                        color:'grey',
                        top:`${3*height}px`,
                        fontSize:`${Math.min(3*height,3*width)}px`,
                       backgroundColor:'black',
                      border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                      borderRadius:`${Math.min(30*height,29*width)}px`,
                     marginRight:`${1*width}px`,
                     marginLeft:`${1*width}px`,
                     overflow:'hidden',
                     left:`${2*width}px`,
                     boxShadow:`0px 2px 10px`,

                    }
                    return style
                }
                else{
                    let style={
                        
                        position:'relative',
                        height:`${Math.min(10*height,10*width)}px`,
                        width:`${Math.min(10*height,10*width)}px`,
                        color:'grey',
                        top:`${11*height}px`,
                        fontSize:`${Math.min(3*height,3*width)}px`,
                        backgroundColor:'black',
                        borderRadius:`${Math.min(10*height,10*width)}px`,
                        border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                        marginRight:`${1*width}px`,
                        overflow:'hidden',
                        left:`${2*width}px`,
                        boxShadow:`0px 1px 5px`,

                    }
                    return style;
                }
            },
            image:function(flag,img){
                let width=window.innerWidth/100,height=window.innerHeight/100
                if(flag)
                {
                let style={
                    position:'relative',
                    height:`${Math.min(18*height,15*width)}px`,
                    width:`${Math.min(18*height,15*width)}px`,
                    backgroundImage:`url(${img})`,
                    backgroundRepeat:`no-repeat,no-repeat`,
                    backgroundSize:`${Math.min(18*height,18*width)}px ${Math.min(18*height,15*width)}px`,
                    top:`${4*height}px`,
                   left:`${3*width}px`,
                    backgroundPositionY:'center',
                    backgroundPositionX:'center'
                }
                return style
                }
                else{
                    let style={
                        position:'relative',
                        height:`${3*height}px`,
                        width:`${4*width}px`,
                        backgroundImage:`url(${img})`,
                        backgroundRepeat:`no-repeat,no-repeat`,
                        backgroundSize:`${2*width}px ${3*height}px`,
                        top:`${3*height}px`,
                        left:`${0.5*width}px`,
                       // right:`${8*width}px`,
                        backgroundPositionY:'center',
                        backgroundPositionX:'center'
                    }
                    return style
                }
            },
            text:function(flag){
                  let width=window.innerWidth/100,height=window.innerHeight/100
                if(flag)
                {
                let style={
                    height:`${4*height}px`,
                    position:'relative',
                    background:'transparent',
                    overflow:'hidden',
                    width:`${10*width}px`,
                    top:`${4*height}px`,
                    border:`${Math.min(1*height,1*width)}px transparent`,
                   left:`${2*width}px`,
                    fontSize:`${Math.min(1.5*height,1.5*width)}px`,
                    color:'white',
                    textAlign:'center'
                }
                return style

                }
                else{
                    let style={
                        height:`${2*height}px`,
                        position:'relative',
                        background:'transparent',
                        overflow:'hidden',
                        width:`${10*width}px`,
                        top:`${4*height}px`,
                        right:`${2.5*width}px`,
                        border:`${Math.min(1*height,1*width)}px transparent`,
                        fontSize:`${Math.min(1*height,1*width)}px`,
                        color:'white',
                        textAlign:'center'
                    }
                    return style
                }
            }
        },
        explore2:{
            Main:function(){
                let width=window.innerWidth/100,height=window.innerHeight/100
                let style={
                                position:'relative',
                          position:'relative',
                            height:`${20*height}px`,
                             width:`${60*width}px`,
                        overflowX:'auto',
                        color:'grey',
                        fontSize:`${Math.min(3*height,3*width)}px`,
                        backgroundColor:'inherit',
                        border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                      left:`${20*width}px`,
                      top:`${15*height}px`,
                        display:'flex'
                }
              return style
        },
 Element:function(){
        let width=window.innerWidth/100,height=window.innerHeight/100
        let style={
            position:'relative',
            height:`${10*height}px`,
            width:`${10*width}px`,
            color:'grey',
            top:`${5*height}px`,
            fontSize:`${Math.min(3*height,3*width)}px`,
            backgroundColor:'black',
            border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
            marginRight:`${3*width}px`
        }
        return style
    },
    image:function(img){
        let width=window.innerWidth/100,height=window.innerHeight/100
        let style={
            position:'relative',
            height:`${8*height}px`,
            width:`${15*width}px`,
            backgroundImage:`url(${img})`,
            backgroundRepeat:`no-repeat,no-repeat`,
            backgroundSize:`${7*width}px ${8*height}px`,
            top:`${1*height}px`,
            right:`${3*width}px`,
            backgroundPositionY:'center',
            backgroundPositionX:'center'
        }
        return style
    },
    text:function(){
        let width=window.innerWidth/100,height=window.innerHeight/100
        let style={
            height:`${4*height}px`,
            position:'relative',
            backgroundColor:'transparent',
            overflow:'hidden',
            width:`${10*width}px`,
            top:`${2*height}px`,
            border:`${Math.min(1*height,1*width)}px transparent`,

           right:`${0.5*width}px`,
            fontSize:`${Math.min(1.5*height,1.5*width)}px`,
            color:'white',
            textAlign:'center'
        }
        return style
    }
        }

}



export let responsive_mock={
    header:{
        Main:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                height:`${30*height}px`,
                width:`${20*width}px`,
                border:`${0.1*height}px solid grey`,
                left:`${77*width}px`,
                bottom:`${15*height}px`,
                color:'grey',
                boxShadow:`0px 2px 10px`,
                overflow:'hidden'
            }
            return style
        },
        heading:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
            height:`${3*height}px`,
            textAlign:'center',
            position:'relative',
            fontSize:`${Math.min(3*height,3*width)}px`
            }
            return style;
        },
        text:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                fontSize:`${Math.min(2*height,2*width)}px`,
                color:'grey',
                height:`${13*height}px`,
                width:`${20*width}px`,
                border:'transparent',
                background:'transparent',
                backgroundColor:'transparent'
            }
            return style;
        },
        button:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                height:`${5*height}px`,
                width:`${20*width}px`,
                textAlign:'center',
                position:'relative',
                color:'grey',
                fontSize:`${Math.min(2*height,2*width)}px`,
                backgroundColor:'transparent',
                border:'transparent',
                overflow:'hidden'
                }
                return style
        }
    },
    mockblock:{
        header:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                height:`${35*height}px`,
                width:`${15*width}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                overflow:'hidden',

                boxShadow:`0px 2px 10px`,
                color:'grey',
                }
                return style
        },
        footer:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
              
               position:'relative',
                top:`${30*height}px`,
            }
                return style
        },
        Main:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
               position:'relative',
              // top:`${10*height}px`,
               height:`${100*height}px`
            }
            return style
        },
        image:function(img){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                height:`${20*height}px`,
                width:`${10*width}px`,
                backgroundImage:`url(${img})`,
                backgroundRepeat:`no-repeat,no-repeat`,
                backgroundSize:`${10*width}px ${15*height}px`,
                backgroundPositionY:'center',
                left:`${2*width}px`,
                top:`${1*height}px`,
                position:'relative',
                }
                return style
        },
        text:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                fontSize:`${Math.min(2*height,2*width)}px`,
                color:"darkgrey",
                position:'relative',
                background:'transparent',
                border:'transparent',
                height:`${15*height}px`,
                width:`100%`
                        }
            return style;
        },
        cpp:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                top:`${25*height}px`,
                left:`${10*width}px`,
                }
                return style
        },
        java:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
              bottom:`${10*height}px`,
              left:`${28*width}px`,
             
                }
                return style
        },
        algo:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                bottom:`${45*height}px`,
                left:`${45*width}px`,
             
                }
                return style
        },
        ds:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                bottom:`${80*height}px`,
                left:`${63*width}px`,
             
                }
                return style
        },
        dbms:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
               bottom:`${70*height}px`,
                left:`${63*width}px`,
             
                }
                return style
        },
        cn:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                bottom:`${105*height}px`,
                left:`${45*width}px`,
             
                }
                return style
        },
        html:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                bottom:`${140*height}px`,
                left:`${28*width}px`,
             
                }
                return style
        },
        js:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                bottom:`${175*height}px`,
              left:`${10*width}px`,
             
                }
                return style
        },
        aptitude:function(b,l){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                left:`${l*width}px`,
                bottom:`${b*height}px`,
                padding:`${5*height}px`,
                float:'left'
            }
            return style;
        }

    },
    mocklist:{
        main:function(h){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                width:`${78*width}px`,
                left:`${10*width}px`,
                top:`${20*height}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`
            }
            return style
        },
        header:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                height:`${10*height}px`,
                width:`${70*width}px`,
                fontSize:`${Math.min(2*height,2*width)}px`,
                color:"wheat",
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`, 
                fontSize:`${Math.min(2*height,2*width)}px`,
             //   background:'transparent'
            }
            return style
        },
        button:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                width:`${8*width}px`,
                height:`${5*height}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                 fontSize:`${Math.min(1.5*height,1.5*width)}px`,
                color:"grey",
                textAlign:'center',
                background:'transparent'
            }
            return style;
        },
        serial_no:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                width:`${5*width}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`, fontSize:`${Math.min(2*height,2*width)}px`,
                color:"grey",
                textAlign:'center'
            }
            return style;
        },
        title:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                width:`${30*width}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                fontSize:`${Math.min(2*height,2*width)}px`,
                color:"grey",                textAlign:'center'

            }
            return style;
        },
        difficulty:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                width:`${10*width}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`, fontSize:`${Math.min(2*height,2*width)}px`,
                color:"grey",                textAlign:'center'


            }
            return style;
        },
        status:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                width:`${15*width}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`, fontSize:`${Math.min(2*height,2*width)}px`,
                color:"grey",             
                   textAlign:'center'
            }
            return style;
        },
        tag:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                width:`${10*width}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`, fontSize:`${Math.min(2*height,2*width)}px`,
                color:"grey",             
                   textAlign:'center'
            }
            return style;
        }
    },
    mocklist_entry:{
        header:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                height:`${5*height}px`,
                width:`${70*width}px`,
                fontSize:`${Math.min(2*height,2*width)}px`,
                color:"grey",                textAlign:'center'

            }
            return style
        },
    },
    test_page:{
        timer:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100

            let style={
            position:'relative',
            color:'white',
            fontSize:`${Math.min(3.5*height,3.5*width)}px`,
            height:`${6*height}px`,
            width:`${8*width}px`,
            textAlign:'center',
            top:`${3*height}px`,
            left:`${45*width}px`
            }
            return style;
        },
        button:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                color:'white',
                fontSize:`${Math.min(3*height,3*width)}px`,
                height:`${6*height}px`,
                width:`${8*width}px`,
                textAlign:'center',
              // bottom:`${3*height}px`,
                left:`${40*width}px`,
                top:`${30*height}px`,
                backgroundColor:'blue',
                border:`black`,
                //boxShadow:'0px 1px 4px'
                }
                return style;
        },
        instructions:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:"relative",
                color:'wheat',
                top:`${10*height}px`,
                left:`${30*width}px`,
                fontSize:`${Math.min(2*height,2*width)}px`
            }
            return style;
        },
        end:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100

            let style={
                position:'relative',
                color:'white',
                fontSize:`${Math.min(3*height,3*width)}px`,
                height:`${6*height}px`,
                width:`${8*width}px`,
                textAlign:'center',
               bottom:`${3*height}px`,
                left:`${85*width}px`,
                backgroundColor:'black',
                border:`black`,
                boxShadow:'0px 1px 4px'
                }
                return style;
        },
        question:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100

            let style={
                position:'relative',
                color:'grey',
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                fontSize:`${Math.min(2*height,2*width)}px`,
                height:`${80*height}px`,
                width:`${55*width}px`,
                textAlign:'center',
               // top:`${6*height}px`,
                backgroundColor:'black'
                }
                return style;
        },
        question_text:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
             backgroundColor:'black',
             fontSize:`${Math.min(2*height,2*width)}px`,
             height:`${73*height}px`,
             width:'100%',
             color:'grey',
             border:'black',
             position:'relative',
             top:`${6*height}px`
            }
            return style;
        },
        question_bar:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100

            let style={
                position:'relative',
                color:'white',
               // border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                fontSize:`${Math.min(1.5*height,1.5*width)}px`,
                height:`${4*height}px`,
                width:`${21.8*width}px`,
                textAlign:'center',
                top:`${1*height}px`,
                left:`${40*width}px`
                }
                return style;
        },
        tab:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100

            let style={
                position:'relative',
                color:'white',
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                fontSize:`${Math.min(2*height,2*width)}px`,
                 height:`${Math.min(4*height,3*width)}px`,
                 width:`${Math.min(4*height,3*width)}px`,
                borderRadius:`${Math.min(3*height,3*width)}px`,
                textAlign:'center',
                float:'left'
                }
                return style;
        },
        options:{
            main:function() {
                let width=window.innerWidth/100,height=window.innerHeight/100

                let style={
                    position:'relative',
                    color:'white',
                    border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                    fontSize:`${Math.min(2*height,2*width)}px`,
                     height:`${80*height}px`,
                     width:`${40*width}px`,
                     backgroundColor:'black'

                    }
                    return style;
            },
            option:function(){
                let width=window.innerWidth/100,height=window.innerHeight/100
                let style={
    
                    height:`${5*height}px`,
                    position:'relative',
                   
                    color:'grey',
                    background:'transparent',
                    fontSize:`${Math.min(2*height,1*width)}px`,
                    padding:`${3*height}px`
                }
                return style;
            }
        }
    },
    score:{
        header:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                position:'relative',
                height:`${35*height}px`,
                width:`${30*width}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                fontSize:`${Math.min(2*height,2*width)}px`,
                top:`${20*height}px`,
                left:`${30*width}px`
            }
            return style
        },
        text:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100
            let style={
                height:`${25*height}px`,
                width:`100%`,
                backgroundColor:'transparent',
                fontSize:`${Math.min(2*height,2*width)}px`,
                color:'grey',
                border:'transparent',
                textAlign:'center'
            }
            return style;
        }
    }
}
