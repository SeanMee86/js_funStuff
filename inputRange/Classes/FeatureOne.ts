import {Calculate} from "../Interfaces/Calculate";
import {Feature} from "./Feature";

export class FeatureOne extends Feature implements Calculate {
    constructor(cost: number) {
        super(cost);
        this.amount = parseInt((document.getElementById('myNumber') as HTMLInputElement).value);
    }
    calculate(): number {
        return this.cost * this.amount;
    }
}