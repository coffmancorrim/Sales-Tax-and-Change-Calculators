"use strict";
var $ = function(id) {
    return document.getElementById(id);
};
var calulation = function(quaters) {
    var quaters = 5;
    return quaters;
};
var validation = function() {
    var change = parseInt($("change").value);
    var calculate = 0;
    if (isNaN(change) || change <0) {
        alert("Input is required and should be numeric and greater than 0");
    }  else {
        $("quaters").value =  parseInt(change / 25);
        change = change % 25;
        $("dimes").value = parseInt(change / 10);
        change = change % 10;
        $("nickels").value = parseInt(change / 5);
        change = change % 5;
        $("pennies").value = change;
    }
};

window.onload = function() {
    $("calculate").onclick = validation;
};
