import {Calculate} from "../Interfaces/Calculate";
import {Feature} from "./Feature";

export class FeatureThree extends Feature implements Calculate {

    constructor(cost: number) {
        super(cost);
        this.amount = parseInt((document.getElementById("myNumThree") as HTMLInputElement).value);
    }

    calculate(): number {
        return this.cost * this.amount;
    }
}