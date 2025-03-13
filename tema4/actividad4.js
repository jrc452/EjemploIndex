$(document).ready(start);

function start() {
    let btn = $("button");
    btn.click(anim);
}

function anim() {
    let box = $("div#box");
    box.animate({ left: '250px' }, 1000);
    box.animate({ left: 0 }, 1000);
    box.animate({ top: '250px' }, 1000);
    box.animate({ top: '29' }, 1000);
    box.animate({
        height: '+=100px',
        width: '+=100px',
        left: '100px'
    }, 1000);
    box.animate({ top: '250px' }, 1000);
    box.animate({ top: '29px' }, 1000);
    box.animate({ left: '50px' }, 1000);
    box.animate({ left: '100px' }, 1000);
    box.animate({
        left: '200px',
        right: '200px'
    }, 1000);
    box.animate({
        width: '+=25px',
        height: '-=25px'
    }, 2000);
    box.animate({
        width: '-=50px',
        height: '+=50px'
    }, 2000);
    box.animate({
        width: '+=25px',
        height: '-=25px'
    }, 2000);
    box.animate({
        height: '+=50px',
        width: '+=50px'
    }, 1000);
    box.animate({
        height: '100px',
        width: '100px',
        left: 0,
        top: '29px'
    }, 1000)
};