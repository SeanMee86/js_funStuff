"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var FeatureOne_1 = require("./FeatureOne");
var FeatureTwo_1 = require("./FeatureTwo");
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.featureArray = [];
    }
    Calculator.prototype.addFeatures = function (featureOneCost, featureTwoCost) {
        this.featureArray = [];
        this.featureArray.push(new FeatureOne_1.FeatureOne(featureOneCost));
        this.featureArray.push(new FeatureTwo_1.FeatureTwo(featureTwoCost));
        return this.featureArray
            .map(function (feature) { return feature.calculate(); })
            .reduce(function (a, b) { return a + b; })
            .toString();
    };
    return Calculator;
}());
exports.Calculator = Calculator;
