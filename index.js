var crsr = document.querySelector("#cursor")
var crsr2 = document.querySelector("#cursor-blur ")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+30+"px";
    crsr.style.top=dets.y+"px";
    crsr2.style.left=dets.x - 150 +"px";
    crsr2.style.top=dets.y - 150 +"px";
})


var h4all =document.querySelectorAll("#nav h4")
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "0.2px solid white";
        crsr.style.backgroundColor= "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border ="0px solid #95C11E";
        crsr.style.backgroundColor= "#95C11E"
    })
});



gsap.to("#nav",{
backgroundColor:"#000",
height:"90px",
duration:0.5,
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -15%",
    scrub:1
}
}) 

gsap.to("#main",{
    backgroundColor:"rgba(0,0,0,1)",
    scrollTrigger:{
        treager:"#main",
        scroller:"body",
        scrub:1,
        start:"top -30%",
        end:"top -70%"
    }
}) 


gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:2 
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:2,
        // markers:true
    }
})


gsap.from("#page3 img,#page3 p",{
    scale:0.8,
    x:-20,
    y:-20,
    opacity:1,
    duration:2.5,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:2 
    }
})


gsap.from("#page4 h1",{
    y:20,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 85%",
        end:"top 70%",
        scrub:2
    }
})
