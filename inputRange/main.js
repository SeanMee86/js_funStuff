"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator_1 = require("./Classes/Calculator");
var calculator = new Calculator_1.Calculator();
var myRange = document.getElementById('myRange');
var myNum = document.getElementById('myNumber');
var featureOneCost = 10;
var featureTwoCost = 20.95;
function onTotalChange() {
    document.getElementById('costOf').innerHTML = calculator.addFeatures(featureOneCost, featureTwoCost);
}
myRange.addEventListener('input', onTotalChange);
myNum.addEventListener('change', onTotalChange);
