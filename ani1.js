const tl = gsap.timeline ( { 
    defaults: { 
        ease: "power1.out" 
    } 
} );

tl.fromTo ( ".hero h2" , { 
    opacity: 0 
} , { 
    opacity: 1 , 
    duration: 3 ,
    delay: 1 
} );

tl.fromTo ( ".hero a" , { 
    opacity: 0 
} , { 
    opacity: 1 , 
    duration: 3 
} );