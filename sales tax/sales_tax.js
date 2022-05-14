"use strict";
var $ = function(id) {
    return document.getElementById(id);
};
var calulation = function(subTotal, taxRate) {
    var salesTax = subTotal * (taxRate / 100);
    var total = subTotal + salesTax;
    return total;
};
var validation = function() {
    var subTotal = parseFloat($("subTotal").value);
    var taxRate = parseFloat($("taxRate").value);
    if (isNaN(subTotal) || isNaN(taxRate) || subTotal < 0 || taxRate <0) {
        alert("Input is required and should be numeric and greater than 0");
    }  else {
        $("total").value =  calulation(subTotal, taxRate);
        var salesTax = subTotal * (taxRate / 100);
        $("salesTax").value = salesTax;
    }
};
    var clearBoxes = function (){
    $("subTotal").value = "";
    $("taxRate").value = "";
    $("salesTax").value = "";
    $("total").value = "";
}
window.onload = function() {
    $("calculate").onclick = validation;
    $("clear").onclick = clearBoxes;
};
