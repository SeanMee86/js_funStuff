var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Feature = /** @class */ (function () {
    function Feature(cost) {
        this.cost = cost;
    }
    return Feature;
}());
var FeatureOne = /** @class */ (function (_super) {
    __extends(FeatureOne, _super);
    function FeatureOne(cost) {
        var _this = _super.call(this, cost) || this;
        _this.amount = parseInt(document.getElementById('myNumber').value);
        return _this;
    }
    FeatureOne.prototype.calculate = function () {
        return this.cost * this.amount;
    };
    return FeatureOne;
}(Feature));
var FeatureTwo = /** @class */ (function (_super) {
    __extends(FeatureTwo, _super);
    function FeatureTwo(cost) {
        var _this = _super.call(this, cost) || this;
        _this.amount = parseInt(document.getElementById('myRange').value);
        return _this;
    }
    FeatureTwo.prototype.calculate = function () {
        var total;
        if (this.amount <= 10) {
            total = this.cost * this.amount;
        }
        else {
            total = this.cost * this.amount * .9;
        }
        return total;
    };
    return FeatureTwo;
}(Feature));
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.addFeatures = function (featureOneCost, featureTwoCost) {
        this.featureArray = [];
        this.featureArray.push(new FeatureOne(featureOneCost));
        this.featureArray.push(new FeatureTwo(featureTwoCost));
        return this.featureArray
            .map(function (feature) { return feature.calculate(); })
            .reduce(function (a, b) { return a + b; })
            .toString();
    };
    return Calculator;
}());
var calculator = new Calculator();
var myRange = document.getElementById('myRange');
var myNum = document.getElementById('myNumber');
var featureOneCost = 10;
var featureTwoCost = 20.95;
function onTotalChange() {
    document.getElementById('costOf').innerHTML = calculator.addFeatures(featureOneCost, featureTwoCost);
}
myRange.addEventListener('input', onTotalChange);
myNum.addEventListener('change', onTotalChange);
