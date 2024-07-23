setTimeout(function(){
    $('.loader').fadeToggle();
}, 1500);

gsap.from("#nav-item", { opacity: 0, x: 100, duration: 4, stagger: 5, delay: 1 });
gsap.from(".hero-title",{opacity: 0, y:100, duration: 4, delay: 2, });




