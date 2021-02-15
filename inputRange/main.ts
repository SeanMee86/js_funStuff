interface CalculateFeature {
    calculate(): number
}

class Feature {
    cost: number;
    amount: number;

    constructor(cost: number) {
        this.cost = cost;
    }
}

class FeatureOne extends Feature implements CalculateFeature {
    constructor(cost: number) {
        super(cost);
        this.amount = parseInt((document.getElementById('myNumber') as HTMLInputElement).value);
    }
    calculate(): number {
        return this.cost * this.amount;
    }
}

class FeatureTwo extends Feature implements CalculateFeature {
    constructor(cost: number) {
        super(cost);
        this.amount = parseInt((document.getElementById('myRange') as HTMLInputElement).value);
    }
    calculate(): number {
        let total;
        if(this.amount <= 10) {
            total = this.cost * this.amount;
        } else {
            total = this.cost * this.amount * .9;
        }
        return total;
    }
}

class Calculator {
    featureArray: CalculateFeature[];

    addFeatures(
        featureOneCost: number,
        featureTwoCost: number
    ): string{

        this.featureArray = [];

        this.featureArray.push(new FeatureOne(featureOneCost));
        this.featureArray.push(new FeatureTwo(featureTwoCost))

        return this.featureArray
            .map(feature => feature.calculate())
            .reduce((a, b) => a+b)
            .toString()
    }

}

const calculator = new Calculator()

const myRange = document.getElementById('myRange');
const myNum = document.getElementById('myNumber');

const featureOneCost = 10;
const featureTwoCost = 20.95;

function onTotalChange() {
    document.getElementById('costOf').innerHTML = calculator.addFeatures(featureOneCost, featureTwoCost);
}

myRange.addEventListener('input', onTotalChange);
myNum.addEventListener('change', onTotalChange);

