const tl = gsap.timeline ( { 
    defaults: { 
        ease: "power1.out" 
    } 
} );

tl.to ( ".text" , { 
    y: "0%" ,
    duration: 1 , 
    stagger: 0.1 
} ); // translation - move text to 0% on the y axis from where it is, take 1 second, stagger lines by .1s
// also, by using tl. opposed to gsap. means that the script will run one after another, like a time line = tl.

tl.to ( ".text" , { 
    y: "-150%" , 
    duration: 1 , 
    stagger: .01 , 
    delay: 1.5 
} );

tl.fromTo ( ".intro" , { 
    opacity: 1 
} , { 
    opacity: 0 , 
    duration: 0.5
} );

tl.fromTo ( ".main" , { 
    opacity: 0 
} , { 
    opacity: 1 , 
    duration: 2
} );

tl.fromTo ( ".hero h2" , { 
    opacity: 0 
} , { 
    opacity: 1 , 
    duration: 3 
} );

tl.fromTo ( ".hero a" , { 
    opacity: 0 
} , { 
    opacity: 1 , 
    duration: 3 
}, "-=1" );