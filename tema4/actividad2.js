$(document).ready(start);

function start() {
    let _odd = $("p:even");
    let _even = $("p:odd");
    _odd.hide();
    _even.hide();
    $("#odd_show").click(odd_show);
    $("#even_show").click(even_show);
    $("#odd_hide").click(odd_hide);
    $("#even_hide").click(even_hide);
}

function odd_show() {
    let _odd = $("p:even");
    _odd.fadeIn();
}

function even_show() {
    let _even = $("p:odd");
    _even.fadeIn();
}

function odd_hide() {
    let _odd = $("p:even");
    _odd.fadeOut();
}

function even_hide() {
    let _even = $("p:odd");
    _even.fadeOut();
}