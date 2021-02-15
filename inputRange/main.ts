import {Calculator} from "./Classes/Calculator";
import {FeatureOne} from "./Classes/FeatureOne";
import {FeatureTwo} from "./Classes/FeatureTwo";
import {FeatureThree} from "./Classes/FeatureThree";

const calculator = new Calculator()

const myRange = document.getElementById('myRange')!;
const myNum = document.getElementById('myNumber')!;
const myNumThree = document.getElementById('myNumThree')!;

const f1Cost = 10;
const f2Cost = 0.25;
const f3Cost = 19.95;

function onTotalChange() {
    const features = [
        new FeatureOne(f1Cost),
        new FeatureTwo(f2Cost),
        new FeatureThree(f3Cost)
    ]
    document
        .getElementById('costOf')!
        .innerHTML = calculator
        .addFeatures(features);
}

myRange.addEventListener('input', onTotalChange);
myNum.addEventListener('change', onTotalChange);
myNumThree.addEventListener('change', onTotalChange);

