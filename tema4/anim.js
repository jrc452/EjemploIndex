$(document).ready(start);

function start() {
    let btn = $("button");
    btn.click(circleAnim);
    btn.click(boxAnim);
}

function circleAnim() {
    let circle = $("div#circle");
    circle.animate({ left: '250px' }, 1000);
    circle.animate({ left: '10px' }, 1000);
    circle.animate({ top: '250px' }, 1000);
    circle.animate({ top: '29' }, 1000);
    circle.animate({
        height: '+=100px',
        width: '+=100px',
        left: '100px',
        'border-radius': '0%',
    }, 1000);
    circle.animate({ top: '250px' }, 1000);
    circle.animate({ top: '29px' }, 1000);
    circle.animate({ left: '50px' }, 1000);
    circle.animate({ left: '100px' }, 1000);
    circle.animate({
        left: '200px',
        right: '200px',
        'border-radius': '100%'
    }, 1000);
    circle.animate({
        width: '+=25px',
        height: '-=25px'
    }, 750);
    circle.animate({
        width: '-=50px',
        height: '+=50px'
    }, 750);
    circle.animate({
        width: '+=25px',
        height: '-=25px'
    }, 750);
    circle.animate({
        height: '+=50px',
        width: '+=50px'
    }, 1000);
    circle.animate({
        height: '100px',
        width: '100px',
        left: '10px',
        top: '29px'
    }, 1000)
};

function boxAnim() {
    let box = $("div#box");
    box.animate({ left: '500px' }, 1000);
    box.animate({ top: '29px' }, 1000);
    box.animate({ left: '10px' }, 1000);
    box.animate({ left: '500px' }, 1000);
    box.animate({
        height: '-=50px',
        width: '-=50px',
        top: '100px',
        'border-radius': '100%'
    }, 1000);
    box.animate({ top: '250px' }, 1000);
    box.animate({ top: '29px' }, 1000);
    box.animate({ left: '50px' }, 1000);
    box.animate({ left: '500px' }, 1000);
    box.animate({
        left: '250px',
        top: '300px',
        'border-radius': '0%'
    }, 1000);
    box.animate({
        height: '+=100px'
    }, 750);
    box.animate({
        width: '+=300px',
    }, 750);
    box.animate({
        width: '50px',
        height: '50px'
    }, 750);
    box.animate({
        height: '100px',
        width: '100px',
        left: '10px',
        top: '150px'
    }, 2000)
}