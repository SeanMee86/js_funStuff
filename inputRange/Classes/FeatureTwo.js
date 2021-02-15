"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureTwo = void 0;
var Feature_1 = require("./Feature");
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
}(Feature_1.Feature));
exports.FeatureTwo = FeatureTwo;
