window.addEventListener('scroll', function(e) {

    const blackHole = document.getElementById('black-hole');
    const astronaut = document.getElementById('astronaut');
    const asteroid1 = document.getElementById('asteroid-1');
    const asteroid2 = document.getElementById('asteroid-2');
    const asteroid3 = document.getElementById('asteroid-3');
    const title = document.getElementById('home-page-title');

    let scroll = window.scrollY;
    let scale = 1 - scroll * 0.001;

    blackHole.style.transform = 'translate3d(0px, '+ scroll * 0.2 +'px, 0px)';
    astronaut.style.transform = 'scale(0.4) translate3d('+ scroll * 0.4 + 'px, '+ scroll * -0.8 +'px, 0px)';
    asteroid1.style.transform = 'scale(0.1) translate3d('+ scroll * -2 + 'px, '+ scroll * -3 +'px, 0px)';
    asteroid2.style.transform = 'scale(0.1) translate3d('+ scroll * 5 + 'px, '+ scroll * -4 +'px, 0px)';
    asteroid3.style.transform = 'scale(0.1) translate3d('+ scroll * 2 + 'px, '+ scroll * 6 +'px, 0px)';
    title.style.transform = 'translate3d(0px, '+ scroll * 0.5 +'px, 0px)';
    

})

