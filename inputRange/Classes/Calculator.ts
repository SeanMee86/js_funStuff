import {Calculate} from "../Interfaces/Calculate";

export class Calculator {
    addFeatures(featureArray: Calculate[]): string{
        return featureArray
            .map(feature => feature.calculate())
            .reduce((a, b) => a+b)
            .toFixed(2)
            .toString()
    }
}